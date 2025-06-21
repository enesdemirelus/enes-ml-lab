import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import ThemeToggle from "../components/ThemeToggle";

const MainPage = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center m-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
          {Array.from({ length: 9 }).map((_, index) => (
            <Card key={index} className="w-full h-40">
              <CardContent className="h-full flex items-center justify-center">
                <h1 className="text-center text-xl font-medium">
                  Coming Soon...
                </h1>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainPage;
