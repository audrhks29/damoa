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
    <section className="absolute right-0 w-[500px] z-10 border shadow-lg p-6 rounded-3xl text-center bg-white">
      <p className="text-right text-[14px] text-[#ccc]">현재 위치 기준</p>
      {data && <TodayInfo
        today={today}
        nowHour={nowHour}
        imageSize={100}
        fontSize={"50px"}
      />}

      <div className="flex border-b border-primary">
        <p
          className='text-left text-[16px] leading-9 h-9 rounded-t-xl py-1 px-3 cursor-pointer text-[white]'
          onClick={() => setCurrentMenu("weather")}
          style={{
            backgroundColor: currentMenu === "weather" ? "#0F172A" : "",
            fontWeight: currentMenu === "weather" ? "bold" : "",
            color: currentMenu === "weather" ? "white" : "#ccc"
          }}
        >날씨</p>

        <p
          className='text-left text-[16px] leading-9 h-9 rounded-t-xl py-1 px-3 cursor-pointer'
          onClick={() => setCurrentMenu("rainFall")}
          style={{
            backgroundColor: currentMenu === "rainFall" ? "#0F172A" : "",
            fontWeight: currentMenu === "rainFall" ? "bold" : "",
            color: currentMenu === "rainFall" ? "white" : "#ccc"
          }}
        >강수</p>
      </div>

      <div className="relative">
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
      </div>
    </section>
  )
}
