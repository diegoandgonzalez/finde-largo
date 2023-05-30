import Link from "next/link";
import {
  getTodayObject,
  formatDateLongText,
  formatDateToYYYYMMDD,
} from "./utils/date";
import {
  API_URL,
  getData,
} from "./utils/connection";

const getDaysUntilText = (amountOfDays) => {
  if (amountOfDays <= 0) return <>Ya arrancó el <b>finde largo</b> 🥳</>;
  if (amountOfDays <= 7) return <>El <b>finde largo</b> arranca en <b>{amountOfDays}</b> días 🥵</>;
  return <>Faltan <b>{amountOfDays}</b> días para el <b>finde largo</b> 😴</>;
}

export default async function Home() {
  const data = await getData(`${API_URL}/api/days-until-next-long-weekend?from=${formatDateToYYYYMMDD(getTodayObject())}`);

  return (
    <main className="w-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
      {
        data ?
          <>
            <h1 className="text-5xl font-semibold">{getDaysUntilText(data.daysUntilLongWeekend)}</h1>
            <div className="m-6">
              <p className="text-4xl">{formatDateLongText(data.date)}:</p>
              <p className="text-3xl mt-2 italic">{data.description}</p>
            </div>
            <Link className="text-3xl underline" href="/next-long-weekends">Ver próximos findes largos</Link>
          </>
          :
          <h1 className="text-6xl">Algo <b>malió sal</b> 🧂</h1>
      }
    </main>
  )
}