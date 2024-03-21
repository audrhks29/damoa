"use client"
import React, { MouseEventHandler } from "react";
import { CgMenuGridR } from "react-icons/cg";

export default function MenuBar(props: {
  menuPopup: boolean;
  handleMenuPopup: MouseEventHandler<HTMLDivElement>
}) {


  return (
    <div className="relative">
      <div
        className="text-[30px] cursor-pointer text-orange-500 mr-3"
        onClick={props.handleMenuPopup}
      >
        <i><CgMenuGridR /></i>
      </div>
      {props.menuPopup
        && <div className="border absolute right-0 w-72 p-5 text-center rounded-3xl shadow-lg bg-white">
          <h3 className="mb-3"></h3>
          <ul>
            <li className="flex h-10 justify-between leading-10">
              캘린더
            </li>
            <li className="flex h-10 justify-between leading-10">
              메모
            </li>
            <li className="flex h-10 justify-between leading-10">
              주식
            </li>
          </ul>
        </div>}
    </div>
  )
}