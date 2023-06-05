export type HolidaySerializableType = {
    date: string,
    description: string,
}

export type HolidayType = {
    date: Date,
    description: string,
}

export type WeekendType = {
    daysUntil: number,
    holidays: HolidayType[],
}