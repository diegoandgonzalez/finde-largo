import dayjs from 'dayjs';

export const getTodayObject = () => {
    const today = new Date(new Date().toLocaleString("en-US", { timeZone: 'America/Argentina/Buenos_Aires' }));
    today.setHours(0, 0, 0, 0);
    return today;
}
export const getDateObjectFromYYYYMMDD = (dateString) => dayjs(dateString).toDate();
export const getDaysBetweenDates = (date1, date2) => Math.round(dayjs(date1.setHours(0, 0, 0, 0)).diff(dayjs(date2.setHours(0, 0, 0, 0)), 'day'));
export const getLastSaturday = (date) => {
    let saturday = new Date(date);
    saturday.setDate(saturday.getDate() - (saturday.getDay() + 1));
    return saturday;
}
export const getDaysUntilLongWeekend = (dateFrom, holidayDate) => {
    if (isDateOnDay(dateFrom, [6, 0]) && isDateInLongWeekendRange(dateFrom, holidayDate)) {
        return 0;
    }

    // si el feriado es JUE o VIE, contar los dias hasta el feriado
    if (isDateOnDay(holidayDate, [4, 5])) {
        return getDaysBetweenDates(holidayDate, dateFrom);
    }

    // si el feriado es posterior a SAB o DOM, contar los dias hasta el SAB
    const previousSatuday = getLastSaturday(holidayDate, 6);
    return getDaysBetweenDates(previousSatuday, dateFrom);
}

export const formatDateToYYYYMMDD = (date) => dayjs(date).format('YYYY/MM/DD');
export const formatDateLongText = (date) => {
    const formattedDate = dayjs(date).format('dddd, LL');
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
}

export const isDateOnDay = (date, dayIndexArr) => {
    const dayOfWeek = date.getDay();
    return dayIndexArr.some((dayIndex) => dayIndex === dayOfWeek);
}
export const isDateInLongWeekendRange = (weekendDate, dateToCheck) => {
    // es finde largo pero dateToCheck ya paso (cae jueves o viernes)
    if (dateToCheck < weekendDate && Math.abs(getDaysBetweenDates(dateToCheck, weekendDate)) < 4) {
        return true;
    }

    // es finde largo pero dateToCheck todavia no llegó
    if (dateToCheck > weekendDate && Math.abs(getDaysBetweenDates(dateToCheck, weekendDate)) < 3) {
        return true;
    }

    return false;
}
