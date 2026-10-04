import type { Project } from "../data/site";
import Arrow from "./Arrow";

export default function ProjectCard({
  project,
  index,
  wide = false,
}: {
  project: Project;
  index: number;
  wide?: boolean;
}) {
  return (
    <article className={wide ? "md:col-span-2" : ""}>
      <div
        className={`group relative overflow-hidden bg-white/5 ${
          wide ? "aspect-[4/3] md:aspect-[2/1]" : "aspect-[4/5]"
        }`}
      >
        <img
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          src={project.image}
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        <span className="absolute top-5 left-5 font-mono text-[10px] text-white">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="absolute top-5 right-5 flex size-11 items-center justify-center rounded-full bg-paper text-ink">
          <Arrow />
        </span>
      </div>
      <div className="flex items-start justify-between border-b border-paper/20 py-5">
        <div>
          <h2 className="text-2xl tracking-[-0.04em]">{project.title}</h2>
          <p className="mt-1 font-mono text-[9px] tracking-[0.08em] uppercase opacity-55">
            {project.tools}
          </p>
        </div>
        <span className="font-mono text-[9px] opacity-55">{project.year}</span>
      </div>
      <p className="mt-4 max-w-lg text-xs leading-6 text-paper/60">
        {project.description}
      </p>
    </article>
  );
}
