import React from "react";

import { useInfiniteQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation";

import fetchExceptBook from "@/server/fetchExceptBook";

import MoreButton from "@/components/button/MoreButton";
import EndData from "@/components/displaySearchState/EndData";
import SearchImageAll_Image from "./imageContainer/Image";
import NoSearchData from "@/components/displaySearchState/NoSearchData";

export default function SearchImage() {
  const params = useSearchParams();

  const typeParams = params.get('type');
  const queryParams = params.get('query');

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['imageData', typeParams, queryParams],
    queryFn: ({ pageParam = 0 }) => fetchExceptBook(typeParams, queryParams, 20, pageParam),
    select: (data) => data.pages.map(item => item.documents),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      const lastDataPage = Math.ceil(lastPage.meta.pageable_count / 20);
      if (lastDataPage !== lastPageParam && lastDataPage !== 0)
        return allPages.length + 1;
    }
  })

  return (
    <React.Fragment>
      {data && data[0].length > 0
        && <div className="sm:w-full lg:w-full xl:w-[1200px] px-3 py-4 rounded-2xl border shadow sm:columns-2 lg:columns-3 xl:columns-4">
          <div className="px-1 grid auto-rows-[10px] gap-[1px]">
            {data?.map(item => (
              item.map((result: SearchImageType, index: number) => {
                if (result.image_url !== "")
                  return (
                    <SearchImageAll_Image
                      imgSrc={result.image_url}
                      key={index}
                      photoWidth={result.width}
                      photoHeight={result.height}
                      url={result.doc_url}
                    />
                  )
              })))
            }
          </div>
        </div>

      }
      {hasNextPage && <MoreButton fetchNextPage={fetchNextPage} />}
      {data && data[0].length > 0 && !hasNextPage && <EndData />}
      {data && data[0].length === 0 && !hasNextPage && <NoSearchData />}
    </React.Fragment>
  )
}