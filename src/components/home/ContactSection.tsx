import Arrow from "../Arrow";
import Eyebrow from "../Eyebrow";
import VoronoiShader from "../VoronoiShader";
import { profile } from "../../data/site";

export default function ContactSection() {
  return (
    <section className="contact">
      <VoronoiShader />
      <div className="contact__overlay" />
      <div className="contact__content">
        <Eyebrow>Let's collaborate / WebGL experiment</Eyebrow>
        <h2 className="contact__title">
          Have a problem to <em>visualize?</em>
        </h2>
        <a className="contact__email" href={`mailto:${profile.email}`}>
          {profile.email}
          <span className="contact__arrow"><Arrow /></span>
        </a>
      </div>
    </section>
  );
}