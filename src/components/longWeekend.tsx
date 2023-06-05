import Counter from "@/components/counter";
import Holiday from "@/components/holiday";

type HolidayType = {
    date: Date,
    description: string,
}

type Props = {
    small?: boolean,
    holidays: HolidayType[],
    daysUntilLongWeekend: number,
}

const LongWeekend = ({ small, holidays, daysUntilLongWeekend }: Props): React.ReactNode => {
    return (
        <>
            <Counter
                amount={daysUntilLongWeekend}
                small={small}
            />
            {
                holidays?.map((holiday: HolidayType, index: number) => {
                    return (
                        <div key={index} className={small ? "m-2" : "m-3 md:m-6"}>
                            <Holiday
                                date={holiday.date}
                                description={holiday.description}
                                small={small}
                            />
                        </div>
                    )
                })
            }
        </>
    )
}

export default LongWeekend;