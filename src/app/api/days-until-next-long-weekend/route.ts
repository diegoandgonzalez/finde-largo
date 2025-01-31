import {
    getDateObjectFromYYYYMMDD,
    getDaysUntilLongWeekend,
    isDateInLongWeekendRange,
    isDateOnDay
} from "@/utils/date";
import { NextResponse } from "next/server";
import { getLongWeekendHolidays } from "../getter";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const dateFrom = searchParams.get("from") ? getDateObjectFromYYYYMMDD(searchParams.get("from")) : new Date();
    dateFrom.setHours(0, 0, 0, 0);
    const dateFromIsOnWeekend = isDateOnDay(dateFrom, [6, 0]);

    const longWeekendHolidays = await getLongWeekendHolidays();

    const nextHoliday = longWeekendHolidays.find((item) => {
        const holidayDate = getDateObjectFromYYYYMMDD(item.date);
        holidayDate.setHours(0, 0, 0, 0);

        if (dateFromIsOnWeekend && isDateInLongWeekendRange(dateFrom, holidayDate)) return true;
        return holidayDate >= dateFrom;
    });


    if (!nextHoliday) {
        return new Response("Holiday not found", { status: 404 });
    }

    return NextResponse.json({
        daysUntilLongWeekend: getDaysUntilLongWeekend(dateFrom, getDateObjectFromYYYYMMDD(nextHoliday.date)),
        date: nextHoliday.date,
        description: nextHoliday.description,
    });
}