import { TIME_TO_REVALIDATE } from "./utils/constants";
import { formatDateLongText } from "./utils/date";

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/days-until-next-long-weekend', { next: { revalidate: TIME_TO_REVALIDATE } });
  const data = res.status === 200 ? await res.json() : null;

  return (
    <main>
      {
        data ?
          <>
            <h1>Faltan {data.daysUntilHoliday} días para el finde largo 😴</h1>
            <p>{formatDateLongText(data.date)}</p>
            <p>{data.description}</p>
          </>
          :
          <h1>Algo malió sal 🧂</h1>
      }
    </main>
  )
}