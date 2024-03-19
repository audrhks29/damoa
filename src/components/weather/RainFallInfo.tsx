export default function RainFallInfo({ data, today, nowHour }: {
  data: WeatherDataType[];
  today: string;
  nowHour: string;
}) {
  // 강수 확률
  const POP_data = data.filter(item => item.category === "POP");
  // 강수 형태
  const PTY_data = data.filter(item => item.category === "PTY");
  // 1시간 강수량
  const PCP_data = data.filter(item => item.category === "PCP");

  const fcstTimeArray = POP_data.map(item => {
    return {
      fcstDate: item.fcstDate,
      fcstTime: item.fcstTime,
      displayTime: `${item.fcstTime.slice(0, 2)}시`
    }
  });

  return (
    <ul className='flex flex-nowrap overflow-hidden pt-6'>

      {fcstTimeArray.map((time, index) => {
        return (
          <li
            key={index}
            className='w-[60px] p-1 flex-shrink-0 rounded-2xl h-[106px]'
            style={{ border: nowHour === time.fcstTime ? "1px solid #EA580C" : "" }}
          >

            <p className='text-[12px]'>{time.displayTime}</p>

            {POP_data.map((pop, idx: number) => {
              if (pop.fcstTime === time.fcstTime && pop.fcstDate === time.fcstDate) {
                return (
                  <div
                    key={idx}
                    className="w-8 h-10 border relative m-auto">
                    <div
                      className="w-8 absolute bottom-0 bg-cyan-300"
                      style={{ height: `${pop.fcstValue}%` }}
                    >
                    </div>
                    <p className="w-8 text-[12px] absolute bottom-0">{pop.fcstValue}%</p>
                  </div>
                )
              }
            })}

            {PTY_data.map((pty, idx: number) => {
              if (pty.fcstTime === time.fcstTime && pty.fcstDate === time.fcstDate)
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
              if (pcp.fcstTime === time.fcstTime && pcp.fcstDate === time.fcstDate)
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
  )
}