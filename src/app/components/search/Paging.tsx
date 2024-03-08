export default function Paging() {
  const pagingList = Array.from({ length: 20 }, (v, i) => i + 1)

  return (
    <ul className="flex">
      {pagingList.map((item, index) => {
        return (
          <li
            key={index}
            className="w-9 h-9 text-center cursor-pointer"
          >
            {item}
          </li>
        )
      })}
    </ul>
  )
}