"use client"

import { authService } from "@/firebase/firebaseInstance";
import { useEffect, useState } from "react";

import NotLoggedIn from "./NotLoggedIn";
import LoggedIn from "./LoggedIn";
import useUserStore from "@/store/user-store";



export default function Login() {
  const { userInfo, getUserInfo } = useUserStore()

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) getUserInfo(user)
    });
  }, [getUserInfo]);

  return (
    <section className="border border-orange-600 rounded-2xl sm:hidden lg:w-64 lg:block xl:w-68 2xl:w-72 p-4 m-0 text-center">
      {!userInfo && <NotLoggedIn />}
      {userInfo && <LoggedIn />}
    </section>
  )
}