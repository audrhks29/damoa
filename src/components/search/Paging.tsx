"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Paging() {
  const router = useRouter();
  const params = useSearchParams();
  const pathName = usePathname();

  const pagingArray = Array.from({ length: 50 }, (_, i) => i + 1);

  const typeParams = params.get('type');
  const queryParams = params.get('query');
  const pageParams = params.get('page');

  const pagingLength = 10; // 페이지 그룹 길이

  const routerBaseUrl = `${pathName}?type=${typeParams}&query=${queryParams}&`

  const [pagingGroup, setPagingGroup]
    = useState<number>(Math.floor(Number(pageParams) / pagingLength))

  const clickPagingList = (pageNumber: number) => {
    router.push(`${routerBaseUrl}page=${pageNumber}`);
  }

  const pagingList = pagingArray.slice(pagingGroup * pagingLength, pagingGroup * pagingLength + pagingLength)

  const handlePrevPagingGroup = (number: number) => pagingGroup == 0 ? "" : changePagingGroup(number)
  const handleNextPagingGroup = (number: number) => pagingGroup == 4 ? "" : changePagingGroup(number)

  const changePagingGroup = (number: number) => {
    const value = pagingGroup + number
    setPagingGroup(value)
    router.push(`${routerBaseUrl}page=${value * 10 + 1}`);
  }

  return (
    <ul className="w-[800px] flex justify-center">
      <li
        className="pagingArrow mr-auto"
        onClick={() => handlePrevPagingGroup(-1)}>
        <i><MdKeyboardArrowLeft /></i>
      </li>
      {pagingList.map((item, index) => {
        const thisPage = Number(pageParams) === item;

        return (
          <li
            key={index}
            className="w-9 h-9 text-center cursor-pointer text-[14px] leading-9"
            style={{
              color: thisPage ? "rgb(234 88 12)" : "",
              fontWeight: thisPage ? "600" : "",
            }}
            onClick={() => clickPagingList(item)}
          >
            {item}
          </li>
        )
      })}
      <li
        className="pagingArrow ml-auto"
        onClick={() => handleNextPagingGroup(+1)}>
        <i><MdKeyboardArrowRight /></i>
      </li>
    </ul>
  )
}