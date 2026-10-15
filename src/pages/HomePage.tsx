import { Link } from "react-router";
import Arrow from "../components/Arrow";
import Footer from "../components/Footer";
import Header from "../components/Header";
import VoronoiShader from "../components/VoronoiShader";
import { currentProject, homepageProjects, profile } from "../data/site";
import PdfViewer from "@/components/PdfViewer";

const categoryLinks = [
  ["01", "Graphics", "/graphics", "Rendering, simulation, and procedural systems"],
  ["02", "Robotics", "/robotics", "Perception, planning, and physical interaction"],
  ["03", "Games", "/games", "Playable systems and interactive worlds"],
];

export default function HomePage() {
  return (
    <main className="bg-paper font-sans text-ink antialiased">
      <Header />

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
        <div className="absolute top-[23%] right-[-10%] size-[clamp(190px,27vw,400px)] rotate-12 rounded-[35%_65%_58%_42%/48%_38%_62%_52%] bg-coral opacity-90 md:right-[7%]" />
        <div className="absolute right-[30%] bottom-[-8%] size-[clamp(120px,18vw,260px)] -rotate-12 rounded-[65%_35%_40%_60%/42%_62%_38%_58%] bg-violet" />
        <div className="absolute top-[18%] left-[42%] hidden size-16 rotate-12 rounded-2xl bg-sky md:block" />
      </section>

      <section className="bg-[#fff0d8] px-[3.2vw] py-24 md:py-28" id="projects">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 font-mono text-[10px] tracking-[0.1em] uppercase">A few things I’ve made</p>
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

      <section className="rounded-t-[3rem] bg-ink px-[3.2vw] py-24 text-paper md:py-32" id="current">
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

      <section className="grid gap-16 px-[3.2vw] py-24 md:grid-cols-[0.8fr_1.2fr] md:py-32">
        <div>
          <p className="font-mono text-[10px] tracking-[0.1em] uppercase">A short about</p>
          <h2 className="mt-6 text-[clamp(42px,5vw,72px)] leading-none tracking-[-0.055em]">
            Curious by<br /><em className="font-serif font-normal">default.</em>
          </h2>
        </div>
        <div>
          <ul className="grid gap-3">
            {profile.aboutPoints.map((point, index) => (
              <li className="grid grid-cols-[44px_1fr] rounded-2xl bg-white px-5 py-4 text-sm leading-6 shadow-sm" key={point}>
                <span className="font-mono text-[9px] text-violet">0{index + 1}</span>
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
        <div className="grid gap-4 md:grid-cols-3">
          {categoryLinks.map(([number, label, to, copy]) => (
            <Link
              className={`group rounded-[2rem] p-7 transition-transform hover:-rotate-1 hover:scale-[1.02] ${
                number === "01" ? "bg-sky" : number === "02" ? "bg-coral" : "bg-mint"
              }`}
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

      <section className="relative isolate min-h-[620px] overflow-hidden bg-[#06123d] px-[3.2vw] py-24 text-white">
        <VoronoiShader />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/10 to-black/40" />
        <div className="relative z-10">
          <PdfViewer src="/cv-se.pdf" title="My CV" downloadName="Paulo-Khayat-CV.pdf" />
        </div>
      </section>
      <Footer blue />
    </main>
  );
}
