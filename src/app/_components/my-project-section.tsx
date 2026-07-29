"use client";
import Image from "next/image";
import orionMobile from "../../../public/img/origon/orion-mobile.png";
import orionTablet from "../../../public/img/origon/orion-tablet.png";
import myfaMobile from "../../../public/img/myfa/myfa-mobile.webp";
import myfaEditor from "../../../public/img/myfa/myfa-editor.webp";
import squirrel from "../../../public/img/squirrel/quirrel.png";
import ecommer from "../../../public/img/ecommer/ecommer.webp";
import jobconnect from "../../../public/img/jobconnect/jobconnect.webp";
import dcorp from "../../../public/img/d-corp/d-corp.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

type ProjectLink = {
  at: string;
  url: string;
};

type Project = {
  title: string;
  images: { src: typeof orionMobile; alt: string }[];
  status: number;
  summary: string[];
  meta: string;
  project: ProjectLink | null;
  deploy: ProjectLink | null;
};

const webDevQuests: Project[] = [
  {
    title: "ORION RING LANDING PAGE",
    images: [
      { src: orionMobile, alt: "orion-mobile" },
      { src: orionTablet, alt: "orion-tablet" },
    ],
    status: 100,
    meta: "Stack: Next.js, Tailwind CSS, Framer Motion, Google Sheets API | Role: Solo Project",
    summary: [
      "A highly responsive landing page for a fictional product, built with Next.js App Router.",
      "Implemented lazy-loaded animations and optimized image assets to achieve 90+ Lighthouse performance scores.",
      "Integrated Google Sheets as a serverless backend for registration form submissions, eliminating the need for an external API database.",
    ],
    project: {
      at: "GitHub",
      url: "https://github.com/caonhathao/galaxy-ring-landing-page",
    },
    deploy: {
      at: "Vercel",
      url: "https://orion-ring-landing-page.vercel.app/",
    },
  },
  {
    title: "FAMILY TREE MANAGEMENT",
    images: [
      { src: myfaEditor, alt: "myfa-editor" },
      { src: myfaMobile, alt: "myfa-mobile" },
    ],
    status: 75,
    meta: "Stack: Next.js, Dagre.js, Editor.js, PostgreSQL | Role: Solo Project — In active development",
    summary: [
      "A full-stack web application designed for creating and managing complex family trees with role-based permissions.",
      "Built an interactive, dynamic graph visualization using Dagre.js to render generational relationships clearly.",
      "Integrated Editor.js for a rich-text posting system allowing admin update or create new blogs and tutors.",
      "Authentication with password or by google account."
    ],
    project: {
      at: "GitHub",
      url: "https://github.com/caonhathao/family-tree-management",
    },
    deploy: {
      at: "Vercel",
      url: "https://family-tree-management.vercel.app/",
    },
  },
  {
    title: "E-COMMERCE PLATFORM",
    images: [{ src: ecommer, alt: "e-commerce platform desktop mockup" }],
    status: 90,
    meta: "Stack: Next.js, React, Node.js | Role: Frontend Developer | Team Project",
    summary: [
      "Contributed to the development of the main homepage, product detail pages (UI) and APIs",
      "Contributed to the development of the administrative dashboard modules.",
    ],
    project: {
      at: "GitHub",
      url: "https://github.com/tamthong1115/ecommerce_nexjts",
    },
    deploy: {
      at: "Vercel",
      url: "https://ecommerce-nexjts.vercel.app/",
    },
  },
];

const gameDevQuests: Project[] = [
  {
    title: "SQUIRREL ADVENTURE",
    images: [{ src: squirrel, alt: "squirrel-adventure" }],
    status: 65,
    meta: "Stack: Unity, C#, Aseprite | Role: Solo Project",
    summary: [
      "A passion project built to master OOP (Object-Oriented Programming) and state management in game development.",
      "Designed custom player controller physics, obstacle avoidance, level progression, and sprite animation state machines in C#.",
    ],
    project: null,
    deploy: {
      at: "itch.io",
      url: "https://caonhathao.itch.io/the-squirrel-adventure",
    },
  },
  {
    title: "D CORP: DEMON SPLAYER",
    images: [{ src: dcorp, alt: "d-corp-demon-slayer" }],
    status: 10,
    meta: "Stack: Unity, C#, Aseprite | Role: Solo Project",
    summary: [
      "A passion project built to master OOP (Object-Oriented Programming) and state management in game development.",
      "Designed custom player controller physics, obstacle avoidance, level progression, and sprite animation state machines in C#.",
    ],
    project: null,
    deploy: {
      at: "itch.io",
      url: "https://caonhathao.itch.io/d-corp-demon-layer-demo-gameplay",
    },
  },
];

const aiBackendQuests: Project[] = [
  {
    title: "JOBCONNECT RECRUITMENT SYSTEM",
    images: [{ src: jobconnect, alt: "jobconnect-recruitment" }],
    status: 100,
    meta: "Stack: NodeJS, Vector Database, PostgreSQL, Google AI Studio | Role: Backend & AI Engineer | Team Project",
    summary: [
      "Stepped outside my primary frontend role to architect and build the AI-powered document processing pipeline.",
      "Successfully implemented a Retrieval-Augmented Generation (RAG) system for smart resume screening and automated candidate scoring.",
    ],
    project: {
      at: "GitHub",
      url: "https://github.com/caonhathao/JobConnect-recruitment-system-be",
    },
    deploy: null,
  },
];

const categories = [
  { label: "WEB DEVELOPMENT", quests: webDevQuests },
  { label: "GAME DEVELOPMENT", quests: gameDevQuests },
  { label: "AI & BACKEND", quests: aiBackendQuests },
];

let globalQuestIndex = 0;

const MyProjectSection = () => {
  return (
    <div
      id="my-project"
      className="w-[70%] flex flex-col justify-center items-center gap-8 my-5"
    >
      <h2 className="text-xl font-bold">COMPLETED QUESTS</h2>

      {categories.map((category) => (
        <div key={category.label} className="w-full flex flex-col gap-5">
          <h3 className="font-pixel text-sm text-center text-muted-foreground tracking-widest">
            — {category.label} —
          </h3>

          {category.quests.map((item, index) => {
            const questNum = ++globalQuestIndex;
            const isReverse = questNum % 2 === 0;

            return (
              <section
                key={questNum}
                className={`rounded-sm border-2 border-dashed w-full flex items-center gap-5 p-5 ${
                  isReverse
                    ? "flex-row-reverse justify-start"
                    : "flex-row justify-start"
                }`}
              >
                <div className="w-[50%] flex flex-row justify-center gap-3 border-4 border-black dark:border-zinc-700 bg-black p-3 rounded-none">
                  {item.images.map((img, imgIdx) => (
                    <Image
                      key={imgIdx}
                      src={img.src}
                      height={450}
                      alt={img.alt}
                      className="border-2"
                    />
                  ))}
                </div>

                <div className="w-[50%] h-full flex flex-col justify-start items-start gap-3">
                  <h2 className="font-bold whitespace-pre-line">
                    {`QUEST #${index < 10 ? "0" : ""}${index + 1}`}
                  </h2>
                  <h2 className="font-bold whitespace-pre-line">
                    {item.title}
                  </h2>
                  <div className="h-5 w-[80%] flex flex-row justify-between items-center gap-3">
                    <div className="w-full h-full flex flex-row justify-start items-center gap-3">
                      <p className="whitespace-nowrap">STATUS</p>
                      <div className="border-2 border-input w-full h-full">
                        <div
                          style={{ width: `${item.status}%` }}
                          className="h-full bg-green-500"
                        ></div>
                      </div>
                    </div>
                    <p>{item.status}%</p>
                  </div>
                  <div>
                    <p className="font-medium">MISSION BRIEFING:</p>
                    <ul className="px-5">
                      {item.summary.map((text, textIdx) => (
                        <li
                          key={textIdx}
                          className="flex flex-row justify-start items-center gap-3"
                        >
                          <MdOutlineKeyboardArrowRight />
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-muted-foreground italic">
                    {item.meta}
                  </p>

                  <div>
                    <p>REWARDS (LINKS):</p>
                    <div className="flex flex-row gap-3">
                      {item.project && (
                        <a
                          href={item.project.url}
                          className="text-blue-600 hover:underline border-2 border-current px-3 py-1 font-bold hover:bg-black hover:text-white dark:hover:bg-emerald-400 dark:hover:text-black transition-all active:translate-y-0.5"
                        >
                          {item.project.at}
                        </a>
                      )}
                      {item.deploy && (
                        <a
                          href={item.deploy.url}
                          className="text-blue-600 hover:underline border-2 border-current px-3 py-1 font-bold hover:bg-black hover:text-white dark:hover:bg-emerald-400 dark:hover:text-black transition-all active:translate-y-0.5"
                        >
                          {item.deploy.at}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default MyProjectSection;
