import { Link } from "react-router";
import "../styles/home.css";

export default function Footer({ blue = false }: { blue?: boolean }) {
  return (
    <footer className="footer">
      <p className="footer__copy">Paulo Khayat © 2026</p>
      <div className="footer__links">
        <a href="https://www.linkedin.com" rel="noreferrer" target="_blank">
          LinkedIn
        </a>
        <a href="https://github.com" rel="noreferrer" target="_blank">
          GitHub
        </a>
      </div>
      <Link className="footer__home" to="/">
        Home ↑
      </Link>
    </footer>
  );
}