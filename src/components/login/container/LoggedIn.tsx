import { authService } from "@/firebase/firebaseInstance";
import useUserStore from "@/store/user-store"
import React, { MouseEventHandler } from "react";

export default function LoggedIn(props: {
  userPopup: boolean;
  handleUserPopup: MouseEventHandler<HTMLDivElement>
}) {

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
      <div
        className="bg-orange-600 text-center text-white p-1 cursor-pointer hover:bg-orange-500 block"
        onClick={props.handleUserPopup}
      >
        <span className="text-[14px]">로그인됌</span>
      </div>

      {props.userPopup &&
        <div className="border absolute right-0 w-72 p-5 text-center rounded-3xl shadow-lg bg-white">
          <h3 className="mb-3">{userInfo.email}</h3>
          <ul>
            <li className="flex h-10 justify-between leading-10">
              <div className="w-[120px] rounded-l-2xl border cursor-pointer hover:bg-orange-500 hover:text-white">계정설정</div>
              <div
                className="w-[120px] rounded-r-2xl border cursor-pointer hover:bg-orange-500 hover:text-white"
                onClick={logoutFB}>로그아웃</div>
            </li>
          </ul>
        </div>}
    </React.Fragment>
  )
}