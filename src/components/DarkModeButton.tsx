"use client"

import { useEffect, useState } from "react";

export default function DarkMode() {
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const localStorageChecker = (): boolean => {
    if (!localStorage.theme) return isDarkMode;
    return localStorage.theme === 'dark' ? true : false;
  };

  const [dark, setDark] = useState(localStorageChecker());

  const darkSetButton = () => {
    setDark((state) => {
      const update = !state;
      if (update) localStorage.theme = 'dark';
      else localStorage.theme = 'light';
      return update;
    });
  };

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);


  return (

    <button className="" onClick={darkSetButton}>
      다크모드
    </button>
  )

}
