import { formatDateLongText } from "./utils/date";
import { 
  API_URL, 
  getData,
} from "./utils/connection";

const getDaysUntilText = (amountOfDays) => {
  if (amountOfDays === 0) return <>Ya arrancó el <b>finde largo</b> 🥳</>;
  if (amountOfDays <= 7) return <>El <b>finde largo</b> arranca en <b>{amountOfDays}</b> días 🥵</>;
  return <>Faltan <b>{amountOfDays}</b> días para el <b>finde largo</b>😴</>;
}

export default async function Home() {
  const data = await getData(`${API_URL}/api/days-until-next-long-weekend`);

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