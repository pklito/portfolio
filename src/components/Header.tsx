import { NavLink } from "react-router";
import { profile } from "../data/site";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Graphics", to: "/graphics" },
  { label: "Robotics", to: "/robotics" },
  { label: "Games", to: "/games" },
];

export default function Header({ dark = false }: { dark?: boolean }) {
  return (
    <header
      className={`relative z-30 px-[3.2vw] ${
        dark ? "bg-ink text-paper" : "bg-paper text-ink"
      }`}
    >
      <div className="flex min-h-20 items-center justify-between gap-8 border-b border-current/15">
        <NavLink
          className="flex shrink-0 items-center gap-2 font-sans text-sm font-semibold tracking-[-0.03em]"
          to="/"
        >
          <span className="size-2.5 rounded-full bg-coral" />
          {profile.name}
        </NavLink>
        <nav
          className="flex items-center gap-1 overflow-x-auto py-4 font-mono text-[9px] tracking-[0.04em] sm:text-[10px]"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              className={({ isActive }) =>
                `shrink-0 rounded-full px-3 py-2 transition-colors sm:px-4 ${
                  isActive
                    ? dark
                      ? "bg-acid text-ink"
                      : "bg-ink text-paper"
                    : "opacity-60 hover:bg-current/10 hover:opacity-100"
                }`
              }
              to={link.to}
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
