import React, { useState } from "react";

import timeArray from '@/assets/weatherTimeList.json'
import TimeSlot from "./common/button/TimeSlot";

export default function RainFallInfo({ data, today, nowHour }: {
  data: WeatherDataType[];
  today: string;
  nowHour: string;
}) {
  const [timeSlot, setTimeSlot] = useState("morning");
  // 강수 확률
  const POP_data = data.filter(item => item.category === "POP" && item.fcstDate === today);
  // 강수 형태
  const PTY_data = data.filter(item => item.category === "PTY" && item.fcstDate === today);
  // 1시간 강수량
  const PCP_data = data.filter(item => item.category === "PCP" && item.fcstDate === today);

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
              <li
                key={index}
                className='w-14 flex flex-col h-[96px] items-center rounded-2xl'
                style={{ border: nowHour === item.time ? "1px solid #EA580C" : "" }}
              >
                <p className='text-[12px]'>{item.text}</p>

                {POP_data.map((pop, idx: number) => {
                  if (pop.fcstTime === item.time) {
                    return (
                      <React.Fragment key={idx}>
                        <div className="w-8 h-10 border relative">
                          <div
                            className="w-8 absolute bottom-0 bg-cyan-300"
                            style={{ height: `${pop.fcstValue}%` }}
                          >
                          </div>
                          <p className="w-8 text-[12px] absolute bottom-0">{pop.fcstValue}%</p>
                        </div>
                      </React.Fragment>
                    )
                  }
                })}

                {PTY_data.map((pty, idx: number) => {
                  if (pty.fcstTime === item.time)
                    if (pty.fcstValue === "0") {
                      return <p key={idx} className="text-[12px]">없음</p>
                    }
                    else if (pty.fcstValue === "1") {
                      return <p key={idx} className="text-[12px]">비</p>
                    }
                    else if (pty.fcstValue === "2") {
                      return <p key={idx} className="text-[12px]">비/눈</p>
                    }
                    else if (pty.fcstValue === "3") {
                      return <p key={idx} className="text-[12px]">눈</p>
                    }
                    else if (pty.fcstValue === "4") {
                      return <p key={idx} className="text-[12px]">소나기</p>
                    }
                })}

                {PCP_data.map((pcp, idx: number) => {
                  if (pcp.fcstTime === item.time)
                    return (
                      <p key={idx} className="text-[12px]">
                        {pcp.fcstValue === "강수없음" ? "0mm" : pcp.fcstValue}
                      </p>
                    )
                })}
              </li>
            )
        })}
      </ul>
    </React.Fragment>
  )
}