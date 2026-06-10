import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css?v=2";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <span>© {new Date().getFullYear()} Sonia</span>

        <a href="mailto:sonia.soriano.rodriguez.sr@gmail.com" className="footer-link">
          {t('footer.email')}
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