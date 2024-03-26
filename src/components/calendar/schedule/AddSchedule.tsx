import { Input } from "@/components/ui/input";
import EditTime from "../EditTime";
import { Button } from "@/components/ui/button";

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
    <li className="py-3 flex items-center">
      <input type="checkbox"
        checked={props.isChecked}
        onChange={props.handleCheckedChange}
        className="mr-3"
      />

      <Input type="text"
        value={props.todo}
        onChange={props.handleTodoChange}
        className="w-[222px]"
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

      <Button
        className="w-[80px] m-auto"
        onClick={props.writeData}
      >등록</Button>
    </li>

  )
}