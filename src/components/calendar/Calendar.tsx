"use client"

import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import ReactCalendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import '@/css/calendar.css';
import { child, get, ref, remove, set, update } from "firebase/database";
import { db } from "@/firebase/firebaseInstance";
import useUserStore from "@/store/user-store";
import ScheduleList from "./ScheduleList";

export default function Calendar() {
  const { userInfo } = useUserStore()
  const [value, setValue] = useState(new Date());
  const [scheduleData, setScheduleData] = useState<ScheduleListType[]>([]);
  const [todo, setTodo] = useState("");

  const date = new Date()
  const [nowDate, setNowDate] = useState(moment(date).format("YYYY년 MM월 DD일"));

  const readOne = useCallback(() => {
    const dbRef = ref(db);
    if (userInfo !== null) {
      get(child(dbRef, `/${userInfo.uid}/schedule/${nowDate}`))
        .then(snapshot => setScheduleData(snapshot.val()))
        .catch(error => {
          console.error(error);
        });
    }
  }, [userInfo, nowDate]);

  useEffect(() => {
    // db read
    readOne()
  }, [nowDate, userInfo, readOne])

  const handleDateChange = (e: any) => {
    const selectedDate = e
    setValue(selectedDate);
    setNowDate(moment(selectedDate).format("YYYY년 MM월 DD일"));
  };

  const handleTodoChange = (e: any) => setTodo(e.target.value);

  // db write
  const writeData = () => {
    let last = scheduleData.length === 0 ? 1 : scheduleData[scheduleData.length - 1].id + 1;

    const schedule = {
      id: last,
      todo,
      isChecked: false
    };
    set(ref(db, `${userInfo.uid}/schedule/${nowDate}/${last}`), schedule);
    setTodo("");
    readOne()
  };

  // db update
  const updateData = (id: number, todo: string, isChecked: boolean) => {
    const schedule = {
      id,
      todo,
      isChecked
    };
    update(ref(db, `/${userInfo.uid}/schedule/${nowDate}/${id}`), schedule);
    readOne()
  };

  // db delete
  const removeData = (id: number) => {
    remove(ref(db, `/${userInfo.uid}/schedule/${nowDate}/${id}`))
    readOne()
  }

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
            <input type="text"
              value={todo}
              onChange={handleTodoChange} />
            <p className="px-3">
              오전 00시 00분 <br />
              ~ 오전 00시 00분
            </p>
          </li>

          {scheduleData && scheduleData.map((item, index) => {
            return (
              <ScheduleList
                key={index}
                item={item}
                updateData={updateData}
                removeData={removeData}
              />
            )
          })}
        </ul>

        <div className="absolute bottom-6 right-6 text-[14px]">
          <button
            className="w-[70px] mr-3 h-7 leading-7 border border-orange-600 hover:bg-orange-600 hover:text-white"
          >추가</button>

          <button
            className="w-[70px] h-7 leading-7 bg-orange-600 text-white hover:bg-orange-500 hover:text-black"
            onClick={writeData}
          >등록</button>
        </div>
      </div>
    </div >
  )
}