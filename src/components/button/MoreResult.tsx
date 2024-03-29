import { useRouter, useSearchParams } from "next/navigation";

export default function MoreResult({ type }: { type: string }) {
  const router = useRouter();
  const params = useSearchParams();

  const queryParams = params.get('query');

  const handleClick = () => {
    router.push(`/search?type=${type}&query=${queryParams}`)
  }

  return (
    <div className="text-right text-[14px]">
      <span
        onClick={handleClick}
        className="cursor-pointer hover:font-bold"
      >
        검색결과 더보기</span>
    </div>
  )
}