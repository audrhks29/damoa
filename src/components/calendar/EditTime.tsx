interface PropsType {
  timeArray: string[];
  func: (item: string) => void;
}

export default function EditTime(props: PropsType) {
  return (
    <ul className='overflow-y-scroll w-20'>
      {props.timeArray.map((item, index) => {
        return (
          <li
            key={index}
            onClick={() => props.func(item)}
            className="cursor-pointer hover:bg-orange-400 hover:text-white"
          >{item}</li>
        )
      })}
    </ul>
  )
}