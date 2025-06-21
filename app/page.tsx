import { Ubuntu } from "next/font/google";
import ThemeToggle from "./components/ThemeToggle";
import Image from "next/image";
import logo from "./favicon.ico";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const lato = Ubuntu({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen px-4 text-center">
      <Image src={logo} alt="Enes ML Lab Logo" className="w-30 h-30" priority />

      <div className="w-[120%] max-w-xs h-px bg-gray-300 dark:bg-gray-600 mb-4" />

      <h1 className={`${lato.className} text-4xl mt-3`}>Hello Friend! 👋</h1>

      <h2 className={`${lato.className} text-xl mt-4`}>
        My name is Enes Demirel 🇹🇷
        <br /> I am a Math and Computer Science Student 👨‍💻{" "}
        <a
          href="https://www.depaul.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-900 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-200 transition"
        >
          @DePaul University.
        </a>
      </h2>
      <h3 className={`${lato.className} text-xl`}>
        I will showcase some of my Machine Learning Projects here.
      </h3>
      {/* <h2 className={`${lato.className} text-xl mt-4`}>STAY TUNED ... ⏳</h2> */}
      <Link href="main-page">
        <Button className="m-2">Go to main menu!</Button>
      </Link>

      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
    </div>
  );
}
