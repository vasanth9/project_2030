import Image from "next/image";
import CountDownTimer from "./components/CountDownTimer";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-2 mt-8">
      <h1 className="text-4xl">Project 2030</h1>
      <h2 className="text-xl">Journey to earn <i>Million dollars</i> by 2030.</h2>
      <CountDownTimer />
    </div>
  );
}
