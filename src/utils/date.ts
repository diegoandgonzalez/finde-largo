import dayjs from "dayjs";
import locale_es from "dayjs/locale/es";
import isBetween from "dayjs/plugin/isBetween";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(isBetween);
dayjs.extend(localizedFormat)
dayjs.locale(locale_es);

export const getTodayObject = (): Date => {
    const today = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Argentina/Buenos_Aires" }));
    today.setHours(0, 0, 0, 0);
    return today;
}

export const getDateObjectFromYYYYMMDD = (dateString: string): Date => {
    return dayjs(dateString).toDate();
}

export const getDaysBetweenDates = (date1: Date, date2: Date): number => {
    return Math.round(dayjs(date1.setHours(0, 0, 0, 0)).diff(dayjs(date2.setHours(0, 0, 0, 0)), "day"));
}

export const getLastSaturday = (date: Date): Date => {
    let saturday = new Date(date);
    saturday.setDate(saturday.getDate() - (saturday.getDay() + 1));
    return saturday;
}

export const getDayBeforeDate = (date: Date): Date => {
    let yesterday = new Date(date);
    yesterday.setHours(0, 0, 0, 0);
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday;
}

export const getDayAfterDate = (date: Date): Date => {
    let tomorrow = new Date(date);
    tomorrow.setHours(0, 0, 0, 0);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
}

export const getDaysUntilLongWeekend = (dateFrom: Date, holidayDate: Date): number => {
    if (isDateOnDay(dateFrom, [6, 0]) && isDateInLongWeekendRange(dateFrom, holidayDate)) return 0;
    if (isDateOnDay(holidayDate, [4, 5])) return getDaysBetweenDates(holidayDate, dateFrom);
    return getDaysBetweenDates(getLastSaturday(holidayDate), dateFrom);
}

export const formatDateToYYYYMMDD = (date: Date): string => {
    return dayjs(date).format("YYYY/MM/DD");
}

export const formatDateLongText = (date: Date): string => {
    const formattedDate = dayjs(date).format("dddd, LL");
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}

export const isDateOnDay = (date: Date, dayIndexArr: number[]): boolean => {
    const dayOfWeek = date.getDay();
    return dayIndexArr.some((dayIndex) => dayIndex === dayOfWeek);
}

export const isDateInLongWeekendRange = (weekendDate: Date, dateToCheck: Date): boolean => {
    const weekendDateIsSaturday = isDateOnDay(weekendDate, [6]);
    const dateTo = dayjs(weekendDate).add(weekendDateIsSaturday ? 3 : 4, 'day');
    const dateFrom = dayjs(weekendDate).subtract(weekendDateIsSaturday ? 4 : 3, 'day');
    return dayjs(dateToCheck).isBetween(dateFrom, dateTo);
}