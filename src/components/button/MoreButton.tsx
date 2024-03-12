export default function MoreButton(props: MoreButtonProps) {
  return (
    <div
      className="border w-[800px] p-1 text-center hover:border-orange-600 cursor-pointer"
      onClick={() => props.fetchNextPage()}>
      <p>더보기</p>
    </div>
  )
}