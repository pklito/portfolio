export default function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`size-5 fill-none stroke-current stroke-[1.4] ${down ? "rotate-90" : ""}`}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14M14 5l7 7-7 7"
      />
    </svg>
  );
}
