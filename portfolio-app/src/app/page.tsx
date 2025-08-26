'use client';
import StarfieldBackground from "@/components/StarfieldBackground";
import SkillsIcons from "@/components/ui/skillsIcons";
import Navbar from "@/components/ui/Navbar";
import DecryptedText from "@/components/TextAnimations/DecryptedText/DecryptedText";
import InfiniteMenu from "@/components/Components/InfiniteMenu/InfiniteMenu";
import ExperienceCard from "@/components/ui/ExperienceCard";
import {projects} from "@/lib/projects";
import { experiences } from "@/lib/experiences";
import Footer from "@/components/ui/Footer";

const MAX_ITERATIONS = 10;

export default function Home() {
  return (
    <StarfieldBackground>
   {/*} <Navbar />*/}
    <main className="h-[100vh] snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <section
        id="home"
        className="snap-start flex flex-col items-center justify-center min-h-screen text-center text-[8vw] sm:text-[8vw] md:text-[5vw]"
      >
        <div className="flex flex-col justify-between h-full w-full">
          <div className="mb-20">
            <h1>
              Hello, I'm{" "}
              <span className="text-blue-800 font-bold">
                <DecryptedText
                  text="Charlie Karoubi"
                  speed={50}
                  maxIterations={MAX_ITERATIONS}
                  characters="ABCD1234!?"
                  className="revealed"
                  parentClassName="all-letters"
                  encryptedClassName="encrypted"
                ></DecryptedText>
              </span>
            </h1>
            <h1>
              I'm an aspiring{" "}
              <span className="text-blue-800 font-bold">
                <DecryptedText
                  text="Software Engineer"
                  speed={50}
                  maxIterations={MAX_ITERATIONS}
                  characters="ABCD1234!?"
                  className="revealed"
                  parentClassName="all-letters"
                  encryptedClassName="encrypted"
                ></DecryptedText>
              </span>
            </h1>
          </div>
          <div className="mt-20">
            <Footer />
          </div>
          <h1 className="text-[2.5vw] sm:text-[1.5vw] md:text-[1vw]">
            Scroll to Learn More
          </h1>
        </div>
      </section>
      <section id="about" className="snap-start flex flex-col items-center justify-center min-h-screen text-center md:mx-10 mx-5">
        <div className="mb-30">
          <span className="text-[10vw] sm:text-[8vw] md:text-[5vw] mb-10 text-blue-800 font-bold"><DecryptedText text="About"
            speed={50}
            maxIterations={MAX_ITERATIONS}
            characters="ABCD1234!?"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          >
          </DecryptedText></span>
          <p className="text-[4vw] sm:text-[3.5w] md:text-[2.5vw]">
            I'm a Junior Computer Science student at Rice University with a passion for building scalable, 
            secure, and impactful backend systems. 
            I'm always exploring new technologies and methods to optimize 
            both my code and personal productivity, most recently demonstrated through my time interning at Clover where I got to contribute to the development and optimization of 
            their existing backend microservices.
            Outside of tech, I'm a big sports fan (especially France and PSG), and I love staying active—whether that's at the gym, cooking up new recipes, or spending time with 
            friends, family, and my cat, Kiki.
          </p>
        </div>
      </section>
      <section id="skills" className="snap-start flex flex-col items-center justify-center min-h-screen text-center">
        <div className="mb-30">
          <span className="text-[10vw] sm:text-[8vw] md:text-[5vw] text-blue-800 font-bold">
            <DecryptedText 
              text="Skills"
              speed={50}
              maxIterations={MAX_ITERATIONS}
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
        <div className="mb-20">
           <div className="mb-5">
            <span className="text-[10vw] sm:text-[8vw] md:text-[5vw] text-blue-800 font-bold">
              <DecryptedText 
                text="Experience"
                speed={50}
                maxIterations={MAX_ITERATIONS}
                characters="ABCD1234!?"
                className="revealed"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
            >
            </DecryptedText>
            </span>
            </div>
          <div className="grid gap-6 xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 px-5">
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={i}
              title={exp.title}
              org={exp.company}
              date={exp.date}
              description={exp.description}
              imageUrl={exp.imageUrl}
            />
          ))}
          </div>
        </div>
      </section>
      <section id="projects" className="snap-start flex flex-col items-center justify-center min-h-screen text-center">
        <span className="text-[10vw] sm:text-[8vw] md:text-[5vw] text-blue-800 font-bold">
          <DecryptedText 
            text="Projects"
            speed={50}
            maxIterations={MAX_ITERATIONS}
            characters="ABCD1234!?"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
        >
        </DecryptedText>
        </span>
        <div className="relative h-[80vh] w-full">
          <InfiniteMenu items={projects}/>
        </div>
      </section>
    </main>
    </StarfieldBackground>
  );
}
