import fetchWeather from "@/server/fetchWeather";
import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function TodayInfo({ today, nowHour, imageSize, fontSize }: {
  today: string;
  nowHour: string;
  imageSize: number;
  fontSize: string;
}) {
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
    <div className="flex items-center justify-center">

      {SKY_data?.fcstValue === "1"
        && parseInt(nowHour) > 500
        && parseInt(nowHour) <= 1800
        && <Image
          src={'/images/morning.svg'}
          width={imageSize}
          height={imageSize}
          alt=''
        />}

      {SKY_data?.fcstValue === "1"
        && (parseInt(nowHour) > 1800
          || parseInt(nowHour) <= 500)
        && <Image
          src={'/images/evening.svg'}
          width={imageSize}
          height={imageSize}
          alt=''
        />}

      {SKY_data?.fcstValue === "3"
        && parseInt(nowHour) > 500
        && parseInt(nowHour) <= 1800
        && <Image
          src={'/images/lotOfCloud_morning.svg'}
          width={imageSize}
          height={imageSize}
          alt=''
        />}

      {SKY_data?.fcstValue === "3"
        && (parseInt(nowHour) > 1800
          || parseInt(nowHour) <= 500)
        && <Image
          src={'/images/lotOfCloud_evening.svg'}
          width={imageSize}
          height={imageSize}
          alt=''
        />}

      {SKY_data?.fcstValue === "4"
        && <Image
          src={'/images/cloud.svg'}
          width={imageSize}
          height={imageSize}
          alt=''
        />}

      <p
        className='ml-2'
        style={{ fontSize: fontSize }}
      >{TMP_data?.fcstValue}℃</p>
    </div>
  )
}