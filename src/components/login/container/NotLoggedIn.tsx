import Link from "next/link";
import React from "react";

export default function NotLoggedIn() {
  return (
    <Link
      href={'/login'}
      className="bg-orange-600 text-center text-white p-1 cursor-pointer hover:bg-orange-500 block"
    >
      <span className="text-[14px]">로그인</span>
    </Link>
  )
};
