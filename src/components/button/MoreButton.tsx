export default function MoreButton(props: MoreButtonProps) {

  return (
    <div
      className="border p-1 text-center hover:font-bold cursor-pointer"
      onClick={() => props.fetchNextPage()}
    >
      <p>더보기</p>
    </div>
  )
}