import Header from "./_components/header";
import HeroSection from "./_components/hero-section";
import TechSection from "./_components/tech-section";
import MyProjectSection from "./_components/my-project-section";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <div className="w-screen h-full py-5 flex flex-col gap-3">
      <Header />
      <main className="w-full h-full flex flex-col justify-center items-center gap-5">
        <HeroSection />
        <TechSection />
        <MyProjectSection />
      </main>
      <Footer />
    </div>
  );
}
