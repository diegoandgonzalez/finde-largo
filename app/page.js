import { TIME_TO_REVALIDATE } from "./utils/constants";
import { formatDateLongText } from "./utils/date";

const getDaysUntilText = (amountOfDays) => {
  if (amountOfDays === 0) return 'Ya arrancó el finde largo 🥳';
  if (amountOfDays <= 7) return `El finde largo arranca en ${amountOfDays} días 🥵`;
  return `Faltan ${amountOfDays} días para el finde largo 😴`;
}

export default async function Home() {
  const res = await fetch(`http://${process.env.BASE_URL}/api/days-until-next-long-weekend`, { next: { revalidate: TIME_TO_REVALIDATE } });
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