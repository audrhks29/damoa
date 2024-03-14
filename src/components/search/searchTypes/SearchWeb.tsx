import React from "react";

import { useInfiniteQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation";

import fetchExceptBook from "@/server/fetchExceptBook";

import MoreButton from "@/components/button/MoreButton";
import EndData from "@/components/displaySearchState/EndData";
import WebContents from "./contents/WebContents";

export default function SearchWeb() {
  const params = useSearchParams();

  const typeParams = params.get('type');
  const queryParams = params.get('query');

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['webData', typeParams, queryParams],
    queryFn: ({ pageParam = 0 }) => fetchExceptBook(typeParams, queryParams, 10, pageParam),
    select: (data) => data.pages.map(item => item.documents),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      const lastDataPage = Math.ceil(lastPage.meta.pageable_count / 10);
      if (lastDataPage !== lastPageParam)
        return allPages.length + 1;
    }
  })

  return (
    <React.Fragment>
      <ul className="w-[800px]">
        {data?.map((item, index) => (
          <WebContents key={index} data={item} />
        ))}
      </ul>

      {hasNextPage
        ? <MoreButton fetchNextPage={fetchNextPage} />
        : <EndData />}
    </React.Fragment>
  )
}