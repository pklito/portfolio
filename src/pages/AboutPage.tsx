import Footer from "../components/Footer";
import Header from "../components/Header";
import AboutSection from "../components/home/AboutSection";
import CategoryLinks from "../components/home/CategoryLinks";
import ContactSection from "../components/home/ContactSection";
import CurrentProject from "../components/home/CurrentProject";
import Hero from "../components/home/Hero";
import ProjectsSection from "../components/home/ProjectsSection";

export default function HomePage() {
  return (
    <main className="bg-paper font-sans text-ink antialiased">
      <Header />
      <Hero />
      <ProjectsSection />
      <CurrentProject />
      <AboutSection />
      <CategoryLinks />
      <ContactSection />
      <Footer blue />
    </main>
  );
}
