import { NextResponse } from 'next/server';
import { getHolidaysInWorkDays } from '../getter';
import {
    getDateObjectFromYYYYMMDD,
    getDaysBetweenDates,
    formatDateToYYYYMMDD,
} from '@/app/utils/date';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const dateToCompare = searchParams.get('from') ? getDateObjectFromYYYYMMDD(searchParams.get('from')) : new Date();
    dateToCompare.setHours(0, 0, 0, 0);

    const nextHoliday = getHolidaysInWorkDays()
        .find((item) => {
            const holidayDate = getDateObjectFromYYYYMMDD(item.date).setHours(0, 0, 0, 0);
            return holidayDate >= dateToCompare;
        });

    if (!nextHoliday) {
        return new Response(
            'Next holiday not found',
            {
                status: 404,
            });
    }

    const daysUntilHoliday = getDaysBetweenDates(dateToCompare, getDateObjectFromYYYYMMDD(nextHoliday?.date));

    return NextResponse.json({
        daysUntilHoliday,
        date: formatDateToYYYYMMDD(nextHoliday.date),
        description: nextHoliday.description,
    });
}