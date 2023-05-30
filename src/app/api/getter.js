import {
    isDateOnDay,
    getDateObjectFromYYYYMMDD,
} from '../../utils/date';
import holidays from './holidays.json';

export const getHolidaysInWorkDays = () => holidays.data.filter((holiday) => !isDateOnDay(getDateObjectFromYYYYMMDD(holiday.date), [6, 0]));