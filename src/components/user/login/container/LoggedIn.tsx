import { authService } from "@/firebase/firebaseInstance";
import useUserStore from "@/store/user-store"
import React from "react";

export default function LoggedIn() {
  const { userInfo, deleteUserInfo } = useUserStore();

  const logoutFB = () => {
    const logoutConfirm = confirm("로그아웃 하시겠습니까?")
    if (logoutConfirm) {
      authService.signOut()
      deleteUserInfo()
    }
  };

  return (
    <React.Fragment>
      <h2 className="m-0">{userInfo.email}</h2>
      <button
        onClick={logoutFB}
        className="w-[90px] h-8 rounded-2xl border border-[#999] hover:bg-orange-600 hover:text-white text-[14px]"
      >로그아웃</button>
    </React.Fragment>
  )
}