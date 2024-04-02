import dynamic from "next/dynamic";
import { MouseEventHandler } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Weather from "../weather/Weather";

const TodayInfo = dynamic(() => import('@/components/weather/TodayInfo'), {
  ssr: false,
  loading: () => <div>날씨 데이터를 로딩중입니다.</div>
})

export default function WeatherBar(props: {
  weatherPopup: boolean;
  handleWeatherPopup: MouseEventHandler<HTMLDivElement>
}) {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

  const hour = date.getHours()
  const nowHour = hour < 10 ? `0${hour}00` : `${hour}00`

  const today = `${year}${month}${day}`;

  return (
    <div className="relative mr-3 sm:hidden md:block">
      <div className="flex">
        <TodayInfo
          today={today}
          nowHour={nowHour}
          imageSize={30}
          fontSize={"16px"}
        />

        {!props.weatherPopup
          && <i
            className="text-[26px] cursor-pointer"
            onClick={props.handleWeatherPopup}
          ><IoMdArrowDropdown /></i>}

        {props.weatherPopup
          && <i
            className="text-[26px] cursor-pointer"
            onClick={props.handleWeatherPopup}
          ><IoMdArrowDropup /></i>}
      </div>

      {props.weatherPopup
        && <Weather />}
    </div>
  )
}