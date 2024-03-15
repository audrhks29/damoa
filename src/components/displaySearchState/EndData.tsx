export default function EndData(props: {
  style: React.CSSProperties
}) {
  return (
    <div
      className="text-orange-600 p-1"
      style={props.style}
    >
      <p>검색결과의 끝입니다.</p>
    </div>
  )
}