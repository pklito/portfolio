import Eyebrow from "../Eyebrow";
import { currentProject } from "../../data/site";

export default function CurrentProject() {
  return (
    <section className="rounded-t-[3rem] bg-ink px-[3.2vw] py-24 text-paper md:py-32" id="current">
      <div className="mb-12 flex items-end justify-between border-b border-paper/20 pb-8">
        <div>
          <Eyebrow className="mb-4 text-acid">
            Current project / Currently working on
          </Eyebrow>
          <p className="font-mono text-[9px] tracking-[0.08em] uppercase opacity-50">
            {currentProject.status}
          </p>
        </div>
        <span className="hidden size-3 animate-pulse rounded-full bg-acid sm:block" />
      </div>

      <div className="grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:gap-16">
        <div className="aspect-[4/3] overflow-hidden rounded-[2rem]">
          <img className="size-full object-cover" src={currentProject.image} alt="" />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p className="font-mono text-[9px] tracking-[0.08em] uppercase opacity-50">
              {currentProject.category}
            </p>
            <h2 className="mt-5 text-[clamp(40px,5vw,72px)] leading-[0.95] tracking-[-0.055em]">
              {currentProject.title}
            </h2>
            <p className="mt-8 max-w-md text-sm leading-7 text-paper/65">
              {currentProject.description}
            </p>
          </div>
          <p className="mt-16 border-t border-paper/20 pt-5 font-mono text-[10px] text-acid uppercase">
            {currentProject.nextMilestone}
          </p>
        </div>
      </div>
    </section>
  );
}
