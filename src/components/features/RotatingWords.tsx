import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "../styles/rotating-words.css";

type RotatingWordsProps = {
  words: string[];
  /** Time each word stays on screen, in ms. */
  interval?: number;
  /** Static text drawn after every word (e.g. "."), included in the width. */
  suffix?: string;
  className?: string;
};

export default function RotatingWords({
  words,
  interval = 2600,
  suffix = "",
  className = "",
}: RotatingWordsProps) {
  const [{ current, previous }, setIndexes] = useState({ current: 0, previous: -1 });
  const [width, setWidth] = useState<number | undefined>(undefined);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Advance to the next word on a timer.
  useEffect(() => {
    if (words.length < 2) return;
    const id = window.setInterval(() => {
      setIndexes(({ current }) => ({
        current: (current + 1) % words.length,
        previous: current,
      }));
    }, interval);
    return () => window.clearInterval(id);
  }, [words.length, interval]);

  // Size the container to the active word so the text after it
  // slides smoothly instead of leaving a gap. The observer also
  // handles resizes (the headline font size is viewport-based)
  // and web fonts finishing loading.
  useLayoutEffect(() => {
    const el = wordRefs.current[current];
    if (!el) return;
    setWidth(el.offsetWidth);
    const observer = new ResizeObserver(() => setWidth(el.offsetWidth));
    observer.observe(el);
    return () => observer.disconnect();
  }, [current, words]);

  return (
    <span className={`rotator ${className}`} style={{ width }}>
      {/* Screen readers get the full list once instead of every swap. */}
      <span className="sr-only">{words.join(", ")}</span>
      {/* In-flow spacer gives the container its line height. */}
      <span className="rotator__spacer" aria-hidden="true">
        &nbsp;
      </span>
      {words.map((word, i) => (
        <span
          key={word}
          ref={(node) => {
            wordRefs.current[i] = node;
          }}
          className="rotator__word"
          data-state={i === current ? "active" : i === previous ? "exit" : "idle"}
          aria-hidden="true"
        >
          {word}
          {suffix && <span className="rotator__suffix">{suffix}</span>}
        </span>
      ))}
    </span>
  );
}