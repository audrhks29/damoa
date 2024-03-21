"use client"

import Login from "@/components/header/Login";
import MenuBar from "@/components/header/MenuBar";
// import WeatherSummary from "@/components/header/WeatherSummary";
import dynamic from "next/dynamic";
import { useState } from "react";


const WeatherSummary = dynamic(() => import('@/components/header/WeatherSummary'), {
  ssr: false,
  loading: () => <div>날씨 데이터를 로딩중입니다.</div>
})

export default function Header() {
  const [menuPopup, setMenuPopup] = useState(false);
  const [userPopup, setUserPopup] = useState(false);

  const handleMenuPopup = () => {
    setMenuPopup(!menuPopup)
    setUserPopup(false)
  }

  const handleUserPopup = () => {
    setUserPopup(!userPopup)
    setMenuPopup(false)
  }

  return (
    <header>
      <nav className="h-12 flex items-center justify-end">
        <WeatherSummary />
        <MenuBar
          menuPopup={menuPopup}
          handleMenuPopup={handleMenuPopup}
        />
        <Login
          userPopup={userPopup}
          handleUserPopup={handleUserPopup}
        />
      </nav>
    </header>
  )
}