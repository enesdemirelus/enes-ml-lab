import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import ThemeToggle from "../components/ThemeToggle";

const cardItems = [
  {
    name: "Movie Recommender",
    url: "/ml-projects/movie-recommender",
  },
  { name: "Project 2", url: null },
  { name: "Project 3", url: null },
  { name: "Project 4", url: null },
  { name: "Project 5", url: null },
  { name: "Project 6", url: null },
  { name: "Project 7", url: null },
  { name: "Project 8", url: null },
  { name: "Project 9", url: null },
];

const MainPage = () => {
  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl px-4 -translate-y-4">
          {cardItems.map((item, index) => {
            const cardContent = (
              <Card
                key={index}
                className="w-full h-40 transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <CardContent className="h-full flex items-center justify-center">
                  <h1 className="text-center text-xl font-medium">
                    {item.name}
                  </h1>
                </CardContent>
              </Card>
            );

            return item.url ? (
              <Link key={index} href={item.url}>
                {cardContent}
              </Link>
            ) : (
              <div key={index}>{cardContent}</div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MainPage;
