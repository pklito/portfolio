import { createBrowserRouter, Link } from "react-router";
import VoronoiShader from "../components/VoronoiShader";

const projects = [
  {
    number: "01",
    title: "Soft Bodies",
    type: "Simulation · Research",
    year: "2025",
    description:
      "A real-time deformation system exploring playful, tactile interactions between soft objects.",
    image:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1600&q=85",
    wide: true,
  },
  {
    number: "02",
    title: "Chromatic Flow",
    type: "Fluid Dynamics · GLSL",
    year: "2024",
    description:
      "GPU-driven fluid experiments visualizing turbulence as an evolving field of color.",
    image:
      "https://images.unsplash.com/photo-1620421680010-0766ff230392?auto=format&fit=crop&w=1200&q=85",
    offset: true,
  },
  {
    number: "03",
    title: "Synthetic Matter",
    type: "Procedural Systems · Houdini",
    year: "2024",
    description:
      "A study in procedural form, material behavior, and controlled computational chance.",
    image:
      "https://images.unsplash.com/photo-1671519821564-ced7e41ee7ae?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "04",
    title: "Light / Space",
    type: "Installation · Creative Code",
    year: "2023",
    description:
      "An immersive light environment that translates movement into spatial color compositions.",
    image:
      "https://images.unsplash.com/photo-1632520997139-08f352d9ec53?auto=format&fit=crop&w=1600&q=85",
    wide: true,
  },
];

function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`size-5 fill-none stroke-current stroke-[1.4] ${down ? "rotate-90" : ""}`}
      viewBox="0 0 24 24"
    >
      <path
        className="stroke-linecap-round stroke-linejoin-round"
        d="M5 12h14M14 5l7 7-7 7"
      />
    </svg>
  );
}

function Header({ dark = false }: { dark?: boolean }) {
  const navClass =
    "relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform hover:after:origin-left hover:after:scale-x-100";

  return (
    <header
      className={`absolute inset-x-0 top-0 z-20 grid grid-cols-2 items-center border-b px-[3.2vw] py-5 font-mono text-[11px] tracking-[0.05em] uppercase md:grid-cols-[1fr_auto_1fr] ${
        dark ? "border-white/20 text-paper" : "border-ink/20 text-ink"
      }`}
    >
      <a
        className="font-sans text-[15px] font-semibold tracking-[-0.04em]"
        href="/#top"
        aria-label="Back to home"
      >
        CG<span className="text-violet">/25</span>
      </a>
      <nav className="hidden gap-8 md:flex" aria-label="Main navigation">
        <a className={navClass} href="/#work">Work</a>
        <a className={navClass} href="/#about">About</a>
        <a className={navClass} href="/#contact">Contact</a>
        <Link className={navClass} to="/process">Process</Link>
      </nav>
      <div className="flex items-center justify-self-end gap-2">
        <span className="size-[7px] animate-pulse rounded-full bg-[#70a52b]" />
        Open to opportunities
      </div>
    </header>
  );
}

function Home() {
  return (
    <main className="bg-paper font-sans text-ink antialiased">
      <Header />

      <section
        className="relative flex h-[min(900px,100svh)] min-h-[670px] flex-col overflow-hidden px-[3.2vw] pt-[105px] pb-10 md:min-h-[700px] md:pt-[120px]"
        id="top"
      >
        <div className="relative z-10 flex justify-between font-mono text-[11px] tracking-[0.08em] uppercase">
          <span>Computer Graphics</span>
          <span className="hidden md:block">MSc Portfolio · 2025</span>
        </div>
        <h1 className="relative z-10 my-auto max-w-[1200px] text-[clamp(50px,14vw,78px)] leading-[0.92] font-medium tracking-[-0.075em] md:text-[clamp(56px,8.6vw,140px)] md:leading-[0.88]">
          I explore the space
          <br />
          between <em className="font-serif font-normal">code</em> and image.
        </h1>
        <div className="relative z-10 flex items-end justify-between">
          <p className="m-0 max-w-[70%] text-sm leading-[1.65] md:max-w-[450px]">
            Master’s student working across real-time rendering, simulation,
            generative systems, and interactive experiences.
          </p>
          <a
            className="flex size-[58px] items-center justify-center rounded-full border border-ink transition-colors hover:bg-ink hover:text-paper md:size-[72px]"
            href="#work"
            aria-label="Explore selected work"
          >
            <Arrow down />
          </a>
        </div>
        <div className="absolute top-[22%] -right-[10%] size-[clamp(170px,23vw,350px)] rounded-full bg-[radial-gradient(circle_at_35%_30%,#efffbb_0,#d9ff43_32%,#93a719_70%,#536007_100%)] shadow-[inset_-24px_-34px_60px_rgba(20,26,0,0.25)] md:top-1/4 md:right-[9%]" />
        <div className="absolute bottom-[10%] left-[58%] size-[clamp(120px,17vw,260px)] rounded-full bg-[radial-gradient(circle_at_33%_28%,#d0c9ff,#7b61ff_45%,#332064_100%)] md:-bottom-[11%] md:left-[40%]" />
      </section>

      <section className="bg-ink px-[3.2vw] py-24 text-paper md:pt-28 md:pb-36" id="work">
        <div className="mb-16 flex flex-col items-start justify-between gap-7 border-b border-paper/25 pb-10 md:flex-row md:items-end">
          <div>
            <p className="mb-6 font-mono text-[10px] tracking-[0.1em] uppercase">Selected work</p>
            <h2 className="max-w-[680px] text-[clamp(40px,5vw,76px)] leading-[0.98] font-normal tracking-[-0.055em]">
              Experiments in motion, matter &amp; light.
            </h2>
          </div>
          <p className="font-mono text-[10px] tracking-[0.1em] uppercase opacity-65">04 projects / 2023—25</p>
        </div>

        <div className="grid gap-x-6 gap-y-20 md:grid-cols-2 md:gap-y-24">
          {projects.map((project) => (
            <article
              className={`${project.wide ? "md:col-span-2" : ""} ${project.offset ? "md:mt-28" : ""}`}
              key={project.title}
            >
              <a className="group block" href="#contact">
                <div className={`relative overflow-hidden bg-white/5 ${project.wide ? "aspect-[4/5] md:aspect-[2/1]" : "aspect-[4/5]"}`}>
                  <img
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                    src={project.image}
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/15" />
                  <span className="absolute top-5 left-5 z-10 font-mono text-[10px] tracking-[0.1em]">{project.number}</span>
                  <span className="absolute top-5 right-5 z-10 flex size-12 scale-0 items-center justify-center rounded-full bg-paper text-ink transition-transform group-hover:scale-100">
                    <Arrow />
                  </span>
                </div>
                <div className="flex items-start justify-between border-b border-paper/25 py-5">
                  <div>
                    <h3 className="mb-1.5 text-[26px] font-medium tracking-[-0.04em]">{project.title}</h3>
                    <p className="font-mono text-[9px] tracking-[0.08em] uppercase opacity-55">{project.type}</p>
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.08em] opacity-55">{project.year}</span>
                </div>
                <p className="mt-4 max-w-[480px] text-xs leading-relaxed opacity-65">{project.description}</p>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-x-[5vw] gap-y-20 px-[3.2vw] py-24 md:grid-cols-[1.15fr_0.85fr] md:py-32" id="about">
        <div>
          <p className="mb-9 font-mono text-[10px] tracking-[0.1em] uppercase">About / Practice</p>
          <h2 className="text-[clamp(40px,5vw,76px)] leading-[0.98] tracking-[-0.055em]">
            Technical curiosity,<br />
            <em className="font-serif font-normal">visual instinct.</em>
          </h2>
        </div>
        <div className="md:pt-14">
          <p className="text-[23px] leading-[1.45] tracking-[-0.025em]">
            I’m a computer graphics master’s student interested in how algorithms can create images that feel alive.
          </p>
          <p className="mt-5 max-w-[540px] text-sm leading-7 opacity-70">
            My practice moves between engineering and visual research—from writing shaders and simulation tools to crafting real-time experiences.
          </p>
        </div>
        <div className="grid gap-6 border-t border-ink/20 pt-8 md:col-span-2 md:grid-cols-2">
          {[
            ["01 / Focus", ["Real-time rendering", "Physical simulation", "Generative systems", "Creative tooling"]],
            ["02 / Toolkit", ["C++ / Python", "OpenGL / GLSL", "Unity / Unreal", "Houdini / Blender"]],
          ].map(([label, items]) => (
            <div className="grid grid-cols-2 border-b border-ink/20 py-6 md:border-0 md:py-0" key={label as string}>
              <span className="font-mono text-[9px] tracking-[0.08em] uppercase">{label as string}</span>
              <ul className="text-sm leading-7">
                {(items as string[]).map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section
        className="relative isolate min-h-[650px] overflow-hidden bg-[#06123d] px-[3.2vw] pt-24 pb-20 text-white md:pt-28"
        id="contact"
      >
        <VoronoiShader />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/10 to-black/35" />
        <div className="relative z-10">
          <p className="mb-6 font-mono text-[10px] tracking-[0.1em] uppercase">Let’s collaborate / WebGL experiment 01</p>
          <h2 className="max-w-[1200px] text-[clamp(52px,7.5vw,116px)] leading-[0.98] tracking-[-0.055em]">
            Have an interesting<br />
            problem to <em className="font-serif font-normal">visualize?</em>
          </h2>
          <a
            className="group mt-28 flex items-center justify-between border-b border-white/70 pb-5 text-[clamp(20px,2.2vw,32px)]"
            href="mailto:hello@example.com"
          >
            hello@example.com
            <span className="transition-transform group-hover:translate-x-2"><Arrow /></span>
          </a>
        </div>
      </section>

      <footer className="grid grid-cols-2 items-center gap-6 bg-[#06123d] px-[3.2vw] py-7 font-mono text-[9px] tracking-[0.08em] text-white uppercase md:grid-cols-[1fr_auto_1fr]">
        <p>YOUR NAME © 2025</p>
        <div className="hidden gap-6 md:flex">
          <a href="#top">LinkedIn</a><a href="#top">GitHub</a><a href="#top">Vimeo</a>
        </div>
        <a className="justify-self-end" href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}

function Process() {
  return (
    <main className="min-h-screen bg-ink font-sans text-paper antialiased">
      <Header dark />
      <section className="px-[3.2vw] pt-36 pb-20 md:pt-48">
        <p className="mb-8 font-mono text-[10px] tracking-[0.1em] uppercase text-acid">Separate route / Process</p>
        <h1 className="max-w-[1100px] text-[clamp(60px,10vw,150px)] leading-[0.84] tracking-[-0.07em]">
          How the work<br />
          <em className="font-serif font-normal">gets made.</em>
        </h1>
        <div className="mt-24 grid gap-12 border-t border-paper/20 pt-8 md:grid-cols-3">
          {[
            ["01", "Question", "Start with a visual or technical question worth pulling apart."],
            ["02", "Prototype", "Build the smallest shader, simulation, or tool that can test the idea."],
            ["03", "Refine", "Tune behavior, art direction, and interaction until the system feels intentional."],
          ].map(([number, title, copy]) => (
            <article key={number}>
              <span className="font-mono text-[10px] text-acid">{number}</span>
              <h2 className="mt-12 text-3xl tracking-[-0.04em]">{title}</h2>
              <p className="mt-4 max-w-sm text-sm leading-7 text-paper/60">{copy}</p>
            </article>
          ))}
        </div>
        <Link
          className="mt-24 inline-flex items-center gap-8 border-b border-paper pb-3 font-mono text-[10px] tracking-[0.08em] uppercase"
          to="/"
        >
          Back to portfolio <Arrow />
        </Link>
      </section>
    </main>
  );
}

function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center font-sans text-ink">
      <p className="font-mono text-xs uppercase">404 / Page not found</p>
      <h1 className="mt-6 text-6xl tracking-[-0.06em]">Nothing rendered here.</h1>
      <Link className="mt-10 border-b border-ink pb-2 font-mono text-xs uppercase" to="/">Return home</Link>
    </main>
  );
}

export const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/process", Component: Process },
  { path: "*", Component: NotFound },
]);
