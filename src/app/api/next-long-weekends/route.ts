import {
    getDateObjectFromYYYYMMDD,
    getDaysBetweenDates,
    getDaysUntilLongWeekend,
} from "@/utils/date";
import { WeekendSerializableType } from "@/utils/types";
import dayjs from "dayjs";
import { NextResponse } from "next/server";
import { getHolidaysInWorkDays } from "../getter";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const dateFrom = searchParams.get('from') ? getDateObjectFromYYYYMMDD(searchParams.get('from')) : new Date();
    dateFrom.setHours(0, 0, 0, 0);

    const holidaysAfterDate = getHolidaysInWorkDays().filter(({ date }) => dayjs(date).isAfter(dateFrom));
    const longWeekends: WeekendSerializableType[] = [];
    let index = 0;

    for (const holiday of holidaysAfterDate) {
        const holidayDate = getDateObjectFromYYYYMMDD(holiday.date);
        holidayDate.setHours(0, 0, 0, 0);

        const newWeekend = {
            daysUntil: getDaysUntilLongWeekend(dateFrom, holidayDate),
            holidays: [holiday],
        };

        if (!longWeekends[index]) {
            longWeekends.push(newWeekend);
            continue;
        }

        const currentHolidays = longWeekends[index].holidays;
        const lastCurrentHoliday = currentHolidays[currentHolidays.length - 1];
        const daysBetweenHolidays = getDaysBetweenDates(holidayDate, getDateObjectFromYYYYMMDD(lastCurrentHoliday.date));

        if (daysBetweenHolidays > 3) {
            longWeekends.push(newWeekend);
            index++;
        } else {
            currentHolidays.push(holiday);
        }
    }

    return NextResponse.json({ longWeekends });
}