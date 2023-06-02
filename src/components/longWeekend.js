import Counter from "@/components/counter";
import Holiday from "@/components/holiday";

const LongWeekend = ({ small, holidays, daysUntilLongWeekend }) => {
    return (
        <>
            <Counter
                amount={daysUntilLongWeekend}
                small={small}
            />
            {
                holidays?.map((holiday, index) => {
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