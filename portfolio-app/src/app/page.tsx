'use client';
import StarfieldBackground from "@/components/StarfieldBackground";
import StaggeredHover from "@/components/StaggeredHover";
import SkillsIcons from "@/components/ui/skillsIcons";

export default function Home() {
  return (
    <StarfieldBackground>
    <nav className="sticky top-0 bg-black p-2 z-50">
      <ul className="flex justify-center space-x-12 text-white font-semibold text-[2vw] sm:text-[2.5vw] md:text-[1.3vw]">
        <li>
          <a href="#home" className="hover:text-blue-500 transition-colors duration-300">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-500 transition-colors duration-300">About</a>
        </li>
        <li>
          <a href="#skills" className="hover:text-blue-500 transition-colors duration-300">Skills</a>
        </li>
        <li>
          <a href="#experience" className="hover:text-blue-500 transition-colors duration-300">Experience</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-500 transition-colors duration-300">Projects</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-500 transition-colors duration-300">Contact</a>
        </li>
      </ul>
    </nav>
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <section id="home" className="snap-start flex flex-col items-center justify-center min-h-screen text-center text-[8vw] sm:text-[8vw] md:text-[5vw]">
        <h1>Hello, I'm <StaggeredHover className="text-blue-500 font-extrabold">Charlie Karoubi</StaggeredHover></h1>
        <h1>I'm an aspiring <StaggeredHover className="font-extrabold text-blue-500">Software Engineer</StaggeredHover></h1>
      </section>
      <section id="about" className="snap-start flex flex-col items-center justify-center min-h-screen text-center">
        <StaggeredHover className="text-[10vw] sm:text-[8vw] md:text-[5vw] text-blue-500 font-extrabold">About</StaggeredHover>
        <p className="text-[5vw] sm:text-[4.5vw] md:text-[3vw]">
          I'm a Sophomore Computer Science student at Rice University with a passion for building scalable, 
          secure, and impactful backend systems. I'm always exploring new technologies and methods to optimize 
          both my code and personal productivity. Outside of tech, I'm a big sports fan (especially France and PSG), 
          and I love staying active—whether that's at the gym, cooking up new recipes, or spending time with friends, family, and my cat, Kiki.
        </p>
      </section>
      <section id="skills" className="snap-start flex flex-col items-center justify-center min-h-screen text-center">
        <StaggeredHover className="text-[10vw] sm:text-[8vw] md:text-[5vw] text-blue-500 font-extrabold">Skills</StaggeredHover>
        <SkillsIcons></SkillsIcons>
        
          
      </section>
      <section id="experience" className="snap-start flex flex-col items-center justify-center min-h-screen text-center">
        <StaggeredHover className="text-[10vw] sm:text-[8vw] md:text-[5vw] text-blue-500 font-extrabold">Experience</StaggeredHover>
        <p className="text-[5vw] sm:text-[4.5vw] md:text-[3vw]">
          
        </p>
      </section>
    </main>
    </StarfieldBackground>
  );
}
