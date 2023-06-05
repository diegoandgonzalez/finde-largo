import {
    getDateObjectFromYYYYMMDD,
    isDateOnDay,
} from "@/utils/date";
import { HolidaySerializableType } from "@/utils/types";
import holidays from "./holidays.json";

export const getHolidaysInWorkDays = (): HolidaySerializableType[] => holidays.data.filter((holiday) => !isDateOnDay(getDateObjectFromYYYYMMDD(holiday.date), [6, 0]));