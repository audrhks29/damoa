import React from "react";

import { useInfiniteQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation";

import FetchExceptBook from "@/server/FetchExceptBook";

import MoreButton from "@/components/button/MoreButton";
import EndData from "@/components/displaySearchState/EndData";
import SearchImageAll_Image from "./imageContainer/Image";

export default function SearchImage() {
  const params = useSearchParams();

  const typeParams = params.get('type');
  const queryParams = params.get('query');

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['imageData', typeParams, queryParams],
    queryFn: ({ pageParam = 0 }) => FetchExceptBook(typeParams, queryParams, 50, pageParam),
    select: (data) => data.pages.map(item => item.documents),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      const lastDataPage = Math.ceil(lastPage.meta.pageable_count / 50);
      if (lastDataPage !== lastPageParam)
        return allPages.length + 1;
    }
  })

  return (
    <React.Fragment>
      <div className="w-[1200px] px-3 py-4 rounded-2xl border shadow columns-5 md:columns-5 lg:columns-5 gap-4">
        {data?.map(item => (
          item.map((result: SearchImageType, index: number) => {
            if (result.image_url !== "")
              return (
                <div key={index}
                  className="relative "
                  style={{
                    height: "100px"
                  }}
                >
                  <SearchImageAll_Image
                    imgSrc={result.image_url}
                  />
                </div>
              )
          })
        ))}
      </div>
      {hasNextPage
        ? <MoreButton fetchNextPage={fetchNextPage} />
        : <EndData />}
    </React.Fragment>
  )
}