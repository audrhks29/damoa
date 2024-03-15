import fetchExceptBook from "@/server/fetchExceptBook";
import fetchBook from "@/server/fetchBook";

import { useSearchParams } from "next/navigation";

import { useQueries } from "@tanstack/react-query";

import SearchAllWeb from "./kindOfType/SearchAllWeb";
import SearchAllVclip from "./kindOfType/SearchAllVclip";
import SearchAllImage from "./kindOfType/SearchAllImage";
import SearchAllBlog from "./kindOfType/SearchAllBlog";
import SearchAllBook from "./kindOfType/SearchAllBook";
import SearchAllCafe from "./kindOfType/SearchAllCafe";
import NoSearchData from "@/components/displaySearchState/NoSearchData";

export default function SearchAll() {
  const params = useSearchParams()
  const queryParams = params.get('query');

  const [
    { data: webAllData },
    { data: vclipAllData },
    { data: imageAllData },
    { data: blogAllData },
    { data: bookAllData },
    { data: cafeAllData }
  ] = useQueries({
    queries: [
      {
        queryKey: ["webAllData", queryParams],
        queryFn: () => fetchExceptBook("web", queryParams, 4, 1),
        select: (data: { documents: SearchWebType[] }) => data.documents
      },
      {
        queryKey: ["vclipAllData", queryParams],
        queryFn: () => fetchExceptBook("vclip", queryParams, 3, 1),
        select: (data: { documents: SearchVclipType[] }) => data.documents
      },
      {
        queryKey: ["imageAllData", queryParams],
        queryFn: () => fetchExceptBook("image", queryParams, 4, 1),
        select: (data: { documents: SearchImageType[] }) => data.documents
      },
      {
        queryKey: ["blogAllData", queryParams],
        queryFn: () => fetchExceptBook("blog", queryParams, 3, 1),
        select: (data: { documents: SearchBlogType[] }) => data.documents
      },
      {
        queryKey: ["bookAllData", queryParams],
        queryFn: () => fetchBook(queryParams, 3, 1),
        select: (data: { documents: SearchBookType[] }) => data.documents
      },
      {
        queryKey: ["cafeAllData", queryParams],
        queryFn: () => fetchExceptBook("cafe", queryParams, 3, 1),
        select: (data: { documents: SearchCafeType[] }) => data.documents
      },
    ]
  })

  return (
    <div className="w-[800px]">
      {webAllData && webAllData.length > 0 && <SearchAllWeb data={webAllData} />}
      {vclipAllData && vclipAllData.length > 0 && <SearchAllVclip data={vclipAllData} />}
      {imageAllData && imageAllData.length > 0 && <SearchAllImage data={imageAllData} />}
      {blogAllData && blogAllData.length > 0 && <SearchAllBlog data={blogAllData} />}
      {bookAllData && bookAllData.length > 0 && <SearchAllBook data={bookAllData} />}
      {cafeAllData && cafeAllData.length > 0 && <SearchAllCafe data={cafeAllData} />}

      {
        webAllData && webAllData.length === 0
        && vclipAllData && vclipAllData.length === 0
        && imageAllData && imageAllData.length === 0
        && blogAllData && blogAllData.length === 0
        && bookAllData && bookAllData.length === 0
        && cafeAllData && cafeAllData.length === 0
        && <NoSearchData style={{ width: "800px" }} />
      }
    </div>
  )
}