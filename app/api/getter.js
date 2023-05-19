import {
    isDateOnWeekend,
    createDateFromYYYYMMDD,
} from '../utils/date';
import holidays from './holidays.json';

export const getHolidaysInWorkDays = () => holidays.data.filter((holiday) => !isDateOnWeekend(createDateFromYYYYMMDD(holiday.date)));