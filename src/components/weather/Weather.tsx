"use client"

import { useSuspenseQuery } from "@tanstack/react-query"

import { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import RainFallInfo from "./RainFallInfo";
import TodayInfo from "./TodayInfo";
import fetchWeather from "@/server/fetchWeather";

export default function Weather() {
  const [currentMenu, setCurrentMenu] = useState<string>("weather");

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate();

  const hour = date.getHours()
  const nowHour = hour < 10 ? `0${hour}00` : `${hour}00`

  const today = `${year}${month}${day}`;

  const { data } = useSuspenseQuery({
    queryKey: ['weatherData'],
    queryFn: fetchWeather,
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnMount: false,
    retry: 0
  })

  return (
    <section className="sm:w-4/5 md:w-3/5 xl:w-1/2 border border-orange-600 p-6 rounded-3xl text-center mt-6">
      <p className="text-right text-[14px] text-[#ccc]">현재 위치 기준</p>
      {data && <TodayInfo
        data={data}
        today={today}
        nowHour={nowHour}
      />}

      <div className="flex border-b border-orange-600">
        <p
          className='text-left text-[16px] leading-9 h-9 rounded-t-xl py-1 px-3 cursor-pointer text-[white]'
          onClick={() => setCurrentMenu("weather")}
          style={{
            backgroundColor: currentMenu === "weather" ? "#EA580C" : "",
            fontWeight: currentMenu === "weather" ? "bold" : "",
            color: currentMenu === "weather" ? "white" : "#ccc"
          }}
        >날씨</p>
        <p
          className='text-left text-[16px] leading-9 h-9 rounded-t-xl py-1 px-3 cursor-pointer'
          onClick={() => setCurrentMenu("rainFall")}
          style={{
            backgroundColor: currentMenu === "rainFall" ? "#EA580C" : "",
            fontWeight: currentMenu === "rainFall" ? "bold" : "",
            color: currentMenu === "rainFall" ? "white" : "#ccc"
          }}
        >강수</p>
      </div>

      {data && currentMenu === "weather"
        && <WeatherInfo
          data={data}
          today={today}
          nowHour={nowHour}
        />}

      {data && currentMenu === "rainFall"
        && <RainFallInfo
          data={data}
          today={today}
          nowHour={nowHour}
        />}

    </section>
  )
}
