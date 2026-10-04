import { Link } from "react-router";
import Arrow from "../components/Arrow";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { profile } from "../data/site";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-paper font-sans text-ink antialiased">
      <Header />
      <section className="px-[3.2vw] py-20 md:py-28">
        <p className="font-mono text-[10px] tracking-[0.1em] uppercase">About / Paulo Khayat</p>
        <h1 className="mt-10 max-w-[1200px] text-[clamp(58px,9vw,136px)] leading-[0.86] tracking-[-0.07em]">
          Technical curiosity,<br />
          <em className="font-serif font-normal">visual instinct.</em>
        </h1>
      </section>

      <section className="grid gap-16 border-t border-ink/20 px-[3.2vw] py-20 md:grid-cols-[0.7fr_1.3fr]">
        <p className="font-mono text-[10px] tracking-[0.1em] uppercase">My practice</p>
        <div className="max-w-3xl">
          <p className="text-[clamp(24px,3vw,42px)] leading-[1.25] tracking-[-0.035em]">
            I’m a computer graphics master’s student interested in how code,
            mathematics, and design can produce experiences that feel alive.
          </p>
          <div className="mt-12 grid gap-8 text-sm leading-7 text-ink/65 sm:grid-cols-2">
            <p>
              My work moves between visual research and engineering. I enjoy
              writing shaders and simulation tools as much as shaping the
              interaction and final image.
            </p>
            <p>
              Robotics and games give those ideas somewhere to move. Both ask
              how a system perceives, responds, and communicates its behavior
              to a person.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-violet px-[3.2vw] py-20 md:py-28">
        <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr]">
          <p className="font-mono text-[10px] tracking-[0.1em] uppercase">What I care about</p>
          <div className="grid sm:grid-cols-2">
            {[
              ["01", "Clear systems", "Making complex technical behavior visible and understandable."],
              ["02", "Expressive tools", "Building tools that invite exploration instead of prescribing one answer."],
              ["03", "Real-time work", "Creating responsive systems that can be played with, not only observed."],
              ["04", "Learning in public", "Using small prototypes to test ideas and share what I discover."],
            ].map(([number, title, copy]) => (
              <article className="border-t border-ink/25 py-8 sm:pr-10" key={number}>
                <span className="font-mono text-[9px]">{number}</span>
                <h2 className="mt-10 text-2xl tracking-[-0.04em]">{title}</h2>
                <p className="mt-3 max-w-xs text-xs leading-6 text-ink/65">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-[3.2vw] py-20 md:py-28">
        <div className="grid gap-16 md:grid-cols-[0.7fr_1.3fr]">
          <p className="font-mono text-[10px] tracking-[0.1em] uppercase">Now / Next</p>
          <div>
            <div className="grid grid-cols-[100px_1fr] border-t border-ink/20 py-7">
              <span className="font-mono text-[9px] uppercase opacity-45">Now</span>
              <p>Completing a master’s degree and developing projects across computer graphics, robotics, and games.</p>
            </div>
            <div className="grid grid-cols-[100px_1fr] border-y border-ink/20 py-7">
              <span className="font-mono text-[9px] uppercase opacity-45">Next</span>
              <p>Looking for interesting research, technical art, and creative technology collaborations.</p>
            </div>
            <Link className="mt-12 inline-flex items-center gap-10 border-b border-ink pb-3 font-mono text-[10px] uppercase" to="/graphics">
              Explore my projects <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
