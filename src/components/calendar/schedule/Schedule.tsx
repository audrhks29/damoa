import { db } from "@/firebase/firebaseInstance";
import useUserStore from "@/store/user-store";
import { child, get, ref, remove, set, update } from "firebase/database";
import { useCallback, useEffect, useState } from "react";
import EditTime from "../EditTime";
import ScheduleList from "./ScheduleList";



export default function Schedule({ nowDate }: { nowDate: string }) {
  const { userInfo } = useUserStore()

  const [scheduleData, setScheduleData] = useState<ScheduleListType[]>([]);
  const [todo, setTodo] = useState("");

  const [isEditStartTime, setIsEditStartTime] = useState(false);
  const [isEditEndTime, setIsEditEndTime] = useState(false);


  const handleTodoChange = (e: any) => setTodo(e.target.value);

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

  // time
  const hourArray = Array.from({ length: 24 }, (_, index) => (
    index <= 9 ? `0${index}` : (index).toString()
  ));

  const minuteArray = Array.from({ length: 60 }, (_, index) => (
    index <= 9 ? `0${index}` : (index).toString()
  ));

  const [startTime, setStartTime] = useState({
    hour: "00",
    minute: "00"
  })

  const [endTime, setEndTime] = useState({
    hour: "00",
    minute: "00"
  })

  const handleStartHour = (hour: string) => {
    setStartTime(prevState => ({
      ...prevState,
      hour: hour
    }));
  }

  const handleStartMinute = (minute: string) => {
    setStartTime(prevState => ({
      ...prevState,
      minute: minute
    }));
  }
  const handleEndHour = (hour: string) => {
    setEndTime(prevState => ({
      ...prevState,
      hour: hour
    }));
  }

  const handleEndMinute = (minute: string) => {
    setEndTime(prevState => ({
      ...prevState,
      minute: minute
    }));
  }

  const handleStartTime = () => {
    setIsEditStartTime(!isEditStartTime);
    setIsEditEndTime(false);
  }

  const handleEndTime = () => {
    setIsEditStartTime(false);
    setIsEditEndTime(!isEditEndTime);
  }

  return (
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

          <div className="px-3 relative">
            <p onClick={handleStartTime}>
              {startTime.hour}시 {startTime.minute}분
            </p>

            {isEditStartTime
              && <div className="absolute flex bg-white h-36 border p-3 rounded-xl">
                <EditTime
                  timeArray={hourArray}
                  func={handleStartHour}
                />

                <EditTime
                  timeArray={minuteArray}
                  func={handleStartMinute}
                />
              </div>}

            <p onClick={handleEndTime}>
              ~ {endTime.hour}시 {endTime.minute}분
            </p>
            {isEditEndTime
              && <div className="absolute flex bg-white h-36 border p-3 rounded-xl">
                <EditTime
                  timeArray={hourArray}
                  func={handleEndHour}
                />

                <EditTime
                  timeArray={minuteArray}
                  func={handleEndMinute}
                />
              </div>}
          </div>
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
  )
}