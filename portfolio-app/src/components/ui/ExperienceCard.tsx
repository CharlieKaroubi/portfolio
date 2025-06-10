import ShinyText from "../TextAnimations/ShinyText/ShinyText";
import PixelCard from "../Components/PixelCard/PixelCard";
import { useState } from "react";
import Image from "next/image";

type ExperienceCardProps = {
  title: string;
  org: string;
  date: string;
  description: string;
};

export default function ExperienceCard({ title, org, date, description }: ExperienceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <PixelCard variant="default">
        <div className="max-w-xl p-3 flex flex-col justify-between h-full absolute">
          {/* Non-hovered content */}
          <div
            className={`transition-opacity duration-1500 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            <h3 className="text-xl font-semibold text-white text-center">{title}</h3>
            <p className="text-blue-200 font-bold text-center">{org}</p>
            <ShinyText
              text={description}
              disabled={false}
              speed={3}
              className="text-center mt-2"
            />
          </div>

          {/* Hovered content */}
          <div
            className={`transition-opacity duration-1500 flex flex-col items-center justify-center absolute inset-0 p-3 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-blue-100 font-bold text-[5vh] text-center">{org}</p>
            <Image
              src="/orgImages/clover-svgrepo-com.svg"
              width="70"
              height="70"
              alt="Org Logo"
            />
          </div>
          
          {/* Date content */}
          <div
            className={`transition-opacity duration-1500 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            <p className={`text-blue-500 text-center italic `}>
              {date}
            </p>
          </div>
        </div>
      </PixelCard>
    </div>
  );
}
