import {
    getDateObjectFromYYYYMMDD,
    getDaysUntilLongWeekend,
    isDateInLongWeekendRange,
    isDateOnDay
} from "@/utils/date";
import { NextResponse } from "next/server";
import { getHolidaysInWorkDays } from "../getter";

export async function GET(req: Request) {
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
        date: holiday.date,
        description: holiday.description,
    });
}