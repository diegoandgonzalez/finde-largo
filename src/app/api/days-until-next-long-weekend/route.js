import { NextResponse } from "next/server";
import { getHolidaysInWorkDays } from "../getter";
import {
    getDateObjectFromYYYYMMDD,
    getDaysUntilLongWeekend,
    formatDateToYYYYMMDD,
    isDateOnDay,
    isDateInLongWeekendRange,
} from "@/utils/date";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const dateFrom = searchParams.get("from") ? getDateObjectFromYYYYMMDD(searchParams.get("from")) : new Date();
    dateFrom.setHours(0, 0, 0, 0);

    const holiday = getHolidaysInWorkDays()
        .find((item) => {
            const holidayDate = getDateObjectFromYYYYMMDD(item.date);
            holidayDate.setHours(0, 0, 0, 0);

            if (isDateOnDay(dateFrom, [6, 0]) && isDateInLongWeekendRange(dateFrom, holidayDate)) return true;
            return holidayDate >= dateFrom;
        });

    if (!holiday) {
        return new Response("Holiday not found", { status: 404 });
    }

    return NextResponse.json({
        daysUntilLongWeekend: getDaysUntilLongWeekend(dateFrom, getDateObjectFromYYYYMMDD(holiday.date)),
        date: formatDateToYYYYMMDD(holiday.date),
        description: holiday.description,
    });
}