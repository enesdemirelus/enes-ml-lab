import { Oldenburg } from "next/font/google";

const lato = Oldenburg({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen px-4 text-center ">
        <h1 className={`${lato.className} text-4xl`}>Hello Friend! 👋</h1>
        <h2 className={`${lato.className} text-xl m-2`}>
          My name is Enes Demirel 🇹🇷, and I am a Math and Computer Science
          Student 👨‍💻.
        </h2>
        <h3 className={`${lato.className} text-xl`}>
          I will showcase some of my Machine Learning Projects here.
        </h3>
        <h2 className={`${lato.className} text-xl m-2`}>STAY TUNED ... ⏳</h2>
      </div>
    </>
  );
}
