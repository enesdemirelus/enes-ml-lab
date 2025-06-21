import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import { Button } from "@/components/ui/button";

const MainPage = () => {
  return (
    <div className="flex justify-center items-center h-screen text-6xl text-center">
      WELCOME TO MAIN PAGE!
      <Button>Hello!</Button>
      <ThemeToggle></ThemeToggle>
    </div>
  );
};

export default MainPage;
