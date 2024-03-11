import fetchWeb from "@/server/fetchWeb"
import { useInfiniteQuery } from "@tanstack/react-query"
import Link from "next/link"
import { useSearchParams } from "next/navigation";
import React from "react";

export default function SearchWeb() {
  const params = useSearchParams();

  const queryParams = params.get('query');

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['webData', queryParams],
    queryFn: ({ pageParam = 0 }) => fetchWeb(queryParams, pageParam),
    select: (data) => data.pages.map(item => item.documents),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      const lastDataPage = Math.ceil(lastPage.meta.pageable_count / 10);
      if (lastDataPage !== lastPageParam)
        return allPages.length + 1;
    }
  })

  return (
    <React.Fragment>
      <ul className="w-[800px]">
        {data?.map(item => (
          item.map((result: SearchWebType, index: number) => {
            const url = result.url.split('/')

            return (
              <li
                key={index}
                className='py-4 px-3 mb-3 rounded-2xl border shadow'>
                <Link href={result.url} target='_blank'>
                  <p className='text-xs mb-3'>{`${url[0]}//${url[2]}`}</p>
                  <p
                    className='mb-2 hover:underline text-orange-600'
                    dangerouslySetInnerHTML={{ __html: result.title }}></p>
                  <p className='text-sm' dangerouslySetInnerHTML={{ __html: result.contents }}></p>
                </Link>
              </li>
            )
          })
        ))}
      </ul>

      {hasNextPage
        ? <div
          className="border w-[800px] p-1 text-center hover:border-orange-600 cursor-pointer"
          onClick={() => fetchNextPage()}>
          <p>더보기</p>
        </div>
        : <div className="text-orange-600 p-1 w-[800px">
          <p>검색결과의 끝입니다.</p>
        </div>}
    </React.Fragment>
  )
}