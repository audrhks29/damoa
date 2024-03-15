export default function MoreButton(props: MoreButtonProps) {

  return (
    <div
      className="border p-1 text-center hover:border-orange-600 cursor-pointer"
      onClick={() => props.fetchNextPage()}
      style={props.style}
    >
      <p>더보기</p>
    </div>
  )
}