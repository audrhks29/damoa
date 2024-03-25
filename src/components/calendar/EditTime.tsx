import { useState } from "react";

interface PropsType {
  text: string;
  time: {
    hour: string;
    minute: string;
  }
  hourArray: string[];
  minuteArray: string[];
  handleClickTime: (hour: string, minute: string) => void;
}

export default function EditTime(props: PropsType) {
  const [hour, setHour] = useState(props.time.hour);
  const [minute, setMinute] = useState(props.time.minute);

  return (
    <div className="absolute flex flex-col bg-white h-52 border p-3 rounded-xl">
      <p className="text-center pb-2">{props.text}</p>
      <div className="flex">
        <ul className='overflow-y-scroll w-20 h-28'>
          {props.hourArray.map((item, index) => {
            const selectedItem = hour === item;
            return (
              <li
                key={index}
                onClick={() => setHour(item)}
                className="px-2 cursor-pointer hover:bg-orange-400 hover:text-white"
                style={{
                  backgroundColor: selectedItem ? "#EA580C" : "",
                  color: selectedItem ? "white" : "black"
                }}
              >{item}</li>
            )
          })}
        </ul>

        <ul className='overflow-y-scroll w-20 h-28'>
          {props.minuteArray.map((item, index) => {
            const selectedItem = minute === item;
            return (
              <li
                key={index}
                onClick={() => setMinute(item)}
                className="px-2 cursor-pointer hover:bg-orange-400 hover:text-white"
                style={{
                  backgroundColor: selectedItem ? "#EA580C" : "",
                  color: selectedItem ? "white" : "black"
                }}
              >{item}</li>
            )
          })}
        </ul>
      </div>

      <div className="text-center mt-3">
        <button
          className="w-20 rounded-lg bg-orange-600 text-white hover:bg-orange-400"
          onClick={() => props.handleClickTime(hour, minute)}
        >
          완료</button>
      </div>
    </div>
  )
}