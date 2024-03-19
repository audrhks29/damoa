import Image from 'next/image';
import React, { useState } from 'react';
import DateSlide from './common/DateSlide';

export default function WeatherInfo({ data, today, nowHour }: {
  data: WeatherDataType[];
  today: string;
  nowHour: string;
}) {

  // 1시간 기온
  const TMP_data = data.filter(item => item.category === "TMP");

  // 하늘 상태
  const SKY_data = data.filter(item => item.category === "SKY");

  const fcstTimeArray = TMP_data.map(item => {
    return {
      fcstDate: item.fcstDate,
      fcstTime: item.fcstTime,
      displayTime: `${item.fcstTime.slice(0, 2)}시`
    }
  });

  const [displayIndex, setDisplayIndex] = useState(Array.from({ length: 9 }, (_, index) => index))

  return (
    <React.Fragment>
      <DateSlide
        fcstTimeArray={fcstTimeArray}
        displayIndex={displayIndex}
        setDisplayIndex={setDisplayIndex}
      />

      <ul className='w-11/12 m-auto flex flex-nowrap overflow-hidden justify-between pt-6'>

        {fcstTimeArray.map((time, index) => {
          const isDisplay = displayIndex.includes(index)

          return (
            <li
              key={index}
              className='w-[60px] p-1 flex-shrink-0 rounded-2xl h-[106px]'
              style={{
                border: nowHour === time.fcstTime && today === time.fcstDate ? "1px solid #EA580C" : "",
                display: isDisplay ? "block" : "none"
              }}
            >

              <p className='text-[12px]'>{time.displayTime}</p>

              {SKY_data.map((sky, idx: number) => {
                if (sky.fcstTime === time.fcstTime && sky.fcstDate === time.fcstDate)
                  if (sky.fcstValue === "1") {
                    return (
                      <p key={idx}>
                        {index > 5 && index < 18 ? <Image
                          src={'/images/morning.svg'}
                          width={50}
                          height={50}
                          alt=''
                        /> : <Image
                          src={'/images/evening.svg'}
                          width={50}
                          height={50}
                          alt=''
                        />}
                      </p>
                    )
                  } else if (sky.fcstValue === "3") {
                    return (
                      <p key={idx}>
                        {index > 5 && index < 18 ? <Image
                          src={'/images/lotOfCloud_morning.svg'}
                          width={50}
                          height={50}
                          alt=''
                        /> : <Image
                          src={'/images/lotOfCloud_night.svg'}
                          width={50}
                          height={50}
                          alt=''
                        />}
                      </p>
                    )
                  } else if (sky.fcstValue === "4") {
                    return (
                      <p key={idx}>
                        <Image
                          src={'/images/cloud.svg'}
                          width={50}
                          height={50}
                          alt=''
                        />
                      </p>
                    )
                  }
              })}

              {TMP_data.map((tmp, idx: number) => {
                if (tmp.fcstTime === time.fcstTime && tmp.fcstDate === time.fcstDate)
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