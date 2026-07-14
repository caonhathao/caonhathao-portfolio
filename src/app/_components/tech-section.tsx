import Image from "next/image";
import nodejs from "../../../public/img/nodejs.webp";
import nextjs from "../../../public/img/nextjs.webp";
import unity from "../../../public/img/unity.webp";
import reactjs from "../../../public/img/reactjs.webp";
import typescript from "../../../public/img/typescript.webp";
import tailwind from "../../../public/img/tailwind.webp";
import github from "../../../public/img/github.webp";

const content = [
  {
    level: 75,
    title: "Next.js",
    desc: "Component-based UI development with hooks, state management, and server-side rendering (SSR) optimization.",
    image: nextjs,
    alt: "nextjs",
  },
  {
    level: 75,
    title: "React",
    desc: "Component-based UI development with hooks, state management, and server-side rendering (SSR) optimization.",
    image: reactjs,
    alt: "reactjs",
  },
  {
    level: 77,
    title: "TypeScript",
    desc: "Strict-mode TypeScript across all projects for type safety and maintainable codebases.",
    image: typescript,
    alt: "typescript",
  },
  {
    level: 79,
    title: "Tailwind CSS",
    desc: "Utility-first styling with custom themes, responsive design, and animation utilities.",
    image: tailwind,
    alt: "tailwindcss",
  },
  {
    level: 55,
    title: "Node.js / NestJS",
    desc: "RESTful API development with NestJS framework for type-safe backend services.",
    image: nodejs,
    alt: "nodejs",
  },
  {
    level: 65,
    title: "Unity (C#)",
    desc: "2D platformer with player physics, animation state machines, and level design.",
    image: unity,
    alt: "unity",
  },
  {
    level: 70,
    title: "Git & GitHub",
    desc: "Version control, branching workflows, pull requests, and collaborative development.",
    image: github,
    alt: "git",
  },
];

const TechSection = () => {
  return (
    <section
      id="my-tech"
      className="p-5 w-[70%] flex flex-col justify-between items-center gap-3 my-15"
    >
      <h2 className="text-xl font-bold">MY SKILLS</h2>
      <div className="w-full grid grid-cols-3 grid-rows-3 gap-5">
        {content.map((value, index) => (
          <div
            key={`tech-card-${index}`}
            className="w-full flex flex-col justify-center items-center gap-3 border-4 border-black bg-zinc-900 text-input p-5"
          >
            <div className="h-5 w-80 flex flex-row justify-between items-center gap-3">
              <div className="w-full h-full flex flex-row justify-start items-center gap-3">
                <p>HP</p>
                <div className="border-2 border-input w-full h-full">
                  <div
                    style={{ width: `${value.level}%` }}
                    className="h-full bg-red-500"
                  ></div>
                </div>
              </div>
              <p>{value.level >= 80 ? "Proficient" : "Familiar"}</p>
            </div>
            <div className="w-full grid grid-cols-2 grid-rows-1 items-center gap-3">
              <Image
                src={value.image}
                height={200}
                alt={value.alt}
                className="border-2 border-dashed border-zinc-500 p-2"
              />
              <div>
                <h2 className="whitespace-pre-line text-lg">{value.title}</h2>
                <p className="pl-1 text-sm">{value.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default TechSection;
