import { Link } from "react-router";
import { profile } from "../data/site";

export default function Footer({ blue = false }: { blue?: boolean }) {
  return (
    <footer
      className={`grid grid-cols-2 items-center gap-6 border-t px-[3.2vw] py-7 font-mono text-[9px] tracking-[0.08em] uppercase md:grid-cols-[1fr_auto_1fr] ${
        blue
          ? "border-white/20 bg-[#06123d] text-white"
          : "border-paper/20 bg-ink text-paper"
      }`}
    >
      <p>{profile.name} © 2025</p>
      <div className="hidden gap-6 md:flex">
        <a href="https://www.linkedin.com" rel="noreferrer" target="_blank">LinkedIn</a>
        <a href="https://github.com" rel="noreferrer" target="_blank">GitHub</a>
      </div>
      <Link className="justify-self-end" to="/">Home ↑</Link>
    </footer>
  );
}
