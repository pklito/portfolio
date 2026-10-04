import { Link } from "react-router";
import Arrow from "../components/Arrow";
import Footer from "../components/Footer";
import Header from "../components/Header";
import VoronoiShader from "../components/VoronoiShader";
import { currentProject, profile } from "../data/site";

const categoryLinks = [
  ["01", "Graphics", "/graphics", "Rendering, simulation, and procedural systems"],
  ["02", "Robotics", "/robotics", "Perception, planning, and physical interaction"],
  ["03", "Games", "/games", "Playable systems and interactive worlds"],
];

export default function HomePage() {
  return (
    <main className="bg-paper font-sans text-ink antialiased">
      <Header />

      <section className="relative flex min-h-[760px] flex-col overflow-hidden px-[3.2vw] py-12 md:min-h-[820px] md:py-16">
        <div className="relative z-10 flex justify-between font-mono text-[10px] tracking-[0.08em] uppercase">
          <span>{profile.role}</span>
          <span className="hidden sm:block">Portfolio · 2025</span>
        </div>
        <h1 className="relative z-10 my-auto max-w-[1250px] text-[clamp(58px,10.5vw,160px)] leading-[0.84] font-medium tracking-[-0.075em]">
          Hi, I’m Paulo.
          <br />
          I make things <em className="font-serif font-normal">move.</em>
        </h1>
        <div className="relative z-10 flex items-end justify-between">
          <p className="max-w-[520px] text-sm leading-7">{profile.intro}</p>
          <a
            className="flex size-16 items-center justify-center rounded-full border border-ink transition-colors hover:bg-ink hover:text-paper"
            href="#current"
            aria-label="See current project"
          >
            <Arrow down />
          </a>
        </div>
        <div className="absolute top-[20%] right-[-8%] size-[clamp(190px,28vw,430px)] rounded-full bg-[radial-gradient(circle_at_35%_30%,#efffbb_0,#d9ff43_32%,#93a719_70%,#536007_100%)] shadow-[inset_-30px_-40px_70px_rgba(20,26,0,0.28)] md:right-[8%]" />
        <div className="absolute right-[32%] bottom-[-9%] size-[clamp(120px,18vw,270px)] rounded-full bg-[radial-gradient(circle_at_33%_28%,#d0c9ff,#7b61ff_45%,#332064_100%)]" />
      </section>

      <section className="bg-ink px-[3.2vw] py-24 text-paper md:py-32" id="current">
        <div className="mb-12 flex items-end justify-between border-b border-paper/20 pb-8">
          <div>
            <p className="mb-4 font-mono text-[10px] tracking-[0.1em] text-acid uppercase">
              Current project / Currently working on
            </p>
            <p className="font-mono text-[9px] tracking-[0.08em] uppercase opacity-50">
              {currentProject.status}
            </p>
          </div>
          <span className="hidden size-3 animate-pulse rounded-full bg-acid sm:block" />
        </div>
        <div className="grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:gap-16">
          <div className="aspect-[4/3] overflow-hidden">
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

      <section className="grid gap-16 px-[3.2vw] py-24 md:grid-cols-[0.8fr_1.2fr] md:py-32">
        <div>
          <p className="font-mono text-[10px] tracking-[0.1em] uppercase">A short about</p>
          <h2 className="mt-6 text-[clamp(42px,5vw,72px)] leading-none tracking-[-0.055em]">
            Curious by<br /><em className="font-serif font-normal">default.</em>
          </h2>
        </div>
        <div>
          <ul className="divide-y divide-ink/20 border-t border-ink/20">
            {profile.aboutPoints.map((point, index) => (
              <li className="grid grid-cols-[44px_1fr] py-5 text-sm leading-6" key={point}>
                <span className="font-mono text-[9px] opacity-45">0{index + 1}</span>
                {point}
              </li>
            ))}
          </ul>
          <Link
            className="mt-9 inline-flex items-center gap-12 border-b border-ink pb-3 font-mono text-[10px] tracking-[0.08em] uppercase"
            to="/about"
          >
            Read the detailed about <Arrow />
          </Link>
        </div>
      </section>

      <section className="border-t border-ink/20 px-[3.2vw] py-24">
        <p className="mb-12 font-mono text-[10px] tracking-[0.1em] uppercase">Explore projects by field</p>
        <div className="grid border-t border-ink/20 md:grid-cols-3">
          {categoryLinks.map(([number, label, to, copy]) => (
            <Link
              className="group border-b border-ink/20 py-8 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
              key={to}
              to={to}
            >
              <span className="font-mono text-[9px] opacity-45">{number}</span>
              <h2 className="mt-16 flex items-center justify-between text-4xl tracking-[-0.05em]">
                {label}
                <span className="transition-transform group-hover:translate-x-2"><Arrow /></span>
              </h2>
              <p className="mt-4 max-w-xs text-xs leading-6 opacity-60">{copy}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative isolate min-h-[620px] overflow-hidden bg-[#06123d] px-[3.2vw] py-24 text-white">
        <VoronoiShader />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/10 to-black/40" />
        <div className="relative z-10">
          <p className="font-mono text-[10px] tracking-[0.1em] uppercase">Let’s collaborate / WebGL experiment</p>
          <h2 className="mt-7 max-w-[1100px] text-[clamp(52px,7.5vw,112px)] leading-[0.92] tracking-[-0.06em]">
            Have a problem to <em className="font-serif font-normal">visualize?</em>
          </h2>
          <a
            className="group mt-28 flex items-center justify-between border-b border-white/70 pb-5 text-[clamp(20px,2.2vw,32px)]"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
            <span className="transition-transform group-hover:translate-x-2"><Arrow /></span>
          </a>
        </div>
      </section>
      <Footer blue />
    </main>
  );
}
