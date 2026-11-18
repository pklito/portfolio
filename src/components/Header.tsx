import { NavLink } from "react-router";
import "../styles/home.css";

const links = [{ label: "Home", to: "/" }];

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <NavLink className="header__brand" to="/">
          <span className="header__dot" />
          Paulo Khayat
        </NavLink>
        <nav className="header__nav" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              className={({ isActive }) =>
                `header__link${isActive ? " header__link--active" : ""}`
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