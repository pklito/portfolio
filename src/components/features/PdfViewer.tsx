import { useEffect, useState } from "react";

/** True when the media query matches; updates if the window is resized. */
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

type PdfViewerProps = {
  /** Path to the PDF, e.g. "/cv.pdf" for a file at public/cv.pdf */
  src: string;
  /** Accessible label for the embedded viewer */
  title?: string;
  /** File name the browser suggests when downloading */
  downloadName?: string;
};

export default function PdfViewer({
  src,
  title = "PDF document",
  downloadName,
}: PdfViewerProps) {
  // Embed only on wide screens with a mouse. Phones and tablets get the button,
  // because mobile browsers (especially iOS Safari) can't show PDFs inline.
  const showEmbed = useMediaQuery("(min-width: 768px) and (pointer: fine)");

  const downloadButton = (
    <a className="pdf-viewer__button" href={src} download={downloadName}>
      Download PDF <span aria-hidden="true">↓</span>
    </a>
  );

  if (!showEmbed) return downloadButton;

  return (
    <div className="pdf-viewer">
      <object
        aria-label={title}
        className="pdf-viewer__object"
        data={`${src}#view=FitH&navpanes=0`}
        type="application/pdf"
      >
        <p className="pdf-viewer__fallback">
          Your browser can't display this PDF here. Use the download button below.
        </p>
      </object>
      <div className="pdf-viewer__actions">{downloadButton}</div>
    </div>
  );
}