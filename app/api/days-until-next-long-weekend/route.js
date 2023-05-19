import { NextResponse } from 'next/server';
import { getData } from '../getter';
import {
    getDateObjectFromYYYYMMDD,
    getDaysBetweenDates,
    formatDateToYYYYMMDD,
} from '@/app/utils/date';

export async function GET() {
    const nextHoliday = getData().find(item => getDateObjectFromYYYYMMDD(item.date).setHours(0, 0, 0, 0) >= (new Date()).setHours(0, 0, 0, 0));
    if(!nextHoliday){
        // return error
    }
    
    const daysUntilHoliday = getDaysBetweenDates(new Date(), getDateObjectFromYYYYMMDD(nextHoliday?.date));

    return NextResponse.json({
        daysUntilHoliday,
        date: formatDateToYYYYMMDD(nextHoliday.date),
        description: nextHoliday.description,
    });
}