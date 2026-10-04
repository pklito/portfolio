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
    card: "md:col-span-2",
    imageShape: "md:aspect-[2/1]",
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
    card: "md:mt-[120px]",
    imageShape: "",
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
    card: "",
    imageShape: "",
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
    card: "md:col-span-2",
    imageShape: "md:aspect-[2/1]",
  },
];

// Shared class strings for things that repeat
const eyebrow = "mb-6 font-mono text-[10px] tracking-[0.1em] uppercase";
const displayHeading = "font-normal tracking-[-0.055em] leading-[0.98]";

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`size-[18px] ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M14 5l7 7-7 7" />
    </svg>
  );
}

export default function App() {
  return (
    <main>
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-10 grid grid-cols-[1fr_auto] items-center border-b border-line px-[3.2vw] py-5 font-mono text-[11px] tracking-[0.05em] uppercase md:grid-cols-[1fr_auto_1fr]">
        <a
          className="font-sans text-[15px] font-semibold tracking-[-0.04em]"
          href="#top"
          aria-label="Back to top"
        >
          CG<span className="text-violet">/25</span>
        </a>
        <nav className="hidden gap-[34px] md:flex" aria-label="Main navigation">
          <a className="link-underline" href="#work">Work</a>
          <a className="link-underline" href="#about">About</a>
          <a className="link-underline" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-[9px] justify-self-end">
          <span className="size-[7px] rounded-full bg-[#70a52b] motion-safe:animate-pulse-dot" />
          Open to opportunities
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative flex h-[min(900px,100svh)] min-h-[670px] flex-col overflow-hidden px-[3.2vw] pt-[105px] pb-[42px] md:min-h-[700px] md:pt-[120px]"
        id="top"
      >
        <div className="relative z-[2] flex justify-between font-mono text-[11px] tracking-[0.08em] uppercase">
          <span>Computer Graphics</span>
          <span className="hidden md:inline">MSc Portfolio · 2025</span>
        </div>

        <h1 className="relative z-[2] my-auto max-w-[1200px] text-[clamp(50px,14vw,78px)] leading-[0.92] font-medium tracking-[-0.075em] md:text-[clamp(56px,8.6vw,140px)] md:leading-[0.88]">
          I explore the space
          <br />
          between <em>code</em> and image.
        </h1>

        <div className="relative z-[2] flex items-end justify-between">
          <p className="max-w-[70%] text-sm leading-[1.65] md:max-w-[450px]">
            Master’s student working across real-time rendering, simulation,
            generative systems, and interactive experiences.
          </p>
          <a
            className="flex size-[58px] items-center justify-center rounded-full border border-ink transition-colors duration-200 hover:bg-ink hover:text-paper md:size-[72px]"
            href="#work"
            aria-label="Explore selected work"
          >
            <Arrow className="rotate-90" />
          </a>
        </div>

        {/* Decorative orbs + grid */}
        <div className="absolute top-[22%] -right-[10%] size-[clamp(170px,23vw,350px)] rounded-full opacity-90 blur-[1px] bg-[radial-gradient(circle_at_35%_30%,#efffbb_0,var(--color-acid)_32%,#93a719_70%,#536007_100%)] shadow-[inset_-24px_-34px_60px_rgba(20,26,0,0.25)] md:top-1/4 md:right-[9%]" />
        <div className="absolute bottom-[10%] left-[58%] size-[clamp(120px,17vw,260px)] rounded-full opacity-90 blur-[1px] bg-[radial-gradient(circle_at_33%_28%,#d0c9ff,var(--color-violet)_45%,#332064_100%)] md:-bottom-[11%] md:left-[40%]" />
        <div className="absolute top-[15%] right-[3.2vw] h-[220px] w-[360px] opacity-[0.32] bg-[linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] bg-[size:44px_44px] [transform:perspective(400px)_rotateX(65deg)_rotateZ(-12deg)]" />
      </section>

      {/* Work */}
      <section className="bg-ink px-[3.2vw] pt-[110px] pb-[140px] text-paper" id="work">
        <div className="mb-[70px] flex flex-col items-start gap-7 border-b border-paper/25 pb-[38px] md:flex-row md:items-end md:justify-between">
          <div>
            <p className={eyebrow}>Selected work</p>
            <h2 className={`max-w-[680px] text-[clamp(40px,5vw,76px)] ${displayHeading}`}>
              Experiments in motion, matter &amp; light.
            </h2>
          </div>
          <p className="font-mono text-[10px] tracking-[0.1em] uppercase opacity-65">
            04 projects / 2023—25
          </p>
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-[90px]">
          {projects.map((project) => (
            <article
              className={`mb-[70px] md:mb-0 ${project.card}`}
              key={project.title}
            >
              <a
                className="group block"
                href="#contact"
                aria-label={`View ${project.title} project`}
              >
                <div
                  className={`relative aspect-[4/5] overflow-hidden bg-[#292925] after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(0,0,0,0.25),transparent_32%,rgba(0,0,0,0.15))] ${project.imageShape}`}
                >
                  <img
                    className="size-full object-cover transition-transform duration-[750ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.035]"
                    src={project.image}
                    alt=""
                  />
                  <span className="absolute top-[18px] left-[18px] z-[2] font-mono text-[10px] tracking-[0.1em]">
                    {project.number}
                  </span>
                  <span className="absolute top-[18px] right-[18px] z-[2] flex size-12 scale-0 items-center justify-center rounded-full bg-paper text-ink transition-transform duration-250 group-hover:scale-100">
                    <Arrow />
                  </span>
                </div>

                <div className="flex items-start justify-between border-b border-paper/25 py-5">
                  <div>
                    <h3 className="mb-1.5 text-[26px] font-medium tracking-[-0.04em]">
                      {project.title}
                    </h3>
                    <p className="font-mono text-[9px] tracking-[0.08em] uppercase opacity-55">
                      {project.type}
                    </p>
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.08em] uppercase opacity-55">
                    {project.year}
                  </span>
                </div>

                <p className="mt-4 max-w-[480px] text-xs leading-[1.6] opacity-65">
                  {project.description}
                </p>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        className="px-[3.2vw] py-[90px] md:grid md:grid-cols-[1.15fr_0.85fr] md:gap-x-[5vw] md:gap-y-20 md:py-[130px]"
        id="about"
      >
        <div>
          <p className={`${eyebrow} !mb-9`}>About / Practice</p>
          <h2 className={`text-[clamp(40px,5vw,76px)] ${displayHeading}`}>
            Technical curiosity,
            <br />
            <em>visual instinct.</em>
          </h2>
        </div>

        <div className="pt-[50px] md:pt-[58px]">
          <p className="text-[23px] leading-[1.45] tracking-[-0.025em]">
            I’m a computer graphics master’s student interested in how
            algorithms can create images that feel alive.
          </p>
          <p className="mt-4 max-w-[540px] text-sm leading-[1.75] opacity-70">
            My practice moves between engineering and visual research—from
            writing shaders and simulation tools to crafting real-time
            experiences. I enjoy turning complex technical ideas into
            expressive, intuitive work.
          </p>
          <a
            className="group mt-7 inline-flex items-center gap-10 border-b border-ink pb-2.5 font-mono text-[10px] tracking-[0.08em] uppercase"
            href="mailto:hello@example.com"
          >
            More about my practice
            <Arrow className="transition-transform duration-200 group-hover:translate-x-[5px]" />
          </a>
        </div>

        <div className="mt-[90px] gap-6 border-t border-line pt-8 md:col-span-full md:mt-0 md:grid md:grid-cols-2">
          <SkillBlock
            label="01 / Focus"
            items={[
              "Real-time rendering",
              "Physical simulation",
              "Generative systems",
              "Creative tooling",
            ]}
          />
          <SkillBlock
            label="02 / Toolkit"
            items={[
              "C++ / Python",
              "OpenGL / GLSL",
              "Unity / Unreal",
              "Houdini / Blender",
            ]}
          />
        </div>
      </section>

      {/* Contact */}
      <section
        className="min-h-[560px] bg-violet px-[3.2vw] pt-[90px] pb-20 md:min-h-[650px] md:pt-[110px]"
        id="contact"
      >
        <p className={eyebrow}>Let's collaborate</p>
        <h2 className={`max-w-[1200px] text-[clamp(52px,7.5vw,116px)] ${displayHeading}`}>
          Have an interesting
          <br />
          problem to <em>visualize?</em>
        </h2>
        <a
          className="group mt-[100px] flex items-center justify-between border-b border-ink pb-[18px] text-[clamp(20px,2.2vw,32px)] md:mt-[120px]"
          href="mailto:hello@example.com"
        >
          hello@example.com
          <Arrow className="size-7 transition-transform duration-200 group-hover:translate-x-2" />
        </a>
      </section>

      {/* Footer */}
      <footer className="grid grid-cols-2 items-center gap-6 border-t border-ink/25 bg-violet px-[3.2vw] py-7 font-mono text-[9px] tracking-[0.08em] uppercase md:grid-cols-[1fr_auto_1fr] md:gap-0">
        <p>YOUR NAME © 2025</p>
        <div className="hidden gap-6 md:flex">
          <a className="link-underline" href="#top">LinkedIn</a>
          <a className="link-underline" href="#top">GitHub</a>
          <a className="link-underline" href="#top">Vimeo</a>
        </div>
        <a className="link-underline justify-self-end" href="#top">
          Back to top ↑
        </a>
      </footer>
    </main>
  );
}

function SkillBlock({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="grid grid-cols-2 border-b border-line py-[25px] md:border-b-0 md:py-0">
      <span className="font-mono text-[9px] tracking-[0.08em] uppercase">
        {label}
      </span>
      <ul className="text-sm leading-[1.8]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}