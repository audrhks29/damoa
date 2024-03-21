"use client"

import { authService } from "@/firebase/firebaseInstance";
import React, { MouseEventHandler, useEffect } from "react";

import NotLoggedIn from "../login/container/NotLoggedIn";
import LoggedIn from "../login/container/LoggedIn";
import useUserStore from "@/store/user-store";

export default function Login(props: {
  userPopup: boolean;
  handleUserPopup: MouseEventHandler<HTMLDivElement>
}) {
  const { userInfo, getUserInfo } = useUserStore()

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) getUserInfo(user)
    });
  }, [getUserInfo]);

  return (
    <div className="w-24 mr-3 relative">
      {!userInfo && <NotLoggedIn />}
      {userInfo && <LoggedIn
        userPopup={props.userPopup}
        handleUserPopup={props.handleUserPopup}
      />}
    </div>
  )
}