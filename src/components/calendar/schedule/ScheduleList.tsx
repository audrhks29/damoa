import { useState } from "react"

interface PropsType {
  item: ScheduleListType,
  updateData: (id: number, todo: string, isChecked: boolean) => void,
  removeData: (id: number) => void
}

export default function ScheduleList(props: PropsType) {
  const [isEdit, setIsEdit] = useState(false);
  const [isChecked, setIsChecked] = useState(props.item.isChecked);
  const [todo, setTodo] = useState(props.item.todo);

  const handleEditComplete = () => {
    props.updateData(props.item.id, todo, isChecked);
    setIsEdit(!isEdit)
  }

  const handleIsEdit = () => setIsEdit(!isEdit)
  const handleChecked = () => setIsChecked(!isChecked)
  const handleTodoChange = (e: any) => setTodo(e.target.value);

  return (
    <li className="py-3 flex justify-between">
      <div className="flex items-center">
        {isEdit
          ? <input
            type="checkbox"
            checked={isChecked}
            onChange={handleChecked} />
          : <input
            type="checkbox"
            checked={isChecked === true ? true : false}
            readOnly />}

        {isEdit
          ? <input type="text"
            value={todo}
            onChange={handleTodoChange}
            className="px-3 w-[220px]"
          />
          : <p className="w-[220px] px-3">{todo}</p>}

        <p className="px-3 text-[14px]">00시 00분 <br />~ 00시 00분</p>
      </div>

      {isEdit
        ? <button
          onClick={handleEditComplete}
          className="w-[80px]"
        >완료</button>
        : <button onClick={handleIsEdit}>수정</button>}

      {!isEdit && <button onClick={() => props.removeData(props.item.id)}>삭제</button>}
    </li>
  )
}