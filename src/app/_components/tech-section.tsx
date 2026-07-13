import Image from "next/image";
import nodejs from "../../../public/img/nodejs.png";
import nextjs from "../../../public/img/nextjs.jpg";
import unity from "../../../public/img/unity.jpg";
import reactjs from "../../../public/img/reactjs.webp";
const TechSection = () => {
  return (
    <section
      id="my-tech"
      className="shadow-lg rounded-lg p-5 w-[70%] flex flex-col justify-between items-center gap-3 my-5"
    >
      <h2 className="text-xl font-bold">MY TECHNOLOGIES</h2>
      {/* group of languages,frameworks and programs */}
      <div className="w-full grid grid-cols-2 grid-rows-2 gap-5">
        <div className="w-full flex flex-row justify-start items-center gap-3">
          <Image src={nextjs} height={200} alt="nextjs" />
          <div>
            <p className="whitespace-pre-line text-lg">
              {"NextJS Framework \n Building a serverless project!"}
            </p>
          </div>
        </div>
        <div className="w-full flex flex-row justify-start items-center gap-3">
          <Image src={nodejs} height={200} alt="nodejs" />
          <div>
            <p className="whitespace-pre-line text-lg">
              {"NodeJS \n Building server!"}
            </p>
          </div>
        </div>
        <div className="w-full flex flex-row justify-start items-center gap-3">
          <Image src={unity} height={200} alt="unity" />
          <div>
            <p className="whitespace-pre-line text-lg">
              {"Unity\n Building game project!"}
            </p>
          </div>
        </div>
        <div className="w-full flex flex-row justify-start items-center gap-3">
          <Image src={reactjs} height={200} alt="reactjs" />
          <div>
            <p className="whitespace-pre-line text-lg">
              {"ReactJS Framework \n Building a front-end website!"}
            </p>
          </div>
        </div>
      </div>
      {/* introduce my skills */}
      <div className="w-[60%]">{/* nextjs */}</div>
    </section>
  );
};
export default TechSection;
