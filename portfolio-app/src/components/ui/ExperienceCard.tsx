type ExperienceCardProps = {
  title: string;
  org: string;
  date: string;
  description: string;
};

export default function ExperienceCard({ title, org, date, description }: ExperienceCardProps) {
  return (
    <div className="bg-white/5 border border-blue-800 rounded-xl p-6 transition-all hover:scale-[1.02] hover:shadow-lg max-w-xl text-left flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-semibold text-white text-center">{title}</h3>
        <p className="text-blue-200 font-bold text-center">{org}</p>
        <p className="text-white text-center mt-2">{description}</p>
      </div>
      <p className="text-blue-500 text-center italic mt-4">{date}</p>
    </div>
  );
}
  