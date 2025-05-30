'use client';
import StarfieldBackground from "../components/StarfieldBackground";

export default function Home() {
  return (
    <StarfieldBackground>
    <div className="flex flex-col items-center justify-center min-h-screen text-center text-[8vw] sm:text-[8vw] md:text-[5vw]">
      <h1>Hello, I'm <span className="text-blue-500">Charlie</span></h1>
      <h1>I'm an aspiring <span className="text-italic">Backend Developer</span></h1>
    </div>
    </StarfieldBackground>
  );
}
