import { Ubuntu } from "next/font/google";
import ThemeToggle from "./components/ThemeToggle";
import Image from "next/image";
import logo from "./favicon.ico";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="max-w-3xl w-full">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <div className="relative">
            <Image
              src={logo}
              alt="Enes ML Lab Logo"
              className="w-24 h-24"
              priority
            />
          </div>

          <div>
            <h1
              className={`${ubuntu.className} text-5xl sm:text-6xl font-bold tracking-tight mb-4`}
            >
              Hello Friend! 👋
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent mx-auto" />
          </div>

          <div className="space-y-6 max-w-2xl">
            <p
              className={`${ubuntu.className} text-xl sm:text-2xl leading-relaxed font-medium`}
            >
              My name is <span className="font-bold">Enes Demirel</span> 🇹🇷
            </p>

            <p
              className={`${ubuntu.className} text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-300`}
            >
              I&apos;m a{" "}
              <span className="font-semibold">
                Mathematics and Computer Science
              </span>{" "}
              student 👨‍💻 at{" "}
              <a
                href="https://www.depaul.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200 font-semibold underline decoration-2 underline-offset-4 transition-colors duration-200"
              >
                DePaul University
              </a>
            </p>

            <p
              className={`${ubuntu.className} text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-400`}
            >
              Welcome to my ML Lab! Here, I showcase my{" "}
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                Machine Learning Projects
              </span>{" "}
              and experiments.
            </p>
          </div>

          <div className="pt-4 flex gap-4">
            <Link href="enes-ml-lab/main-page">
              <Button>Explore Projects 👨🏻‍💻</Button>
            </Link>
            <Link href="enes-ml-lab/lab-notes">
              <Button>Lab Notes 📝</Button>
            </Link>
          </div>

          <p
            className={`${ubuntu.className} text-sm sm:text-base text-gray-500 dark:text-gray-400 pt-2`}
          >
            Want to learn more about me?{" "}
            <a
              href="https://demirelenes.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200 font-semibold underline decoration-2 underline-offset-2 transition-colors duration-200"
            >
              Visit my website
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
