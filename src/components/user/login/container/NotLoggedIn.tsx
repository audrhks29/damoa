import Link from "next/link";
import React from "react";

export default function NotLoggedIn() {
  return (
    <React.Fragment>
      <h2 className="m-0">Damoa 계정으로 로그인</h2>

      <Link
        href={'/login'}
        className="bg-orange-600 text-white p-4 rounded-2xl my-3 cursor-pointer hover:bg-orange-500 block"
      >
        <span className="font-semibold">Damoa</span>&nbsp;
        <span>로그인</span>
      </Link>

      <div className="text-[14px] flex justify-between">
        <span>아이디 찾기</span>
        <span>비밀번호 찾기</span>
        <span>
          <Link href={'/signup'}>
            회원가입
          </Link>
        </span>
      </div>
    </React.Fragment>
  )
};
