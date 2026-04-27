import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>© {new Date().getFullYear()} Sonia</span>

        <a href="mailto:sonia.soriano.rodriguez.sr@gmail.com" className="footer-link">
          📧 sonia.soriano.rodriguez.sr@gmail.com
        </a>

        <div className="footer-icons">
          <a href="https://github.com/Sonia-SSR2021" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/sonia-soriano-rodr%C3%ADguez/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}