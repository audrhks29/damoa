"use client"
import Link from "next/link";
import React, { MouseEventHandler } from "react";
import { CgMenuGridR } from "react-icons/cg";

export default function MenuBar(props: {
  menuPopup: boolean;
  handleMenuPopup: MouseEventHandler<HTMLDivElement>
  handleAllPopupFalse: MouseEventHandler<HTMLAnchorElement>
}) {

  return (
    <div className="relative">
      <div
        className="text-[30px] cursor-pointer text-orange-600 mr-3"
        onClick={props.handleMenuPopup}
      >
        <i><CgMenuGridR /></i>
      </div>

      {props.menuPopup
        && <div className="border absolute z-10 right-0 w-72 p-5 text-center rounded-3xl shadow-lg bg-white">
          <h3 className="mb-3"></h3>
          <ul className="text-left">
            <li className="h-10 leading-10 cursor-pointer hover:text-orange-600">
              {/* <Link
                href='/calendar'
                className="block"
                onClick={props.handleAllPopupFalse}
              >캘린더</Link> */}
              캘린더
            </li>
            <li className="h-10 leading-10 cursor-pointer hover:text-orange-600">
              메모
            </li>
            <li className=" h-10 leading-10 cursor-pointer hover:text-orange-600">
              주식
            </li>
          </ul>
        </div>}
    </div>
  )
}