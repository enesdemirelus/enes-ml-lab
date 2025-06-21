"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      type="button"
      onClick={toggleTheme}
      className="text-gray-900 bg-white dark:bg-gray-800 dark:text-white 
      border border-gray-300 dark:border-gray-600 
      rounded-lg text-sm px-5 py-2.5 me-2 mb-2 font-medium 
      transition-all duration-200 ease-in-out 
      transform hover:scale-105 active:scale-95 
      hover:bg-gray-100 dark:hover:bg-gray-700 
      focus:outline-none"
    >
      {theme === "light" ? "☀️ Light Mode ☀️" : "🌕 Dark Mode 🌕"}
    </Button>
  );
};

export default ThemeToggle;
