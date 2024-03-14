import React from "react";

import { useInfiniteQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation";

import FetchExceptBook from "@/server/FetchExceptBook";

import MoreButton from "@/components/button/MoreButton";
import EndData from "@/components/displaySearchState/EndData";
import BlogContents from "./contents/BlogContents";

export default function SearchBlog() {
  const params = useSearchParams();

  const typeParams = params.get('type');
  const queryParams = params.get('query');

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['blogData', typeParams, queryParams],
    queryFn: ({ pageParam = 0 }) => FetchExceptBook(typeParams, queryParams, 10, pageParam),
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
          <BlogContents key={index} data={item} />
        ))}
      </ul>
      {hasNextPage
        ? <MoreButton fetchNextPage={fetchNextPage} />
        : <EndData />}
    </React.Fragment>
  )
}