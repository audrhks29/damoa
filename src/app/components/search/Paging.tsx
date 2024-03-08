"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function Paging() {
  const router = useRouter();
  const params = useSearchParams();
  const pathName = usePathname();

  const pagingList = Array.from({ length: 20 }, (_, i) => i + 1);

  const queryParams = params.get('query');
  const pageParams = params.get('page');

  const clickPagingList = (pageNumber: number) => {
    router.push(`${pathName}?query=${queryParams}&page=${pageNumber}`);
  }

  return (
    <ul className="w-[800px] flex justify-center">
      {pagingList.map((item, index) => {
        const thisPage = Number(pageParams) === item;

        return (
          <li
            key={index}
            className="w-9 h-9 text-center cursor-pointer text-[14px] leading-9"
            style={{
              color: thisPage ? "rgb(234 88 12)" : "",
              fontWeight: thisPage ? "600" : "",
            }}
            onClick={() => clickPagingList(item)}
          >
            {item}
          </li>
        )
      })}
    </ul>
  )
}