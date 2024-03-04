"use client"

import { useEffect, useState } from "react";

export default function DarkMode() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const localStorageChecker = (): boolean => {
    if (isClient) {
      const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (!localStorage.theme) return isDarkMode;
      return localStorage.theme === 'dark';
    }
    return false;
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
    if (isClient) {
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
    }
  }, [dark, isClient]);

  return (
    isClient && (
      <button className="" onClick={darkSetButton}>
        다크모드
      </button>
    )
  );
}
