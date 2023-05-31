import dayjs from "dayjs";
import locale_es from "dayjs/locale/es";
import isBetween from "dayjs/plugin/isBetween";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(isBetween);
dayjs.extend(localizedFormat)
dayjs.locale(locale_es);

export const getTodayObject = () => {
    const today = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Argentina/Buenos_Aires" }));
    today.setHours(0, 0, 0, 0);
    return today;
}

export const getDateObjectFromYYYYMMDD = (dateString) => dayjs(dateString).toDate();

export const getDaysBetweenDates = (date1, date2) => Math.round(dayjs(date1.setHours(0, 0, 0, 0)).diff(dayjs(date2.setHours(0, 0, 0, 0)), "day"));

export const getLastSaturday = (date) => {
    let saturday = new Date(date);
    saturday.setDate(saturday.getDate() - (saturday.getDay() + 1));
    return saturday;
}

export const getDaysUntilLongWeekend = (dateFrom, holidayDate) => {
    if (isDateOnDay(dateFrom, [6, 0]) && isDateInLongWeekendRange(dateFrom, holidayDate)) return 0;
    if (isDateOnDay(holidayDate, [4, 5])) return getDaysBetweenDates(holidayDate, dateFrom);
    return getDaysBetweenDates(getLastSaturday(holidayDate), dateFrom);
}

export const formatDateToYYYYMMDD = (date) => dayjs(date).format("YYYY/MM/DD");

export const formatDateLongText = (date) => {
    const formattedDate = dayjs(date).format("dddd, LL");
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}

export const isDateOnDay = (date, dayIndexArr) => {
    const dayOfWeek = date.getDay();
    return dayIndexArr.some((dayIndex) => dayIndex === dayOfWeek);
}

export const isDateInLongWeekendRange = (weekendDate, dateToCheck) => {
    const weekendDateIsSaturday = isDateOnDay(weekendDate, [6]);
    const dateTo = dayjs(weekendDate).add(weekendDateIsSaturday ? 3 : 4, 'day');
    const dateFrom = dayjs(weekendDate).subtract(weekendDateIsSaturday ? 4 : 3, 'day');
    return dayjs(dateToCheck).isBetween(dateFrom, dateTo);
}