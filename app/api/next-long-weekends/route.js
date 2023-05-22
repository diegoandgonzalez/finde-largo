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
            weekend: [holiday],
        };

        if (!longWeekends[index]) {
            longWeekends.push(newWeekend);
            continue;
        }

        const currentWeekend = longWeekends[index].weekend;
        const lastWeekendHoliday = currentWeekend[currentWeekend.length - 1];
        const daysBetweenHolidays = getDaysBetweenDates(getDateObjectFromYYYYMMDD(lastWeekendHoliday.date), getDateObjectFromYYYYMMDD(holiday.date));
        if (daysBetweenHolidays > 3) {
            longWeekends.push(newWeekend);
            index++;
        } else {
            currentWeekend.push(holiday);
        }
    }

    return NextResponse.json({ longWeekends });
}