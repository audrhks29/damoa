"use client"

import useSearchTypeStore from "@/store/searchType-store"

import SearchBox from "../components/search/SearchBox"
import Paging from "../components/search/Paging"
import SearchWeb from "../components/search/web/SearchWeb"
import { useSearchParams } from "next/navigation"
import SearchAll from "../components/search/all/SearchAll"


export default function SearchResult() {
  const { searchTypeResults } = useSearchTypeStore()
  const params = useSearchParams()

  const typeParam = params.get('type');

  return (
    <main className="inner">
      <SearchBox
        styleProp={{ marginRight: 'auto' }} />

      {typeParam === "all" && <SearchAll />}
      {typeParam === "web" && <SearchWeb searchTypeResults={searchTypeResults} />}

      <Paging />
    </main>
  )
}