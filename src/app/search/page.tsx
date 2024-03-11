"use client"

import useSearchTypeStore from "@/store/searchType-store"
import { useSearchParams } from "next/navigation"

import SearchBox from "@/components/search/SearchBox"
import TypeSection from "@/components/TypeSection"
import SearchAll from "@/components/search/all/SearchAll"
import SearchWeb from "@/components/search/web/SearchWeb"
import Paging from "@/components/search/Paging"
import SearchVclip from "@/components/search/vclip/SearchVclip"
import SearchBlog from "@/components/search/blog/SearchBlog"
import SearchBook from "@/components/search/book/SearchBook"
import SearchCafe from "@/components/search/cafe/SearchCafe"
import SearchOnlyImage from "@/components/search/image/SearchOnlyImage"


export default function SearchResult() {
  const {
    searchWebResults,
    searchVclipResults,
    searchImageResults,
    searchBlogResults,
    searchBookResults,
    searchCafeResults,
  } = useSearchTypeStore()

  const params = useSearchParams()

  const typeParam = params.get('type');

  return (

    <main className="inner">
      <SearchBox
        styleProp={{ marginRight: 'auto' }} />

      <TypeSection />

      {typeParam === "all" && <SearchAll />}
      {typeParam === "web" && <SearchWeb searchTypeResults={searchWebResults} />}
      {typeParam === "vclip" && <SearchVclip searchTypeResults={searchVclipResults} />}
      {typeParam === "image" && <SearchOnlyImage searchTypeResults={searchImageResults} />}
      {typeParam === "blog" && <SearchBlog searchTypeResults={searchBlogResults} />}
      {typeParam === "book" && <SearchBook searchTypeResults={searchBookResults} />}
      {typeParam === "cafe" && <SearchCafe searchTypeResults={searchCafeResults} />}

      <Paging />
    </main>

  )
}