import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import {
  categoryInfo,
  projects,
  type ProjectCategory,
} from "../data/site";

export default function ProjectsPage({
  category,
}: {
  category: ProjectCategory;
}) {
  const info = categoryInfo[category];
  const categoryProjects = projects[category];

  return (
    <main className="min-h-screen bg-ink font-sans text-paper antialiased">
      <Header dark />
      <section className="px-[3.2vw] py-20 md:py-28">
        <p className="font-mono text-[10px] tracking-[0.1em] text-acid uppercase">
          {info.label} / Project archive
        </p>
        <h1 className="mt-9 max-w-[1150px] text-[clamp(58px,9vw,136px)] leading-[0.86] tracking-[-0.07em]">
          {info.title}
        </h1>
        <div className="mt-16 grid gap-12 border-t border-paper/20 pt-8 md:grid-cols-2">
          <p className="max-w-xl text-lg leading-8 text-paper/70">{info.intro}</p>
          <div className="md:justify-self-end">
            <p className="mb-4 font-mono text-[9px] uppercase opacity-45">Working with</p>
            <div className="flex max-w-md flex-wrap gap-2">
              {info.skills.map((skill) => (
                <span className="rounded-full border border-paper/25 px-4 py-2 font-mono text-[9px] uppercase" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-x-6 gap-y-24 px-[3.2vw] pb-32 md:grid-cols-2">
        {categoryProjects.map((project, index) => (
          <ProjectCard
            index={index}
            key={project.title}
            project={project}
            wide={project.featured}
          />
        ))}
      </section>
      <Footer />
    </main>
  );
}
