import { Link } from "react-router";
import Arrow from "../features/Arrow";
import Eyebrow from "../features/Eyebrow";

export default function AboutSection() {
  return (
    <section className="about">
      <div>
        <Eyebrow>A short about</Eyebrow>
        <h2 className="about__title">
          Curious by<br /><em>default.</em>
        </h2>
      </div>
      <div>
        <ul className="about__list">
          
        </ul>
        <Link className="about__link" to="/about">
          Read the detailed about <Arrow />
        </Link>
      </div>
    </section>
  );
}