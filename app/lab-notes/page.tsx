import React from "react";
import ThemeToggle from "../components/ThemeToggle";

const page = () => {
  return (
    <>
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div>
        <h1>hi!</h1>
      </div>
    </>
  );
};

export default page;
