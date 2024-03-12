import { useRouter, useSearchParams } from "next/navigation";

export default function MoreResult({ type }: { type: string }) {
  const router = useRouter();

  const params = useSearchParams();
  const queryParams = params.get('query');

  const handleClick = () => {
    router.push(`/search?type=${type}&query=${queryParams}`)
  }

  return (
    <div
      className="text-right text-[14px] cursor-pointer hover:text-orange-600"
      onClick={handleClick}
    >
      <span>검색결과 더보기</span>
    </div>
  )
}