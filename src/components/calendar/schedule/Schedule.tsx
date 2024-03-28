import { db } from "@/firebase/firebaseInstance";
import useUserStore from "@/store/user-store";
import { child, get, ref, remove, set, update } from "firebase/database";
import { useCallback, useEffect, useState } from "react";
import ScheduleList from "./ScheduleList";
import AddSchedule from "./AddSchedule";
import { Button } from "@/components/ui/button";
import useScheduleStore from "@/store/schedule-store";

export default function Schedule({ nowDate }: { nowDate: string }) {
  const { userInfo } = useUserStore();
  const { scheduleData, setScheduleData } = useScheduleStore();

  const [todo, setTodo] = useState("");
  const [isChecked, setIsChecked] = useState(false)

  const [isAddTodo, setIsAddTodo] = useState(false);

  const [isEditStartTime, setIsEditStartTime] = useState(false);
  const [isEditEndTime, setIsEditEndTime] = useState(false);

  const handleTodoChange = (e: any) => setTodo(e.target.value);
  const handleCheckedChange = () => setIsChecked(!isChecked);

  const readOne = useCallback(() => {
    const dbRef = ref(db);

    if (userInfo !== null) {
      get(child(dbRef, `/${userInfo.uid}/schedule/${nowDate}`))
        .then(snapshot => {
          const data = snapshot.val();
          if (data) {
            const scheduleArray: ScheduleListType[] = Object.values(data).map((item: any) => ({
              id: item.id,
              todo: item.todo,
              isChecked: item.isChecked,
              startTime: item.startTime,
              endTime: item.endTime
            }));
            setScheduleData(scheduleArray);
          } else {
            setScheduleData([]);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [userInfo, nowDate, setScheduleData]);

  useEffect(() => {
    // db read
    readOne()
    setIsAddTodo(false)
  }, [nowDate, userInfo, readOne])

  // db write
  const writeData = () => {
    let last = scheduleData.length !== 0 ? scheduleData[scheduleData.length - 1].id + 1 : 0;

    const schedule = {
      id: last,
      todo,
      isChecked,
      startTime,
      endTime
    };
    set(ref(db, `${userInfo.uid}/schedule/${nowDate}/${last}`), schedule);
    setTodo("");
    setIsAddTodo(false)
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
  const [startTime, setStartTime] = useState({
    hour: "00",
    minute: "00"
  })

  const [endTime, setEndTime] = useState({
    hour: "00",
    minute: "00"
  })

  const handelEditTime = () => setIsEditStartTime(true);

  const handleClickStartTime = (hour: string, minute: string) => {
    setIsEditStartTime(false);
    setIsEditEndTime(true);
    setStartTime({ hour: hour, minute: minute });
  }

  const handleClickEndTime = (hour: string, minute: string) => {
    setEndTime({ hour: hour, minute: minute });
    setIsEditEndTime(false);
  }

  return (
    <div className="sm:ml-0 w-[600px] min-h-[380px] sm:border border-primary xl:border-0 xl:shadow-xl rounded-2xl p-5 text-center relative">
      <h2 className="border-b-2 border-b-primary p-2 font-bold">
        {nowDate}
      </h2>

      <ul className="text-left min-h-[262px]">
        {isAddTodo
          && <AddSchedule
            isChecked={isChecked}
            handleCheckedChange={handleCheckedChange}
            todo={todo}
            handleTodoChange={handleTodoChange}
            handelEditTime={handelEditTime}
            startTime={startTime}
            endTime={endTime}
            isEditStartTime={isEditStartTime}
            isEditEndTime={isEditEndTime}
            handleClickStartTime={handleClickStartTime}
            handleClickEndTime={handleClickEndTime}
            writeData={writeData}
          />}

        {scheduleData.map((item, index) => {
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

      <div className="text-right text-[14px]">
        {isAddTodo
          ? <Button onClick={() => setIsAddTodo(false)}>취소</Button>
          : <Button onClick={() => setIsAddTodo(true)}>추가</Button>}
      </div>
    </div>
  )
}