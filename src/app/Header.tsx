"use client"
import NavigationBar from "@/components/header/NavigationBar";
import SearchBox from "@/components/search/SearchBox";

import { useSearchParams } from "next/navigation";

export default function Header() {
  const params = useSearchParams();

  const typeParams = params.get('type');
  const queryParams = params.get('query');

  return (
    <header
      className="h-[90px] justify-between"
      style={{
        display: typeParams && queryParams ? "flex" : "",
        alignItems: typeParams && queryParams ? "center" : ""
      }}
    >

      {typeParams && queryParams && <SearchBox
        styleProp={{ marginLeft: '5%' }}
      />}
      <NavigationBar />
    </header>
  )
}