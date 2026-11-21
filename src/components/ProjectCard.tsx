import type { Project } from "../data/site";
import Arrow from "./features/Arrow";

export default function ProjectCard({
  project,
  index,
  wide = false,
}: {
  project: Project;
  index: number;
  wide?: boolean;
}) {
  const content = (
    <>
      <div
        className={`work-card__media ${
          wide ? "work-card__media--wide" : "work-card__media--tall"
        }`}
      >
        <img className="work-card__image" src={project.image} alt="" />
        <div className="work-card__overlay" />
        <span className="work-card__index">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="work-card__arrow">
          <Arrow />
        </span>
      </div>
      <div className="work-card__header">
        <div>
          <h2 className="work-card__title">{project.title}</h2>
          <p className="work-card__tools">{project.tools}</p>
        </div>
        <span className="work-card__year">{project.year}</span>
      </div>
      <p className="work-card__description">{project.description}</p>
    </>
  );

  return (
    <article className={`work-card ${wide ? "work-card--wide" : ""}`}>
      {project.url ? (
        <a
          className="work-card__link"
          href={project.url}
          rel="noreferrer"
          target="_blank"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </article>
  );
}