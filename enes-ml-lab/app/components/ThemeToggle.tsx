"use client";
import { useEffect, useState } from "react";

import React from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <>
      <button
        type="button"
        className="text-gray-900 bg-white dark:bg-gray-800 dark:text-white 
             border border-gray-300 dark:border-gray-600 
             rounded-lg text-sm px-5 py-2.5 me-2 mb-2 font-medium 
             transition-all duration-200 ease-in-out 
             transform hover:scale-105 active:scale-95 
             hover:bg-gray-100 dark:hover:bg-gray-700 
             focus:outline-none"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light Mode ☀️" : "🌕 Dark Mode 🌕"}
      </button>
    </>
  );
};

export default ThemeToggle;
