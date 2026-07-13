import Header from "./_components/header";
import MyProjectSection from "./_components/my-project-section";
import TechSection from "./_components/tech-section";
export default function Home() {
  return (
    <div className="w-screen h-full py-5 flex flex-col gap-3">
      <Header />
      <main className="w-full h-full flex flex-col justify-center items-center gap-5">
        <TechSection/>
        <MyProjectSection/>
      </main>
    </div>
  );
}
