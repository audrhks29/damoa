import React from "react";

import Image from "next/image";
import Link from "next/link"

import { useInfiniteQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation";

import fetchBook from "@/server/fetchBook";

import MoreButton from "@/components/button/MoreButton";
import EndData from "@/components/displaySearchState/EndData";
import BookContents from "./contents/BookContents";

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
      if (lastDataPage !== lastPageParam)
        return allPages.length + 1;
    }
  })

  return (
    <React.Fragment>
      <ul className="w-[800px]">
        {data?.map((item, index) => (
          <BookContents key={index} data={item} />
        ))}
      </ul>
      {hasNextPage
        ? <MoreButton fetchNextPage={fetchNextPage} />
        : <EndData />}
    </React.Fragment>
  )
}