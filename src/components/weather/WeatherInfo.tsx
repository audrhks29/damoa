import React, { useState } from 'react';

import Image from 'next/image';

import timeArray from '@/assets/weatherTimeList.json'
import TimeSlot from './common/button/TimeSlot';

export default function WeatherInfo({ data, today }: {
  data: WeatherDataType[];
  today: string;
}) {
  const [timeSlot, setTimeSlot] = useState("morning");

  // 1시간 기온
  const TMP_data = data.filter(item => item.category === "TMP" && item.fcstDate === today);

  // 일 최저기온
  const TMN_data = data.filter(item => item.category === "TMN" && item.fcstDate === today);
  // 일 최고기온
  const TMX_data = data.filter(item => item.category === "TMX" && item.fcstDate === today);
  // 하늘 상태
  const SKY_data = data.filter(item => item.category === "SKY" && item.fcstDate === today);


  return (
    <React.Fragment>
      <TimeSlot
        timeSlot={timeSlot}
        setTimeSlot={setTimeSlot}
      />

      <ul className='flex'>
        {timeArray.map((item, index) => {
          if (timeSlot === "morning" ? index <= 11 : index >= 12)
            return (
              <li key={index} className='w-14 flex flex-col items-center'>
                <p className='text-[12px]'>{item.text}</p>

                {SKY_data.map((sky, idx: number) => {
                  if (sky.fcstTime === item.time)
                    if (sky.fcstValue === "1") {
                      return (
                        <p key={idx}>
                          {index > 5 && index < 18 ? <Image
                            src={'/images/morning.svg'}
                            width={55}
                            height={55}
                            alt=''
                          /> : <Image
                            src={'/images/evening.svg'}
                            width={55}
                            height={55}
                            alt=''
                          />}
                        </p>
                      )
                    } else if (sky.fcstValue === "3") {
                      return (
                        <p key={idx}>
                          {index > 5 && index < 18 ? <Image
                            src={'/images/lotOfCloud_morning.svg'}
                            width={55}
                            height={55}
                            alt=''
                          /> : <Image
                            src={'/images/lotOfCloud_night.svg'}
                            width={55}
                            height={55}
                            alt=''
                          />}
                        </p>
                      )
                    } else if (sky.fcstValue === "4") {
                      return (
                        <p key={idx}>
                          <Image
                            src={'/images/cloud.svg'}
                            width={55}
                            height={55}
                            alt=''
                          />
                        </p>
                      )
                    }
                })}

                {TMP_data.map((tmp, idx: number) => {
                  if (tmp.fcstTime === item.time)
                    return (
                      <p key={idx} className='text-[14px]'>{tmp.fcstValue}℃</p>
                    )
                })}
              </li>
            )
        })}

      </ul>
    </React.Fragment>
  )
}