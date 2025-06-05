'use client';
import StarfieldBackground from "@/components/StarfieldBackground";
import StaggeredHover from "@/components/StaggeredHover";
import SkillsIcons from "@/components/ui/skillsIcons";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <StarfieldBackground>
    <Navbar />
    <main className="h-[100vh] snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <section id="home" className="snap-start flex flex-col items-center justify-center min-h-screen text-center text-[8vw] sm:text-[8vw] md:text-[5vw]">
        <div className="mb-30">
          <h1>Hello, I'm <StaggeredHover className="text-black">Charlie Karoubi</StaggeredHover></h1>
          <h1>I'm an aspiring <StaggeredHover className="text-black">Software Engineer</StaggeredHover></h1>
        </div>
      </section>
      <section id="about" className="snap-start flex flex-col items-center justify-center min-h-screen text-center md:mx-10 mx-5">
        <div className="mb-30">
          <StaggeredHover className="text-[10vw] sm:text-[8vw] md:text-[5vw] mb-5">About</StaggeredHover>
          <p className="text-[4vw] sm:text-[3.5w] md:text-[2.5vw]">
            I'm a Sophomore Computer Science student at Rice University with a passion for building scalable, 
            secure, and impactful backend systems. I'm always exploring new technologies and methods to optimize 
            both my code and personal productivity. Outside of tech, I'm a big sports fan (especially France and PSG), 
            and I love staying active—whether that's at the gym, cooking up new recipes, or spending time with friends, family, and my cat, Kiki.
          </p>
        </div>
      </section>
      <section id="skills" className="snap-start flex flex-col items-center justify-center min-h-screen text-center">
        <div className="mb-25">
        <StaggeredHover className="text-[10vw] sm:text-[8vw] md:text-[5vw] mb-10">Skills</StaggeredHover>
        <SkillsIcons></SkillsIcons>
        </div>
      </section>
      <section id="experience" className="snap-start flex flex-col items-center justify-center min-h-screen text-center">
        <StaggeredHover className="text-[10vw] sm:text-[8vw] md:text-[5vw] ">Experience</StaggeredHover>
        <p className="text-[5vw] sm:text-[4.5vw] md:text-[3vw]">
          
        </p>
      </section>
    </main>
    </StarfieldBackground>
  );
}
