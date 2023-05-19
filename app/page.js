export default async function Home() {
  const res = await fetch('http://localhost:3000/api/days-until-next-long-weekend');
  const data = res.status === 200 ? await res.json() : null;

  return (
    <main>
      {
        data ?
          <>
            <h1>{data.daysUntilHoliday}</h1>
            <p>{data.date}</p>
            <p>{data.description}</p>
          </>
          :
          <h1>
            Error
          </h1>
      }
    </main>
  )
}
