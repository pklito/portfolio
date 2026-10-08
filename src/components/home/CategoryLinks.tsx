import { Link } from "react-router";
import Arrow from "../Arrow";
import Eyebrow from "../Eyebrow";

const categoryLinks = [
  {
    number: "01",
    label: "Graphics",
    to: "/graphics",
    copy: "Rendering, simulation, and procedural systems",
    color: "bg-sky",
  },
  {
    number: "02",
    label: "Robotics",
    to: "/robotics",
    copy: "Perception, planning, and physical interaction",
    color: "bg-coral",
  },
  {
    number: "03",
    label: "Games",
    to: "/games",
    copy: "Playable systems and interactive worlds",
    color: "bg-mint",
  },
];

export default function CategoryLinks() {
  return (
    <section className="border-t border-ink/20 px-[3.2vw] py-24">
      <Eyebrow className="mb-12">Explore projects by field</Eyebrow>
      <div className="grid gap-4 md:grid-cols-3">
        {categoryLinks.map(({ number, label, to, copy, color }) => (
          <Link
            className={`group rounded-[2rem] p-7 transition-transform hover:-rotate-1 hover:scale-[1.02] ${color}`}
            key={to}
            to={to}
          >
            <span className="font-mono text-[9px] opacity-45">{number}</span>
            <h2 className="mt-20 flex items-center justify-between text-4xl tracking-[-0.05em]">
              {label}
              <span className="transition-transform group-hover:translate-x-2"><Arrow /></span>
            </h2>
            <p className="mt-4 max-w-xs text-xs leading-6 opacity-60">{copy}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
