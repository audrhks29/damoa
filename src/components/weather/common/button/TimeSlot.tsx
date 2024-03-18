import { SetStateAction } from "react";

export default function TimeSlot({ timeSlot, setTimeSlot }: {
  timeSlot: string;
  setTimeSlot: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className='flex h-9 leading-9'>
      <div
        className='cursor-pointer w-12'
        onClick={() => setTimeSlot("morning")}
        style={{
          fontWeight: timeSlot === "morning" ? "bold" : "",
          color: timeSlot === "morning" ? "#EA580C" : "#ccc"
        }}
      >
        오전
      </div>

      <div
        className='cursor-pointer w-12'
        onClick={() => setTimeSlot("evening")}
        style={{
          fontWeight: timeSlot === "evening" ? "bold" : "",
          color: timeSlot === "evening" ? "#EA580C" : "#ccc"
        }}
      >
        오후
      </div>
    </div>
  )
}