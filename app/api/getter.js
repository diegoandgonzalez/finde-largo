import {
    isDateOnWeekend,
    getDateObjectFromYYYYMMDD,
} from '../utils/date';
import holidays from './holidays.json';

export const getHolidaysInWorkDays = () => holidays.data.filter((holiday) => !isDateOnWeekend(getDateObjectFromYYYYMMDD(holiday.date)));