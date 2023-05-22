import { API_URL, TIME_TO_REVALIDATE } from "./utils/constants";
import { formatDateLongText } from "./utils/date";

const getDaysUntilText = (amountOfDays) => {
  if (amountOfDays === 0) return <>Ya arrancó el <b>finde largo</b> 🥳</>;
  if (amountOfDays <= 7) return <>El <b>finde largo</b> arranca en <b>{amountOfDays}</b> días 🥵</>;
  return <>Faltan <b>{amountOfDays}</b> días para el <b>finde largo</b>😴</>;
}

export default async function Home() {
  const res = await fetch(`${API_URL}/api/days-until-next-long-weekend`, { next: { revalidate: TIME_TO_REVALIDATE } });
  const data = res.status === 200 ? await res.json() : null;

  return (
    <main>
      {
        data ?
          <>
            <h1>{getDaysUntilText(data.daysUntilHoliday)}</h1>
            <p>{formatDateLongText(data.date)}</p>
            <p>{data.description}</p>
          </>
          :
          <h1>Algo malió sal 🧂</h1>
      }
    </main>
  )
}