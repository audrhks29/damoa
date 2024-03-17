"use client"
import fetchWeather from "@/server/fetchWeather"
import { useQuery } from "@tanstack/react-query"
import WeatherInfo from "./WeatherInfo";

export default function Weather() {
  const { data } = useQuery({
    queryKey: ['weatherData'],
    queryFn: fetchWeather
  })
  console.log(data);

  return (
    <div>
      {data && <WeatherInfo data={data} />}
    </div>
  )
}
