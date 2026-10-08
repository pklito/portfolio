import Arrow from "../Arrow";
import Eyebrow from "../Eyebrow";
import VoronoiShader from "../VoronoiShader";
import { profile } from "../../data/site";

export default function ContactSection() {
  return (
    <section className="relative isolate min-h-[620px] overflow-hidden bg-[#06123d] px-[3.2vw] py-24 text-white">
      <VoronoiShader />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/10 to-black/40" />
      <div className="relative z-10">
        <Eyebrow>Let’s collaborate / WebGL experiment</Eyebrow>
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
  );
}
