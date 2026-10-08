import { Link } from "react-router";
import Arrow from "../Arrow";
import Eyebrow from "../Eyebrow";
import { profile } from "../../data/site";

export default function AboutSection() {
  return (
    <section className="grid gap-16 px-[3.2vw] py-24 md:grid-cols-[0.8fr_1.2fr] md:py-32">
      <div>
        <Eyebrow>A short about</Eyebrow>
        <h2 className="mt-6 text-[clamp(42px,5vw,72px)] leading-none tracking-[-0.055em]">
          Curious by<br /><em className="font-serif font-normal">default.</em>
        </h2>
      </div>
      <div>
        <ul className="grid gap-3">
          {profile.aboutPoints.map((point, index) => (
            <li
              className="grid grid-cols-[44px_1fr] rounded-2xl bg-white px-5 py-4 text-sm leading-6 shadow-sm"
              key={point}
            >
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
  );
}
