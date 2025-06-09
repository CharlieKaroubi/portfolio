'use client';
import StarfieldBackground from "@/components/StarfieldBackground";
import SkillsIcons from "@/components/ui/skillsIcons";
import Navbar from "@/components/ui/Navbar";
import DecryptedText from "@/components/TextAnimations/DecryptedText/DecryptedText";


import { experiences } from "@/lib/experiences";
import ExperienceCard from "@/components/ui/ExperienceCard";

export default function Home() {
  return (
    <StarfieldBackground>
    <Navbar />
    <main className="h-[100vh] snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <section id="home" className="snap-start flex flex-col items-center justify-center min-h-screen text-center text-[8vw] sm:text-[8vw] md:text-[5vw]">
        <div className="mb-30">
          <h1>Hello, I'm <span className="text-blue-800 font-bold"><DecryptedText text="Charlie Karoubi"
            speed={50}
            maxIterations={15}
            characters="ABCD1234!?"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          >
          </DecryptedText></span>
          </h1>
          <h1>I'm an aspiring <span className="text-blue-800 font-bold"><DecryptedText text="Software Engineer"
            speed={50}
            maxIterations={15}
            characters="ABCD1234!?"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          >
          </DecryptedText></span></h1>
        </div>
      </section>
      <section id="about" className="snap-start flex flex-col items-center justify-center min-h-screen text-center md:mx-10 mx-5">
        <div className="mb-30">
          <span className="text-[10vw] sm:text-[8vw] md:text-[5vw] mb-10 text-blue-800 font-bold"><DecryptedText text="About"
            speed={50}
            maxIterations={15}
            characters="ABCD1234!?"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          >
          </DecryptedText></span>
          <p className="text-[4vw] sm:text-[3.5w] md:text-[2.5vw]">
            I'm a Sophomore Computer Science student at Rice University with a passion for building scalable, 
            secure, and impactful backend systems. I'm always exploring new technologies and methods to optimize 
            both my code and personal productivity. Outside of tech, I'm a big sports fan (especially France and PSG), 
            and I love staying active—whether that's at the gym, cooking up new recipes, or spending time with friends, family, and my cat, Kiki.
          </p>
        </div>
      </section>
      <section id="skills" className="snap-start flex flex-col items-center justify-center min-h-screen text-center">
        <div className="mb-10">
          <span className="text-[10vw] sm:text-[8vw] md:text-[5vw] mb-10 text-blue-800 font-bold">
            <DecryptedText 
              text="Skills"
              speed={50}
              maxIterations={15}
              characters="ABCD1234!?"
              className="revealed"
              parentClassName="all-letters"
              encryptedClassName="encrypted"
          >
          </DecryptedText>
          </span>
        <SkillsIcons></SkillsIcons>
        </div>
      </section>
      <section id="experience" className="snap-start flex flex-col items-center justify-center min-h-screen text-center">
        <div className="">
        <span className="text-[10vw] sm:text-[8vw] md:text-[5vw] text-blue-800 font-bold">
            <DecryptedText 
              text="Experience"
              speed={50}
              maxIterations={15}
              characters="ABCD1234!?"
              className="revealed"
              parentClassName="all-letters"
              encryptedClassName="encrypted"
          >
          </DecryptedText>
          </span>
          <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={i}
              title={exp.title}
              org={exp.company}
              date={exp.date}
              description={exp.description}
            />
          ))}
          </div>
        </div>
      </section>
    </main>
    </StarfieldBackground>
  );
}
