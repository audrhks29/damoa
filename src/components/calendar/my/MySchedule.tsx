import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { db } from "@/firebase/firebaseInstance";
import useScheduleStore from "@/store/schedule-store";
import useUserStore from "@/store/user-store";
import { child, get, ref } from "firebase/database";
import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";

interface NyScheduleType {
  key: string;
  value: ScheduleListType[]
}

export default function MySchedule({ setNowDate, setValue }: {
  setNowDate: Dispatch<SetStateAction<string>>;
  setValue: Dispatch<SetStateAction<Date>>;
}) {
  const { userInfo } = useUserStore();
  const { scheduleData } = useScheduleStore();
  const [mySchedule, setMySchedule] = useState<NyScheduleType | null>(null);

  const readOne = useCallback(() => {
    const dbRef = ref(db);

    if (userInfo !== null) {
      get(child(dbRef, `/${userInfo.uid}/schedule`))
        .then(snapshot => {
          const data = snapshot.val();
          if (data) setMySchedule(data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [userInfo]);

  useEffect(() => {
    // db read
    readOne()
  }, [userInfo, readOne, scheduleData])

  const handleClickData = (scheduleDate: string) => {
    setNowDate(scheduleDate)
    const dateString = scheduleDate;
    const match = dateString.match(/(\d{4})년 (\d{2})월 (\d{2})일/);

    if (match) {
      const year = parseInt(match[1]);
      const month = parseInt(match[2]) - 1; // JavaScript의 Date 객체에서는 월이 0부터 시작합니다
      const day = parseInt(match[3]);

      const dateObject = new Date(year, month, day);
      setValue(dateObject); // 변환된 Date 객체 출력
    } else {
      console.error('날짜 형식이 잘못되었습니다.');
    }
  }

  return (
    <div className="w-[600px] col-span-2 row-start-2 m-auto border sm:border border-primary xl:border-0 xl:shadow-xl rounded-2xl p-5">
      <h2 className="border-b-2 border-b-primary p-2 font-bold text-center">내 일정</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[160px]">날짜</TableHead>
            <TableHead className="w-[90px] text-center">완료여부</TableHead>
            <TableHead>일정</TableHead>
            <TableHead className="w-[120px]">시간</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>

          {mySchedule && Object.entries(mySchedule).map(([date, values], index) => (
            <React.Fragment key={index}>
              {values.map((item: ScheduleListType, index: number) => (
                <TableRow
                  key={`${date}-${index}`}
                  className="cursor-pointer"
                  onClick={() => handleClickData(date)}
                >
                  <TableCell>{date}</TableCell>
                  <TableCell className="text-center">{item.isChecked ? "완료" : "미완료"}</TableCell>
                  <TableCell>{item.todo}</TableCell>
                  <TableCell>
                    {item.startTime.hour}시{item.startTime.minute}분<br />
                    ~ {item.endTime.hour}시{item.endTime.minute}분
                  </TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}