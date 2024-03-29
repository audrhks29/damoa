"use client"

import NavigationBar from "@/components/header/NavigationBar";
import SearchBox from "@/components/search/SearchBox";
import Image from "next/image";
import Link from "next/link";

import { useSearchParams } from "next/navigation";

export default function Header() {
  const params = useSearchParams();

  const typeParams = params.get('type');
  const queryParams = params.get('query');

  return (
    <header
      className="h-[90px] justify-between"
      style={{
        display: "flex",
        alignItems: typeParams && queryParams ? "center" : ""
      }}
    >
      {!typeParams && !queryParams &&
        <Link href='/' className="flex items-center">
          <Image
            width='50'
            height='50'
            alt=''
            src='/logo.png'
            priority={true}
            className="ml-6"
          />
        </Link>
      }
      {typeParams && queryParams && <SearchBox
        styleProp={{ marginLeft: '5%' }}
      />}

      <NavigationBar />
    </header>
  )
}