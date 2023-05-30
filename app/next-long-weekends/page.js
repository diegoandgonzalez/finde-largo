import Link from "next/link";
import {
    getTodayObject,
    getDateObjectFromYYYYMMDD,
    formatDateLongText,
    formatDateToYYYYMMDD,
} from "../utils/date";
import {
    API_URL,
    getData,
} from "../utils/connection";

const NextLongWeekends = async () => {
    const data = await getData(`${API_URL}/api/next-long-weekends?from=${formatDateToYYYYMMDD(getTodayObject())}`);

    return (
        <main className="container my-0 mx-auto px-4 text-center">
            <header className="md:sticky top-0 p-6">
                <h1 className="text-4xl font-semibold">Próximos <b>findes largos</b></h1>
                <Link className="text-xl inline-block mt-3 underline" href="/">Volver</Link>
            </header>
            <ul>
                {
                    data?.longWeekends?.map((weekend, indexWeekend) => {
                        return (
                            <li key={indexWeekend}>
                                <ul>
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
                                    <br />
                                </ul>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}

export default NextLongWeekends;