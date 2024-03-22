"use client"

import moment from "moment";
import { useState } from "react";
import ReactCalendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import '@/css/calendar.css';

export default function Calendar() {
  const [value, setValue] = useState(new Date());
  const date = new Date()
  const [nowDate, setNowDate] = useState(moment(date).format("YYYY년 MM월 DD일"));

  const handleDateChange = (e: any) => {
    const selectedDate = e
    setValue(selectedDate);
    setNowDate(moment(selectedDate).format("YYYY년 MM월 DD일"));
  };

  return (
    <div className="flex justify-center">
      <ReactCalendar
        onChange={handleDateChange}
        value={value}
        formatDay={(locale, date) => moment(date).format("DD")}
        calendarType="gregory"
      >
      </ReactCalendar>
      <div className="w-[500px] shadow-xl rounded-2xl ml-6 p-5 text-center relative">
        <p className="text-[14px] border-y border-y-orange-600 p-2 font-bold">
          {nowDate}
        </p>
        <ul className="text-left">
          <li className="py-3 flex">
            <input type="checkbox" />
            <p className="w-[280px] px-3">~함</p>
            <p className="px-3">오전 00시 00분 <br />~ 오전 00시 00분</p>
          </li>
        </ul>
        <div className="absolute bottom-6 right-6 text-[14px]">
          <button className="w-[70px] mr-3 h-7 leading-7 border border-orange-600 hover:bg-orange-600 hover:text-white">추가</button>
          <button className="w-[70px] h-7 leading-7 bg-orange-600 text-white hover:bg-orange-500 hover:text-black">등록</button>
        </div>
      </div>
    </div >
  )
}