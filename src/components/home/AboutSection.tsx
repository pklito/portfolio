import { Link } from "react-router";
import Arrow from "../Arrow";
import Eyebrow from "../Eyebrow";
import { profile } from "../../data/site";

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
          {profile.aboutPoints.map((point, index) => (
            <li className="about__item" key={point}>
              <span className="about__index">0{index + 1}</span>
              {point}
            </li>
          ))}
        </ul>
        <Link className="about__link" to="/about">
          Read the detailed about <Arrow />
        </Link>
      </div>
    </section>
  );
}