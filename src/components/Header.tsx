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
      className={`relative z-30 border-b px-[3.2vw] ${
        dark ? "border-white/20 bg-ink text-paper" : "border-ink/20 bg-paper text-ink"
      }`}
    >
      <div className="flex min-h-16 items-center justify-between gap-8">
        <NavLink
          className="shrink-0 font-sans text-sm font-semibold tracking-[-0.03em] uppercase"
          to="/"
        >
          {profile.name}
        </NavLink>
        <nav
          className="flex items-center gap-5 overflow-x-auto py-5 font-mono text-[9px] tracking-[0.08em] uppercase sm:gap-8 sm:text-[10px]"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              className={({ isActive }) =>
                `shrink-0 border-b pb-1 transition-opacity hover:opacity-100 ${
                  isActive ? "border-current opacity-100" : "border-transparent opacity-55"
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
