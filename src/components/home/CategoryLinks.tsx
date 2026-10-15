import { Link } from "react-router";
import Arrow from "../Arrow";
import Eyebrow from "../Eyebrow";

const categoryLinks = [
  {
    number: "01",
    label: "Graphics",
    to: "/graphics",
    copy: "Rendering, simulation, and procedural systems",
    color: "sky",
  },
  {
    number: "02",
    label: "Robotics",
    to: "/robotics",
    copy: "Perception, planning, and physical interaction",
    color: "coral",
  },
  {
    number: "03",
    label: "Games",
    to: "/games",
    copy: "Playable systems and interactive worlds",
    color: "mint",
  },
];

export default function CategoryLinks() {
  return (
    <section className="categories">
      <Eyebrow className="categories__eyebrow">Explore projects by field</Eyebrow>
      <div className="categories__grid">
        {categoryLinks.map(({ number, label, to, copy, color }) => (
          <Link className={`category-card category-card--${color}`} key={to} to={to}>
            <span className="category-card__number">{number}</span>
            <h2 className="category-card__title">
              {label}
              <span className="category-card__arrow"><Arrow /></span>
            </h2>
            <p className="category-card__copy">{copy}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}