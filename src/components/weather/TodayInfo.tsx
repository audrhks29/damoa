import Image from "next/image";

export default function TodayInfo({ data, today, nowHour }: {
  data: WeatherDataType[];
  today: string;
  nowHour: string;
}) {
  // 현재 기온
  const TMP_data = data.find(item => item.category === "TMP" && item.fcstDate === today && item.fcstTime === nowHour);
  // 일 최저기온
  const TMN_data = data.find(item => item.category === "TMN" && item.fcstDate === today);
  // 일 최고기온
  const TMX_data = data.find(item => item.category === "TMX" && item.fcstDate === today);
  // 현재 하늘 상태
  const SKY_data = data.find(item => item.category === "SKY" && item.fcstDate === today && item.fcstTime === nowHour);

  return (
    <div className="mb-3">
      <div className="flex items-center justify-center">
        {SKY_data?.fcstValue === "1"
          && <Image
            src={'/images/morning.svg'}
            width={100}
            height={100}
            alt=''
          />}

        {SKY_data?.fcstValue === "3"
          && <Image
            src={'/images/lotOfCloud_morning.svg'}
            width={100}
            height={100}
            alt=''
          />}

        {SKY_data?.fcstValue === "4"
          && <Image
            src={'/images/cloud.svg'}
            width={100}
            height={100}
            alt=''
          />}

        <p className='text-[50px] ml-2'>{TMP_data?.fcstValue}℃</p>
      </div>

      <div className="flex justify-center">
        <div className="flex mr-4">
          <b className="mr-2">최저</b>
          <p>{TMN_data?.fcstValue}℃</p>
        </div>

        <div className="flex">
          <b className="mr-2">최고</b>
          <p>{TMX_data?.fcstValue}℃</p>
        </div>
      </div>

    </div>
  )
}