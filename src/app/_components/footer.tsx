import { GitBranch, Link, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full border-t-4 border-foreground py-10 mt-15"
    >
      <div className="w-[70%] mx-auto flex flex-col items-center gap-5">
        <h2 className="font-pixel text-lg">GET IN TOUCH</h2>
        <p className="text-muted-foreground text-center max-w-md">
          {/* TODO: Replace with your own CTA message */}
          I&apos;m currently looking for frontend internship opportunities. Feel
          free to reach out — I&apos;d love to connect!
        </p>

        <div className="flex flex-row gap-5 mt-2">
          {/* TODO: Replace # with your actual URLs */}
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
        </div>

        <p className="text-xs text-muted-foreground mt-4">
          &copy; {new Date().getFullYear()} Cao Nhat Hao. Built with Next.js
          &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
