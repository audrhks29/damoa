import fetchWeather from "@/server/fetchWeather"
import { useSuspenseQuery } from "@tanstack/react-query"
import Image from "next/image";

export default function WeatherSummary() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate();

  const hour = date.getHours()
  const nowHour = hour < 10 ? `0${hour}00` : `${hour}00`

  const today = `${year}${month}${day}`;

  const { data }: { data: WeatherDataType[] } = useSuspenseQuery({
    queryKey: ['weatherData'],
    queryFn: fetchWeather,
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnMount: false,
    retry: 0
  })
  // 현재 기온
  const TMP_data = data.find(item => item.category === "TMP" && item.fcstDate === today && item.fcstTime === nowHour);

  // 현재 하늘 상태
  const SKY_data = data.find(item => item.category === "SKY" && item.fcstDate === today && item.fcstTime === nowHour);

  return (
    <div className="flex items-center justify-center mr-3">

      {SKY_data?.fcstValue === "1"
        && parseInt(nowHour) > 500
        && parseInt(nowHour) <= 1800
        && <Image
          src={'/images/morning.svg'}
          width={30}
          height={30}
          alt=''
        />}

      {SKY_data?.fcstValue === "1"
        && (parseInt(nowHour) > 1800
          || parseInt(nowHour) <= 500)
        && <Image
          src={'/images/evening.svg'}
          width={30}
          height={30}
          alt=''
        />}

      {SKY_data?.fcstValue === "3"
        && parseInt(nowHour) > 500
        && parseInt(nowHour) <= 1800
        && <Image
          src={'/images/lotOfCloud_morning.svg'}
          width={30}
          height={30}
          alt=''
        />}

      {SKY_data?.fcstValue === "3"
        && (parseInt(nowHour) > 1800
          || parseInt(nowHour) <= 500)
        && <Image
          src={'/images/lotOfCloud_evening.svg'}
          width={30}
          height={30}
          alt=''
        />}

      {SKY_data?.fcstValue === "4"
        && <Image
          src={'/images/cloud.svg'}
          width={30}
          height={30}
          alt=''
        />}

      <p className='ml-2'>{TMP_data?.fcstValue}℃</p>
    </div>
  )
}