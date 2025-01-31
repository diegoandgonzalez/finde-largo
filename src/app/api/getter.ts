import {
    formatDateToYYYYMMDD,
    getDateObjectFromYYYYMMDD,
    getDayAfterDate,
    getDayBeforeDate,
    isDateOnDay,
} from "@/utils/date";
import { HolidaySerializableType, HolidayUnformattedType } from "@/utils/types";

export const getHolidaysInWorkDays = async (): Promise<HolidaySerializableType[]> => {
    try {
        const response = await fetch(`https://api.argentinadatos.com/v1/feriados/${new Date().getFullYear()}`); // TODO: mover URL
        if (response.status !== 200) return [];

        const unformattedHolidays = await response.json();
        return unformattedHolidays
            .map((holiday: HolidayUnformattedType) => ({
                date: formatDateToYYYYMMDD(getDateObjectFromYYYYMMDD(holiday.fecha)),
                description: holiday.nombre,
            }))
            .filter((holiday: HolidaySerializableType) => !isDateOnDay(getDateObjectFromYYYYMMDD(holiday.date), [6, 0]));

    } catch (error) {
        return [];
    }
};

export const getLongWeekendHolidays = async (): Promise<HolidaySerializableType[]> => {
    const holidays = await getHolidaysInWorkDays();
    if (!holidays?.length) return [];

    const longWeekendHolidays: HolidaySerializableType[] = [];

    holidays.forEach((holiday) => {
        const holidayDate = getDateObjectFromYYYYMMDD(holiday.date);

        if ([1, 5].includes(holidayDate.getDay())) { // si es lunes o viernes, es finde largo
            longWeekendHolidays.push(holiday);
        }

        if (holidayDate.getDay() === 2) { // si es martes, y un dia antes es feriado, es finde largo
            const dayBeforeDate = getDayBeforeDate(holidayDate);
            const dayBeforeIsHoliday = holidays.some((holiday) => holiday.date === formatDateToYYYYMMDD(dayBeforeDate));

            if (dayBeforeIsHoliday) {
                longWeekendHolidays.push(holiday);
            }
        }

        if (holidayDate.getDay() === 4) { // si es jueves, y un dia despues es feriado, es finde largo
            const dayAfterDate = getDayAfterDate(holidayDate);
            const dayAfterIsHoliday = holidays.some((holiday) => holiday.date === formatDateToYYYYMMDD(dayAfterDate));

            if (dayAfterIsHoliday) {
                longWeekendHolidays.push(holiday);
            }
        }
    });

    return longWeekendHolidays;
};