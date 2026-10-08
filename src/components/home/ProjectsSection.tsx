import Arrow from "../Arrow";
import Eyebrow from "../Eyebrow";
import { homepageProjects } from "../../data/site";

export default function ProjectsSection() {
  return (
    <section className="bg-[#fff0d8] px-[3.2vw] py-24 md:py-28" id="projects">
      <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <Eyebrow className="mb-4">A few things I’ve made</Eyebrow>
          <h2 className="text-[clamp(42px,5.5vw,76px)] leading-none tracking-[-0.055em]">
            Projects, experiments<br />&amp; <em className="font-serif font-normal">useful oddities.</em>
          </h2>
        </div>
        <p className="max-w-xs text-xs leading-6 opacity-60">
          Click any card to open the project and its code on GitHub.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {homepageProjects.map((project, index) => (
          <a
            className="group flex flex-col rounded-[2rem] border border-ink/10 bg-paper p-3 shadow-[0_10px_35px_rgba(36,49,66,0.08)] transition-transform hover:-translate-y-2"
            href={project.url}
            key={project.title}
            rel="noreferrer"
            target="_blank"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem] bg-white">
              <img
                className="size-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
                src={project.image}
                alt={`${project.title} project preview`}
              />
              <span className={`absolute top-3 left-3 rounded-full px-3 py-2 font-mono text-[9px] uppercase ${project.color}`}>
                {project.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-4">
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-[9px] opacity-40">0{index + 1}</span>
                <span className="flex size-10 items-center justify-center rounded-full bg-ink text-paper transition-transform group-hover:rotate-[-10deg]">
                  <Arrow />
                </span>
              </div>
              <h3 className="mt-8 text-2xl tracking-[-0.04em]">{project.title}</h3>
              <p className="mt-3 text-xs leading-6 opacity-60">{project.description}</p>
              <p className="mt-7 font-mono text-[9px] uppercase opacity-45">View on GitHub ↗</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
