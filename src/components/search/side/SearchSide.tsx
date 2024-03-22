import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

const TodayInfo = dynamic(() => import('@/components/weather/TodayInfo'), {
  ssr: false,
  loading: () => <div>날씨 데이터를 로딩중입니다.</div>
})

export default function SearchSide({ today, nowHour, imageSize, fontSize }: {
  today: string;
  nowHour: string;
  imageSize: number;
  fontSize: string;
}) {
  const params = useSearchParams();
  const typeParams = params.get('type');

  return (
    <section
      className="sm:hidden md:hidden lg:block xl:w-[400px] border shadow rounded-3xl text-center p-6 absolute bg-white"
      style={{
        top: typeParams === "all" ? "112px" : "80px",
        right: "10px"
      }}
    >
      <p className="text-right text-[14px] text-[#ccc]">현재 위치 기준</p>
      {<TodayInfo
        today={today}
        nowHour={nowHour}
        imageSize={imageSize}
        fontSize={fontSize}
      />}
    </section>
  )
}