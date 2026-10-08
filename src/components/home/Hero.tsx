import Arrow from "../Arrow";
import { profile } from "../../data/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-[720px] flex-col overflow-hidden px-[3.2vw] py-12 md:min-h-[800px] md:py-16">
      <div className="relative z-10 flex justify-between font-mono text-[10px] tracking-[0.08em] uppercase">
        <span className="rounded-full bg-mint px-4 py-2 normal-case tracking-normal">
          Hello there, welcome in!
        </span>
        <span className="hidden sm:block">Portfolio · 2025</span>
      </div>

      <h1 className="relative z-10 my-auto max-w-[1250px] text-[clamp(58px,10vw,150px)] leading-[0.88] font-medium tracking-[-0.07em]">
        Hi, I’m Paulo.
        <br />
        I make <em className="font-serif font-normal text-violet">curious</em> things.
      </h1>

      <div className="relative z-10 flex items-end justify-between">
        <p className="max-w-[520px] text-sm leading-7">{profile.intro}</p>
        <a
          className="flex size-16 rotate-[-6deg] items-center justify-center rounded-[1.4rem] bg-acid shadow-[4px_4px_0_#243142] transition-transform hover:rotate-0 hover:scale-105"
          href="#projects"
          aria-label="See featured projects"
        >
          <Arrow down />
        </a>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-[23%] right-[-10%] size-[clamp(190px,27vw,400px)] rotate-12 rounded-[35%_65%_58%_42%/48%_38%_62%_52%] bg-coral opacity-90 md:right-[7%]" />
      <div className="absolute right-[30%] bottom-[-8%] size-[clamp(120px,18vw,260px)] -rotate-12 rounded-[65%_35%_40%_60%/42%_62%_38%_58%] bg-violet" />
      <div className="absolute top-[18%] left-[42%] hidden size-16 rotate-12 rounded-2xl bg-sky md:block" />
    </section>
  );
}
