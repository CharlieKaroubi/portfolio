import ShinyText from "../TextAnimations/ShinyText/ShinyText";
import PixelCard from "../Components/PixelCard/PixelCard";
import { useState } from "react";

type ExperienceCardProps = {
  title: string;
  org: string;
  date: string;
  description: string;
};

export default function ExperienceCard({ title, org, date, description }: ExperienceCardProps) {
  
  return (
    <PixelCard variant="default">
    <div className="max-w-xl p-3 flex flex-col justify-between h-full absolute">
      
        <div>
          <h3 className="text-xl font-semibold text-white text-center">{title}</h3>
          <p className="text-blue-200 font-bold text-center">{org}</p>
          <ShinyText text={description} disabled={false} speed={3} className="text-center mt-2" />
        </div>
        <p className="text-blue-500 text-center italic mt-4">{date}</p>    
    </div>
    </PixelCard>
  );
}
