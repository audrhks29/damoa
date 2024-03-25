import EditTime from "../EditTime";

const hourArray = Array.from({ length: 24 }, (_, index) => (
  index <= 9 ? `0${index}` : (index).toString()
));

const minuteArray = Array.from({ length: 60 }, (_, index) => (
  index <= 9 ? `0${index}` : (index).toString()
));

interface PropsType {
  isChecked: boolean;
  handleCheckedChange: (e: any) => void;
  todo: string;
  handleTodoChange: (e: any) => void;
  handelEditTime: () => void;
  startTime: {
    hour: string;
    minute: string;
  }
  endTime: {
    hour: string;
    minute: string;
  }
  isEditStartTime: boolean;
  isEditEndTime: boolean;
  handleClickStartTime: (hour: string, minute: string) => void;
  handleClickEndTime: (hour: string, minute: string) => void;
  writeData: () => void;
}

export default function AddSchedule(props: PropsType) {
  return (
    <li className="py-3 flex">
      <input
        type="checkbox"
        checked={props.isChecked}
        onChange={props.handleCheckedChange}
        className="mr-3"
      />
      <input type="text"
        value={props.todo}
        onChange={props.handleTodoChange}
        className="border border-orange-600 focus:outline-none"
      />

      <div className="px-3 relative">
        <p
          onClick={props.handelEditTime}
          className="text-[14px] cursor-pointer"
        >{props.startTime.hour}시 {props.startTime.minute}분<br />
          ~ {props.endTime.hour}시 {props.endTime.minute}분</p>

        {props.isEditStartTime
          && <EditTime
            text={"시작시간"}
            time={props.startTime}
            hourArray={hourArray}
            minuteArray={minuteArray}
            handleClickTime={props.handleClickStartTime}
          />
        }

        {props.isEditEndTime
          && <EditTime
            text={"종료시간"}
            time={props.endTime}
            hourArray={hourArray}
            minuteArray={minuteArray}
            handleClickTime={props.handleClickEndTime}
          />
        }
      </div>
      <button
        className="w-[80px] m-auto border border-orange-600 hover:bg-orange-600 hover:text-white"
        onClick={props.writeData}
      >등록</button>
    </li>

  )
}