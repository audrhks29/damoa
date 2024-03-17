import timeArray from '@/assets/weatherTimeList.json'
import { useState } from 'react';

export default function WeatherInfo({ data }: { data: WeatherDataType[] }) {
  const [timeSlot, setTimeSlot] = useState(1);
  // 1시간 기온
  const TMP_data = data.filter(item => item.category === "TMP" && item.fcstDate === "20240317");
  // 강수 확률
  const POP_data = data.filter(item => item.category === "POP" && item.fcstDate === "20240317");
  // 강수 형태
  const PTY_data = data.filter(item => item.category === "PTY" && item.fcstDate === "20240317");
  // 1시간 강수량
  const PCP_data = data.filter(item => item.category === "PCP" && item.fcstDate === "20240317");
  // 일 최저기온
  const TMN_data = data.filter(item => item.category === "TMN" && item.fcstDate === "20240317");
  // 일 최고기온
  const TMX_data = data.filter(item => item.category === "TMX" && item.fcstDate === "20240317");
  // 하늘 상태
  const SKY_data = data.filter(item => item.category === "SKY" && item.fcstDate === "20240317");


  return (
    <div className="text-center border border-orange-500 mt-6 p-3 rounded-3xl">
      <h2 className='text-left'>날씨</h2>

      <div className='flex h-9 leading-9'>
        <div
          className='cursor-pointer w-12'
          onClick={() => setTimeSlot(1)}
          style={{ fontWeight: timeSlot === 1 ? "bold" : "" }}
        >
          오전
        </div>

        <div
          className='cursor-pointer w-12'
          onClick={() => setTimeSlot(0)}
          style={{ fontWeight: timeSlot === 0 ? "bold" : "" }}
        >
          오후
        </div>
      </div>

      <ul className='flex'>
        {timeArray.map((item, index) => {
          if (timeSlot ? index <= 11 : index >= 12)
            return (
              <li key={index}>

                {TMP_data.map((tmp, idx: number) => {
                  if (tmp.fcstTime === item.time)
                    return (
                      <p key={idx} className='text-[14px]'>{tmp.fcstValue}℃</p>
                    )
                })}

                {SKY_data.map((sky, idx: number) => {
                  if (sky.fcstTime === item.time)
                    if (sky.fcstValue === "1") {
                      return <p key={idx} className="w-14 text-[14px]">맑음</p>
                    } else if (sky.fcstValue === "3") {
                      return <p key={idx} className="w-14 text-[14px]">구름</p>
                    } else if (sky.fcstValue === "4") {
                      return <p key={idx} className="w-14 text-[14px]">흐림</p>
                    }
                })}

                <p className='text-[12px]'>{item.text}</p>
              </li>
            )
        })}

      </ul>
    </div>
  )
}