"use client"

import { useState } from "react";

import Login from "@/components/header/Login";
import MenuBar from "@/components/header/MenuBar";
import WeatherBar from "./WeatherBar";

export default function NavigationBar() {
  const [weatherPopup, setWeatherPopup] = useState(false);
  const [menuPopup, setMenuPopup] = useState(false);
  const [userPopup, setUserPopup] = useState(false);

  const handleWeatherPopup = () => {
    setWeatherPopup(!weatherPopup)
    setMenuPopup(false)
    setUserPopup(false)
  }

  const handleMenuPopup = () => {
    setWeatherPopup(false)
    setMenuPopup(!menuPopup)
    setUserPopup(false)
  }

  const handleUserPopup = () => {
    setWeatherPopup(false)
    setMenuPopup(false)
    setUserPopup(!userPopup)
  }

  return (
    <nav className="flex items-center justify-end h-[90px]">
      <WeatherBar
        weatherPopup={weatherPopup}
        handleWeatherPopup={handleWeatherPopup}
      />
      <MenuBar
        menuPopup={menuPopup}
        handleMenuPopup={handleMenuPopup}
      />
      <Login
        userPopup={userPopup}
        handleUserPopup={handleUserPopup}
      />
    </nav>
  )
}