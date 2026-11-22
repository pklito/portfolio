import type { Project } from "../data/site";
import Arrow from "./features/Arrow";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const content = (
    <>
      <div className="project-card__media">
        <img className="project-card__image" src={project.image} alt="" />
        <span className={`project-card__tag`}>{project.category}</span>
      </div>
      <div className="project-card__body">
        <div className="project-card__row">
          <h3 className="project-card__title">{project.title}</h3>
          <span className="project-card__arrow"><Arrow /></span>
        </div>
        <p className="project-card__description">{project.description}</p>
        {project.url && <p className="project-card__link">View on GitHub ↗</p>}
      </div>
    </>
  );

  return (
    <article className="project-card">
      {project.url ? (
        <a className="project-card__anchor" href={project.url} rel="noreferrer" target="_blank">
          {content}
        </a>
      ) : (
        content
      )}
    </article>
  );
}