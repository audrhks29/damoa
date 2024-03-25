import { useState } from "react"

interface PropsType {
  item: ScheduleListType,
  updateData: (id: number, todo: string, isChecked: boolean) => void,
  removeData: (id: number) => void
}

export default function ScheduleList(props: PropsType) {
  const [isEdit, setIsEdit] = useState(false);
  const [isChecked, setIsChecked] = useState(props.item.isChecked);
  const [todo, setTodo] = useState("");

  const handleEditComplete = () => {
    props.updateData(props.item.id, todo, isChecked);
    setIsEdit(!isEdit)
  }

  const handleIsEdit = () => {
    setTodo(props.item.todo)
    setIsEdit(true)
  }
  const handleChecked = () => setIsChecked(!isChecked)
  const handleTodoChange = (e: any) => setTodo(e.target.value);

  return (
    <li className="py-3 flex justify-between">
      <div className="flex items-center">
        {isEdit
          ? <input
            type="checkbox"
            checked={isChecked}
            onChange={handleChecked}
            className="mr-3"
          />
          : <input
            type="checkbox"
            checked={isChecked === true ? true : false}
            readOnly
            className="mr-3"
          />}

        {isEdit
          ? <input type="text"
            value={todo}
            onChange={handleTodoChange}
            className="w-[220px] border border-orange-600 focus:outline-none"
          />
          : <p className="w-[220px]">{props.item.todo}</p>}

        <p className="px-3 text-[14px]">
          {props.item.startTime.hour}시 {props.item.startTime.minute}분
          <br />~ {props.item.endTime.hour}시 {props.item.endTime.minute}분</p>
      </div>

      <div className="m-auto">
        {isEdit
          ? <button
            onClick={handleEditComplete}
            className="text-[14px] w-[80px] m-auto border border-orange-600 hover:bg-orange-600 hover:text-white"
          >완료</button>
          : <button
            className="text-[14px] w-[45px] mr-3 border border-orange-600 hover:bg-orange-600 hover:text-white"
            onClick={handleIsEdit}>수정</button>}

        {!isEdit
          && <button
            onClick={() => props.removeData(props.item.id)}
            className="text-[14px] w-[45px] border border-orange-600 hover:bg-orange-600 hover:text-white"
          >삭제</button>}
      </div>
    </li>
  )
}