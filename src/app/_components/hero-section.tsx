import { GitBranch, Link, Mail, FileDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="w-[70%] my-15 flex flex-col justify-center items-center gap-6 text-center"
    >
      <h1 className="font-pixel text-2xl leading-relaxed">CAO NHAT HAO</h1>
      <p className="text-lg text-muted-foreground max-w-xl">
        Frontend Developer — Open for Quests (Internship)
      </p>
      <p className="text-base max-w-2xl leading-relaxed">
        A passionate Frontend Developer who loves crafting interactive,
        user-friendly web experiences and game interfaces. Currently seeking a
        Frontend Intern position to contribute to real-world projects and grow
        alongside a professional team.
      </p>

      <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rowa-1 gap-3 mt-2">
        <a
          href="https://github.com/caonhathao"
          target="_blank"
          rel="noopener noreferrer"
          className="retro-border px-4 py-2 font-bold hover:bg-foreground hover:text-background transition-colors active:translate-y-0.5"
        >
          <span className="flex items-center gap-2">
            <GitBranch className="h-4 w-4" /> GitHub
          </span>
        </a>
        {/* TODO: Replace # with your LinkedIn profile URL */}
        <a
          href="https://vn.linkedin.com/in/caonhathao"
          target="_blank"
          rel="noopener noreferrer"
          className="retro-border px-4 py-2 font-bold hover:bg-foreground hover:text-background transition-colors active:translate-y-0.5"
        >
          <span className="flex items-center gap-2">
            <Link className="h-4 w-4" /> LinkedIn
          </span>
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=caonhathao2372004@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="retro-border px-4 py-2 font-bold hover:bg-foreground hover:text-background transition-colors active:translate-y-0.5"
        >
          <span className="flex items-center gap-2">
            <Mail className="h-4 w-4" /> Email
          </span>
        </a>
        {/* TODO: Replace # with your resume PDF URL */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="retro-border px-4 py-2 font-bold hover:bg-foreground hover:text-background transition-colors active:translate-y-0.5"
        >
          <span className="flex items-center gap-2">
            <FileDown className="h-4 w-4" /> Resume
          </span>
        </a>
      </div>
    </section>
  );
};
export default HeroSection;
