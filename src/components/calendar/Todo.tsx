"use client"

import moment from "moment";
import { useState } from "react";
import ReactCalendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import '@/css/calendar.css';
import Schedule from "./schedule/Schedule";
import MySchedule from "./my/MySchedule";

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
    <div className="xl:m-auto xl:w-fit sm:items-center sm:flex sm:flex-col xl:grid xl:grid-rows-2 xl:grid-cols-2 gap-6">
      {/* <div className="sm:items-center sm:flex sm:flex-col xl:flex xl:flex-row xl:justify-center"> */}
      <ReactCalendar
        onChange={handleDateChange}
        value={value}
        formatDay={(locale, date) => moment(date).format("DD")}
        calendarType="gregory"
      >
      </ReactCalendar>

      <Schedule
        nowDate={nowDate}
      />

      <MySchedule
        setNowDate={setNowDate}
        setValue={setValue}
      />
    </div>
  )
}