import {
    API_URL,
    getData,
} from "@/utils/connection";
import {
    formatDateLongText,
    formatDateToYYYYMMDD,
    getDateObjectFromYYYYMMDD,
    getTodayObject,
} from "@/utils/date";
import Link from "next/link";

const NextLongWeekends = async () => {
    const data = await getData(`${API_URL}/api/next-long-weekends?from=${formatDateToYYYYMMDD(getTodayObject())}`);

    return (
        <main className="text-center">
            <header className="md:sticky top-0 p-4 shadow-lg">
                <Link href="/">
                    <h1 className="text-2xl md:text-3xl font-semibold">Próximos <b>findes largos</b></h1>
                </Link>
            </header>
            <ul className="mx-auto p-4">
                {
                    data?.longWeekends?.map((weekend, indexWeekend) => {
                        return (
                            <li key={indexWeekend}>
                                <div className="w-full md:w-3/4 lg:w-1/2 my-0 mx-auto bg-black bg-opacity-20 p-5 rounded-3xl">
                                    <p className="text-2xl"><b>{`En ${weekend.daysUntil} días`}</b></p>
                                    {
                                        weekend.holidays.map((day, indexHoliday) => {
                                            return (
                                                <div key={indexHoliday} className="m-2">
                                                    <p className="text-xl">{formatDateLongText(getDateObjectFromYYYYMMDD(day.date))}:</p>
                                                    <p className="text-lg italic">{day.description}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <br />
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}

export default NextLongWeekends;