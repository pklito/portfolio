import { Link } from "react-router";
import Arrow from "../components/Arrow";
import Footer from "../components/Footer";
import Header from "../components/Header";
import VoronoiShader from "../components/VoronoiShader";
import { currentProject, homepageProjects, profile } from "../data/site";
import PdfViewer from "@/components/PdfViewer";
import RotatingWords from "../components/Rotatingwords";
import "../styles/home.css";

const categoryLinks = [
  ["01", "Graphics", "/graphics", "Rendering, simulation, and procedural systems"],
  ["02", "Robotics", "/robotics", "Perception, planning, and physical interaction"],
  ["03", "Games", "/games", "Playable systems and interactive worlds"],
];

const heroWords = [
  "graphics programming",
  "robotics",
  "software engineering",
  "indie games",
];

export default function HomePage() {
  return (
    <main className="home">
      <Header />

      {/* Hero */}
      <section className="hero">
        <div className="hero__top">
          <span className="hero__pill">Hello there, welcome in!</span>
          <span className="hero__meta">Portfolio · 2025</span>
        </div>
        <h1 className="hero__title">
          Hi, I’m Paulo.
          <br />
          I’m into <RotatingWords words={heroWords} suffix="." />
        </h1>
        <div className="hero__bottom">
          <p className="hero__intro">{profile.intro}</p>
          <a className="hero__button" href="#projects" aria-label="See featured projects">
            <Arrow down />
          </a>
        </div>
        <div className="hero__blob hero__blob--coral" />
        <div className="hero__blob hero__blob--violet" />
        <div className="hero__blob hero__blob--sky" />
      </section>

      {/* Projects */}
      <section className="projects" id="projects">
        <div className="projects__header">
          <div>
            <p className="label">A few things I’ve made</p>
            <h2 className="projects__title">
              Projects, experiments<br />&amp; <em className="serif">useful oddities.</em>
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
                  className="project-card__image"
                  src={project.image}
                  alt={`${project.title} project preview`}
                />
                <span className={`project-card__tag ${project.color}`}>{project.category}</span>
              </div>
              <div className="project-card__body">
                <div className="project-card__row">
                  <span className="project-card__number">0{index + 1}</span>
                  <span className="project-card__arrow">
                    <Arrow />
                  </span>
                </div>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                <p className="project-card__link">View on GitHub ↗</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Current project */}
      <section className="current" id="current">
        <div className="current__header">
          <div>
            <p className="current__label">Current project / Currently working on</p>
            <p className="current__status">{currentProject.status}</p>
          </div>
          <span className="current__dot" />
        </div>
        <div className="current__grid">
          <div className="current__media">
            <img className="current__image" src={currentProject.image} alt="" />
          </div>
          <div className="current__content">
            <div>
              <p className="current__category">{currentProject.category}</p>
              <h2 className="current__title">{currentProject.title}</h2>
              <p className="current__description">{currentProject.description}</p>
            </div>
            <p className="current__milestone">{currentProject.nextMilestone}</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about">
        <div>
          <p className="label">A short about</p>
          <h2 className="about__title">
            Curious by<br /><em className="serif">default.</em>
          </h2>
        </div>
        <div>
          <ul className="about__list">
            {profile.aboutPoints.map((point, index) => (
              <li className="about__item" key={point}>
                <span className="about__number">0{index + 1}</span>
                {point}
              </li>
            ))}
          </ul>
          <Link className="about__link" to="/about">
            Read the detailed about <Arrow />
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <p className="label categories__label">Explore projects by field</p>
        <div className="categories__grid">
          {categoryLinks.map(([number, label, to, copy]) => (
            <Link className={`category-card category-card--${number}`} key={to} to={to}>
              <span className="category-card__number">{number}</span>
              <h2 className="category-card__title">
                {label}
                <span className="category-card__arrow">
                  <Arrow />
                </span>
              </h2>
              <p className="category-card__copy">{copy}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CV */}
      <section className="cv">
        <VoronoiShader />
        <div className="cv__overlay" />
        <div className="cv__content">
          <PdfViewer src="/cv-se.pdf" title="My CV" downloadName="Paulo-Khayat-CV.pdf" />
        </div>
      </section>
      <Footer blue />
    </main>
  );
}