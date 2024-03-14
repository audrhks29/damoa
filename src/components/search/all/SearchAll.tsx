import FetchExceptBook from "@/server/FetchExceptBook";
import FetchBook from "@/server/FetchBook";

import { useSearchParams } from "next/navigation";

import { useQueries } from "@tanstack/react-query";

import SearchAllWeb from "./kindOfType/SearchAllWeb";
import SearchAllVclip from "./kindOfType/SearchAllVclip";
import SearchAllImage from "./kindOfType/SearchAllImage";
import SearchAllBlog from "./kindOfType/SearchAllBlog";
import SearchAllBook from "./kindOfType/SearchAllBook";
import SearchAllCafe from "./kindOfType/SearchAllCafe";



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
        queryFn: () => FetchExceptBook("web", queryParams, 4, 1),
        select: (data: { documents: SearchWebType[] }) => data.documents
      },
      {
        queryKey: ["vclipAllData", queryParams],
        queryFn: () => FetchExceptBook("vclip", queryParams, 3, 1),
        select: (data: { documents: SearchVclipType[] }) => data.documents
      },
      {
        queryKey: ["imageAllData", queryParams],
        queryFn: () => FetchExceptBook("image", queryParams, 4, 1),
        select: (data: { documents: SearchImageType[] }) => data.documents
      },
      {
        queryKey: ["blogAllData", queryParams],
        queryFn: () => FetchExceptBook("blog", queryParams, 3, 1),
        select: (data: { documents: SearchBlogType[] }) => data.documents
      },
      {
        queryKey: ["bookAllData", queryParams],
        queryFn: () => FetchBook(queryParams, 3, 1),
        select: (data: { documents: SearchBookType[] }) => data.documents
      },
      {
        queryKey: ["cafeAllData", queryParams],
        queryFn: () => FetchExceptBook("cafe", queryParams, 3, 1),
        select: (data: { documents: SearchCafeType[] }) => data.documents
      },
    ]
  })

  return (
    <div className="w-[800px]">
      {webAllData && <SearchAllWeb data={webAllData} />}
      {vclipAllData && <SearchAllVclip data={vclipAllData} />}
      {imageAllData && <SearchAllImage data={imageAllData} />}
      {blogAllData && <SearchAllBlog data={blogAllData} />}
      {bookAllData && <SearchAllBook data={bookAllData} />}
      {cafeAllData && <SearchAllCafe data={cafeAllData} />}
    </div>
  )
}