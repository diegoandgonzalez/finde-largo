import Error from "@/components/error";
import Footer from "@/components/footer";
import LongWeekend from "@/components/longWeekend";
import {
  API_URL,
  getData,
} from "@/utils/connection";
import {
  formatDateToYYYYMMDD,
  getTodayObject
} from "@/utils/date";
import Link from "next/link";

const Home = async () => {
  const data = await getData(`${API_URL}/api/days-until-next-long-weekend?from=${formatDateToYYYYMMDD(getTodayObject())}`);

  return (
    <main>
      <div className="container p-4 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {
          data ?
            <>
              <LongWeekend
                daysUntilLongWeekend={data.daysUntilLongWeekend}
                holidays={[{ date: data.date, description: data.description }]}
              />
              <Link className="text-customMain text-xl md:text-3xl underline" href="/next-long-weekends">
                {"Ver próximos findes largos"}
              </Link>
            </>
            :
            <Error />
        }
      </div>
      <Footer />
    </main>
  )
}

export default Home;