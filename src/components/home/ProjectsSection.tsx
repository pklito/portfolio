import Arrow from "../Arrow";
import Eyebrow from "../Eyebrow";
import { homepageProjects } from "../../data/site";

export default function ProjectsSection() {
  return (
    <section className="projects" id="projects">
      <div className="projects__header">
        <div>
          <Eyebrow className="projects__eyebrow">A few things I've made</Eyebrow>
          <h2 className="projects__title">
            Projects, experiments<br />&amp; <em>useful oddities.</em>
          </h2>
        </div>
        <p className="projects__hint">
          Click any card to open the project and its code on GitHub.
        </p>
      </div>

      <div className="projects__grid">
        {homepageProjects.map((project, index) => (
          <a
            className="project-card"
            href={project.url}
            key={project.title}
            rel="noreferrer"
            target="_blank"
          >
            <div className="project-card__media">
              <img
                className="project-card__img"
                src={project.image}
                alt={`${project.title} project preview`}
              />
              <span className={`project-card__tag ${project.color}`}>
                {project.category}
              </span>
            </div>
            <div className="project-card__body">
              <div className="project-card__row">
                <span className="project-card__number">0{index + 1}</span>
                <span className="project-card__arrow"><Arrow /></span>
              </div>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>
              <p className="project-card__cta">View on GitHub ↗</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}