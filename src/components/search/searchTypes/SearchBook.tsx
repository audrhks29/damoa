import React from "react";

import { useInfiniteQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation";

import fetchBook from "@/server/fetchBook";

import MoreButton from "@/components/button/MoreButton";
import EndData from "@/components/displaySearchState/EndData";
import NoSearchData from "@/components/displaySearchState/NoSearchData";
import BookContents from "../contents/BookContents";

export default function SearchBook() {
  const params = useSearchParams();

  const typeParams = params.get('type');
  const queryParams = params.get('query');

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['bookData', typeParams, queryParams],
    queryFn: ({ pageParam = 0 }) => fetchBook(queryParams, 10, pageParam),
    select: (data) => data.pages.map(item => item.documents),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      const lastDataPage = Math.ceil(lastPage.meta.pageable_count / 10);
      if (lastDataPage !== lastPageParam && lastDataPage !== 0)
        return allPages.length + 1;
    }
  })

  return (
    <React.Fragment>
      <ul className="search_result_box">
        {data?.map((item, index) => (
          <BookContents key={index} data={item} />
        ))}

        {hasNextPage && <MoreButton fetchNextPage={fetchNextPage} />}
        {data && data[0].length > 0 && !hasNextPage && <EndData />}
        {data && data[0].length === 0 && !hasNextPage && <NoSearchData />}
      </ul>
    </React.Fragment>
  )
}