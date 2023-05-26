import dayjs from 'dayjs';
import { NextResponse } from 'next/server';
import { getHolidaysInWorkDays } from '../getter';
import {
    getDateObjectFromYYYYMMDD,
    getDaysBetweenDates,
} from '@/app/utils/date';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const dateToCompare = searchParams.get('from') ? getDateObjectFromYYYYMMDD(searchParams.get('from')) : new Date();
    dateToCompare.setHours(0, 0, 0, 0);
    const holidaysAfterDate = getHolidaysInWorkDays().filter(({ date }) => dayjs(date).isAfter(dateToCompare));
    const longWeekends = [];
    let index = 0;

    for (const holiday of holidaysAfterDate) {
        const newWeekend = {
            daysUntil: getDaysBetweenDates(dateToCompare, getDateObjectFromYYYYMMDD(holiday.date)),
            holidays: [holiday],
        };

        if (!longWeekends[index]) {
            longWeekends.push(newWeekend);
            continue;
        }

        const currentHolidays = longWeekends[index].holidays;
        const lastCurrentHoliday = currentHolidays[currentHolidays.length - 1];
        const daysBetweenHolidays = getDaysBetweenDates(getDateObjectFromYYYYMMDD(lastCurrentHoliday.date), getDateObjectFromYYYYMMDD(holiday.date));

        if (daysBetweenHolidays > 3) {
            longWeekends.push(newWeekend);
            index++;
        } else {
            currentHolidays.push(holiday);
        }
    }

    return NextResponse.json({ longWeekends });
}