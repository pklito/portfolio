import Arrow from "../Arrow";
import { profile } from "../../data/site";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__top">
        <span className="hero__pill">Hello there, welcome in!</span>
        <span className="hero__year">Portfolio · 2025</span>
      </div>

      <h1 className="hero__title">
        Hi, I'm Paulo.
        <br />
        I make <em>curious</em> things.
      </h1>

      <div className="hero__bottom">
        <p className="hero__intro">{profile.intro}</p>
        <a className="hero__cta" href="#projects" aria-label="See featured projects">
          <Arrow down />
        </a>
      </div>

      {/* Decorative blobs */}
      <div className="hero__blob hero__blob--coral" />
      <div className="hero__blob hero__blob--violet" />
      <div className="hero__blob hero__blob--sky" />
    </section>
  );
}