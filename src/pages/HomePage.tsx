import { Link } from "react-router"

import Arrow from "../components/features/Arrow"

import Footer from "../components/Footer"

import Header from "../components/Header"

import { currentProject, homepageProjects } from "../data/site"

import PdfViewer from "@/components/features/PdfViewer"

import "../styles/home.css"

import imgbook from "../assets/booktall.jpg"

import MazeShader from "@/components/shaders/Maze"

import HeroShader from "@/components/shaders/HeroShader"

const enum CVS{
  SoftwareEngineering = "cv-se.pdf",
  TechArt = "cv-ta.pdf"
}
const cvShown = CVS.TechArt;
export default function HomePage() {
  return (
    <main className="home">
      <Header />

      <section className="hero">
        <HeroShader src={imgbook} />
        {/* <img className="hero__photo__old" src={imgbook} alt="Paulo" /> */}
        <div className="hero__top">
        </div>
        <h1 className="hero__title">
          <span className="hero__line">Hey! I'm</span>
          <span className="hero__line">Paulo Khayat</span>
          <p className="hero__intro">I do Software engineering, Robotics, and Prodecural tech art</p>
        </h1>
      </section>

      {/* Projects */}
      <section className="projects" id="projects">
        <div className="projects__header">
          <div>
            <p className="label">A few things I’ve made</p>
            <h2 className="projects__title">Projects</h2>
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
                <span className={`project-card__tag ${project.color}`}>
                  {project.category}
                </span>
              </div>
              <div className="project-card__body">
                <div className="project-card__row">
                  <span className="project-card__number">0{index + 1}</span>
                  <span className="project-card__arrow">
                    <Arrow />
                  </span>
                </div>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">
                  {project.description}
                </p>
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
            <p className="current__label">
              Current project / Currently working on
            </p>
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
              <p className="current__description">
                {currentProject.description}
              </p>
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
            Curious by
            <br />
            <em className="serif">default.</em>
          </h2>
        </div>
        <div>
          <ul className="about__list"></ul>
          <Link className="about__link" to="/about">
            Read the detailed about <Arrow />
          </Link>
        </div>
      </section>

      {/* CV */}
      <section className="cv">
        <MazeShader />
        <div className="cv__overlay" />
        <div className="cv__content">
          <PdfViewer
            src={"/" + cvShown}
            title="My CV"
            downloadName="Paulo-Khayat-CV.pdf"
          />
        </div>
      </section>
      <Footer blue />
    </main>
  )
}
