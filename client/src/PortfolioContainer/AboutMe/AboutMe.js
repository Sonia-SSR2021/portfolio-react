import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  useEffect(() => {
    const sub =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    return () => sub.unsubscribe();
  }, []);
  useEffect(() => {
    Animations.animations.fadeInScreen(props.id);
  }, [props.id]);

  const SCREEN_CONSTANTS = {
    description:
      "Desarrolladora backend especializada en Java, con experiencia en la construcción de APIs y en el diseño y desarrollo de aplicaciones escalables y eficientes, utilizando tecnologías como Spring Boot y bases de datos ralacionales. Familiarizada con buenas prácticas de desarrollo, con motivación por seguir aprendiendo y aportar valor en entornos profesionales.",
    highlights: {
      bullets: [
        "Desarrollo de APIs REST con Java y Spring Boot",
        "Gestión de bases de datos relacionales (PostgreSQL)",
        "Diseño de aplicaciones backend escalables",
        "Aplicación de buenas prácticas (Clean code)",
        "Desarrollo de Microservicios",
        "Testing y mantenimiento de aplicaciones",
      ],
      heading: "Aspectos destacados:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"Sobre mí"} subHeading={"¿Por qué escogerme?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                Contacto
              </button>
              <a href="sonia_soriano_cv.pdf" download="Sonia Soriano.pdf">
                <button className="btn highlighted-btn">Descargar CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
