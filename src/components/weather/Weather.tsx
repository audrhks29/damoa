"use client"
import fetchWeather from "@/server/fetchWeather"
import { useQuery } from "@tanstack/react-query"
import WeatherInfo from "./WeatherInfo";
import { useState } from "react";
import RainFallInfo from "./RainFallInfo";

export default function Weather() {
  const [currentMenu, setCurrentMenu] = useState<string>("weather");

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate();

  const today = `${year}${month}${day}`;

  const { data } = useQuery({
    queryKey: ['weatherData'],
    queryFn: fetchWeather,
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnMount: false
  })

  return (
    <section className="border border-orange-600 p-6 rounded-3xl text-center mt-6">
      <div className="flex border-b border-orange-600">
        <p
          className='text-left text-[20px] p-1 cursor-pointer'
          onClick={() => setCurrentMenu("weather")}
          style={{
            fontWeight: currentMenu === "weather" ? "bold" : "",
            color: currentMenu === "weather" ? "#EA580C" : "#ccc"
          }}
        >날씨</p>
        <p
          className='text-left text-[20px] p-1 cursor-pointer'
          onClick={() => setCurrentMenu("rainFall")}
          style={{
            fontWeight: currentMenu === "rainFall" ? "bold" : "",
            color: currentMenu === "rainFall" ? "#EA580C" : "#ccc"
          }}
        >강수</p>
      </div>
      {data && currentMenu === "weather"
        && <WeatherInfo
          data={data}
          today={today}
        />}
      {data && currentMenu === "rainFall"
        && <RainFallInfo
          data={data}
          today={today}
        />}

    </section>
  )
}
