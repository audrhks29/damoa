"use client"

import { useSearchParams } from "next/navigation"

import SearchBox from "@/components/search/SearchBox"
import TypeSection from "@/components/TypeSection"
import SearchAll from "@/components/search/all/SearchAll"
import SearchWeb from "@/components/search/searchTypes/SearchWeb"
import SearchVclip from "@/components/search/searchTypes/SearchVclip"
import SearchBlog from "@/components/search/searchTypes/SearchBlog"
import SearchBook from "@/components/search/searchTypes/SearchBook"
import SearchCafe from "@/components/search/searchTypes/SearchCafe"
import SearchImage from "@/components/search/searchTypes/SearchImage"

export default function SearchResult() {
  const params = useSearchParams()

  const typeParams = params.get('type');
  return (

    <main className="inner pb-6">
      <SearchBox
        styleProp={{ marginRight: 'auto' }} />

      <TypeSection />

      {typeParams === "all" && <SearchAll />}
      {typeParams === "web" && <SearchWeb />}
      {typeParams === "vclip" && <SearchVclip />}
      {typeParams === "image" && <SearchImage />}
      {typeParams === "blog" && <SearchBlog />}
      {typeParams === "book" && <SearchBook />}
      {typeParams === "cafe" && <SearchCafe />}

    </main>

  )
}