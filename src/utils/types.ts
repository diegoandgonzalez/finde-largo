export type HolidayUnformattedType = {
    fecha: string,
    tipo: string,
    nombre: string,
}

export type HolidaySerializableType = {
    date: string,
    description: string,
}

export type HolidayType = {
    date: Date,
    description: string,
}

export type WeekendSerializableType = {
    daysUntil: number,
    holidays: HolidaySerializableType[],
}

export type WeekendType = {
    daysUntil: number,
    holidays: HolidayType[],
}