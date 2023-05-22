import Link from "next/link";
import {
    getDateObjectFromYYYYMMDD,
    formatDateLongText,
    formatDateToYYYYMMDD,
} from "../utils/date";
import {
    API_URL,
    TIME_TO_REVALIDATE,
} from "../utils/constants";

const NextLongWeekends = async () => {
    const res = await fetch(
        `${API_URL}/api/next-long-weekends?from=${formatDateToYYYYMMDD(new Date())}`,
        { next: { revalidate: TIME_TO_REVALIDATE } }
    );
    const { longWeekends } = await res.json();

    return (
        <main>
            <header>
                <h1>Próximos findes largos</h1>
                <Link href="/">Volver</Link>
            </header>
            <ul>
                {
                    longWeekends.map((weekend, indexWeekend) => {
                        return (
                            <li key={indexWeekend}>
                                <ul>
                                    <p>{`En ${weekend.daysUntil} días`}</p>
                                    {
                                        weekend.weekend.map((day, indexHoliday) => {
                                            return (
                                                <div key={indexHoliday}>
                                                    <p>{formatDateLongText(getDateObjectFromYYYYMMDD(day.date))}</p>
                                                    <p>{day.description}</p>
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