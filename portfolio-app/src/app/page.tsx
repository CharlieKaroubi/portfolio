'use client';
import StarfieldBackground from "@/components/StarfieldBackground";
import TypingHoverText from "@/components/TypingHoverText";

export default function Home() {
  return (
    <StarfieldBackground>
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <section id="home" className="snap-start flex flex-col items-center justify-center min-h-screen text-center text-[8vw] sm:text-[8vw] md:text-[5vw]">
        <h1>Hello, I'm <TypingHoverText text="Charlie" className="text-blue-500"></TypingHoverText></h1>
        <h1>I'm an aspiring Backend Developer</h1>
      </section>
      <section id="about" className="snap-start flex flex-col items-center justify-center min-h-screen text-center">
        <TypingHoverText text="About"className="text-[10vw] sm:text-[8vw] md:text-[5vw] text-blue-500"></TypingHoverText>
        <p className="text-[5vw] sm:text-[4.5vw] md:text-[3vw]">
          I'm a sophomore Computer Science student at Rice University with a passion for building scalable, 
          secure, and impactful backend systems. I'm always exploring new technologies and methods to optimize 
          both my code and personal productivity. Outside of tech, I'm a big sports fan (especially France and PSG), 
          and I love staying active—whether that's at the gym, cooking up new recipes, or spending time with friends, family, and my cat, Kiki.
        </p>
      </section>
    </main>
    </StarfieldBackground>
  );
}
