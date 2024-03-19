import TodayInfo from "@/components/weather/TodayInfo";
import { useSearchParams } from "next/navigation";

export default function SearchSide({ data, today, nowHour }: {
  data: WeatherDataType[];
  today: string;
  nowHour: string;
}) {
  const params = useSearchParams();
  const typeParams = params.get('type');

  return (
    <section
      className="sm:hidden md:hidden lg:block xl:w-[400px] border border-orange-600 rounded-3xl text-center p-6 absolute bg-white"
      style={{
        top: typeParams === "all" ? "160px" : "130px",
        right: "10px"
      }}
    >
      <p className="text-right text-[14px] text-[#ccc]">현재 위치 기준</p>
      {data && <TodayInfo
        data={data}
        today={today}
        nowHour={nowHour}
      />}
    </section>
  )
}