import { useRef, useState } from "react";

export default function LoopVideo({ src, poster }: { src: string; poster?: string }) {
  return (
    <video
      className="project-card__image"
      src={src}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      disablePictureInPicture
      controlsList="nodownload noremoteplayback"
      style={{ pointerEvents: "none" }}
    />
  );
}

export function LoopVideoPausable({ src, poster }: { src: string; poster?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  const toggle = (e: React.MouseEvent) => {
    e.preventDefault();   // stops the card's <a> from navigating
    e.stopPropagation();
    const v = ref.current;
    if (!v) return;
    if (v.paused) { v.play(); setPaused(false); }
    else { v.pause(); setPaused(true); }
  };

  return (
    <div className="loop-video" onClick={toggle}>
      <video
        ref={ref}
        className="project-card__image"
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />
      {paused && <span className="loop-video__icon">▶</span>}
    </div>
  );
}