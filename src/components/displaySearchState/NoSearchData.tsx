import { useSearchParams } from "next/navigation";

export default function NoSearchData() {
  const param = useSearchParams();
  const queryParam = param.get('query');

  return (
    <div className="p-1"    >
      <p><span className="text-orange-600 font-semibold">{queryParam}</span>과 일치하는 검색결과를 찾을 수 없습니다.</p>
    </div>
  )
}