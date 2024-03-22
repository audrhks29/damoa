"use client"

import { useSearchParams } from "next/navigation"

import TypeSection from "@/components/search/TypeSection"
import SearchAll from "@/components/search/all/SearchAll"
import SearchWeb from "@/components/search/searchTypes/SearchWeb"
import SearchVclip from "@/components/search/searchTypes/SearchVclip"
import SearchBlog from "@/components/search/searchTypes/SearchBlog"
import SearchBook from "@/components/search/searchTypes/SearchBook"
import SearchCafe from "@/components/search/searchTypes/SearchCafe"
import SearchImage from "@/components/search/searchTypes/SearchImage"

import SearchSide from "@/components/search/side/SearchSide"

export default function SearchPage() {
  const params = useSearchParams()
  const typeParams = params.get('type');

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate();

  const hour = date.getHours()
  const nowHour = hour < 10 ? `0${hour}00` : `${hour}00`

  const today = `${year}${month}${day}`;

  return (

    <main className="inner pb-6 relative">
      <TypeSection />

      {typeParams === "all" && <SearchAll />}
      {typeParams === "web" && <SearchWeb />}
      {typeParams === "vclip" && <SearchVclip />}
      {typeParams === "image" && <SearchImage />}
      {typeParams === "blog" && <SearchBlog />}
      {typeParams === "book" && <SearchBook />}
      {typeParams === "cafe" && <SearchCafe />}

      {typeParams !== "image" && <SearchSide
        today={today}
        nowHour={nowHour}
        imageSize={100}
        fontSize={"50px"}
      />}

    </main>

  )
}