import Eyebrow from "../Eyebrow";
import { currentProject } from "../../data/site";

export default function CurrentProject() {
  return (
    <section className="current" id="current">
      <div className="current__header">
        <div>
          <Eyebrow className="current__eyebrow">
            Current project / Currently working on
          </Eyebrow>
          <p className="mono-label current__status">{currentProject.status}</p>
        </div>
        <span className="current__dot" />
      </div>

      <div className="current__grid">
        <div className="current__image-wrap">
          <img className="current__image" src={currentProject.image} alt="" />
        </div>
        <div className="current__info">
          <div>
            <p className="mono-label current__category">{currentProject.category}</p>
            <h2 className="current__title">{currentProject.title}</h2>
            <p className="current__desc">{currentProject.description}</p>
          </div>
          <p className="current__milestone">{currentProject.nextMilestone}</p>
        </div>
      </div>
    </section>
  );
}