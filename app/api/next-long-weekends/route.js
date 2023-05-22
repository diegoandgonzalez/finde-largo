import dayjs from 'dayjs';
import { NextResponse } from 'next/server';
import { getHolidaysInWorkDays } from '../getter';
import {
    getDateObjectFromYYYYMMDD,
    getDaysBetweenDates,
} from '@/app/utils/date';

export async function GET() {
    const longWeekends = [];
    const holidaysAfterToday = getHolidaysInWorkDays().filter(({ date }) => dayjs(date).isAfter(dayjs(new Date())));
    let index = 0;

    for (const holiday of holidaysAfterToday) {
        const newWeekend = {
            daysUntil: getDaysBetweenDates(new Date(), getDateObjectFromYYYYMMDD(holiday.date)),
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