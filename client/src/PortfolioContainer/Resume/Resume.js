//TODO Doc
import React, { useEffect, useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectBulletIndex, setSelectBulletIndex] = React.useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = React.useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  useEffect(() => {
    const sub =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    return () => sub.unsubscribe();
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    checkSize();
    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet">
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "-" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      </div>
    );
  };

  const getMobileView = () => {
    return (
      <div className="resume-mobile-container">
        {resumeBullets.map((bullet, index) => (
          <div className="mobile-section" key={index}>
            <h3 className="mobile-title">{bullet.label}</h3>
            <div>{resumeDetails[index]}</div>
          </div>
        ))}
      </div>
    );
  };

  const resumeBullets = [
    { label: "Educación", logoSrc: "education.svg" },
    { label: "Experiencia", logoSrc: "work-history.svg" },
    { label: "Habilidades", logoSrc: "programming-skills.svg" },
    { label: "Proyectos", logoSrc: "projects.svg" },
    { label: "Intereses", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "Java", ratingPercentage: 75 },
    { skill: "Spring Boot", ratingPercentage: 65 },
    { skill: "PostgreSQL", ratingPercentage: 60 },
    { skill: "Git", ratingPercentage: 70 },
    { skill: "REST APIs", ratingPercentage: 70 },
    { skill: "Testing (JUnit, Mockito)", ratingPercentage: 60 },
    { skill: "Maven", ratingPercentage: 65 },
    { skill: "Spring Data JPA", ratingPercentage: 70 },
    { skill: "Microservicios", ratingPercentage: 60 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2026", toDate: "2026" },
      description:
        "Un sitio web de portafolio personal para mostrar mis proyectos y habilidades, creado con React y alojado en GitHub Pages.",
      subHeading: "Tecnologías Utilizadas: React JS, Bootstrap, GitHub Pages",
    },
    {
      title: "Sistema de gestión del sector público",
      duration: { fromDate: "2026", toDate: "Actualidad" },
      description:
        "Implementación de extensiones y personalizaciones del core del producto, garantizando compatibilidad con la base estándar y minimizando el impacto en futuras actualizaciones.",
      subHeading:
        "Tecnologías Utilizadas: Java, Spring, Oracle, metodologías agile, Git, Gitlab",
    },
    {
      title: "Plataforma de identidad digital",
      duration: { fromDate: "2023", toDate: "2026" },
      description:
        "Participación en el desarrollo de una plataforma de identidad digital orientada a la gestión segura de credenciales y servicios de autenticación. El proyecto requería un alto nivel técnico, con foco en la definición de contratos API, la construcción de servicios backend escalables y la optimización del rendimiento en flujos críticos.",
      subHeading:
        "Tecnologías Utilizadas: Java 21, Spring Boot, Spring Data JPA, Hibernate, PostgreSQL, Redis, OpenAPI, REST APIs, JUnit 5, Mockito, Git, GitLab, Postman, Scrum.",
    },
    {
      title: "Sector bancario internacional",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "Participación en un proyecto de automatización de procesos para una entidad bancaria internacional, centrado en el diseño y desarrollo de flujos BPM, la implementación de lógica de negocio y la mejora continua de procesos críticos mediante la plataforma Appian.",
      subHeading:
        "Tecnologías Utilizadas: Appian, BPM, automatización de procesos, Agile (Scrum), documentación funcional y técnica.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"IES Mare Nostrum"}
        subHeading={"Desarrollo de aplicaciones web"}
        fromDate={"2020"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"Universidad de Alicante"}
        subHeading={
          "Experto en redes sociales, estrategia y comunicación digital"
        }
        fromDate={"2019"}
        toDate={"2020"}
      />
      <ResumeHeading
        heading={"Universidad de Alicante"}
        subHeading={"Grado en publicidad y relaciones públicas"}
        fromDate={"2015"}
        toDate={"2019"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Inetum"}
        subHeading={"Desarrollador de software sénior"}
        fromDate={"2022"}
        toDate={"Actualidad"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Desarrollador de software backend empleando tecnologías como Java,
          Spring Boot y PostgreSQL.
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          - Desarrollo backend con Java en entornos enterprise, participando en
          la evolución de plataformas complejas y mantenimiento de sistemas en
          producción.
        </span>
        <br />
        <span className="resume-description-text">
          - Diseño e implementación de APIs RESTful siguiendo enfoque API First
          (OpenAPI) y arquitectura en capas, asegurando desacoplamiento y
          mantenibilidad.
        </span>
        <br />
        <span className="resume-description-text">
          - Gestión de persistencia con Spring Data JPA + PostgreSQL,
          optimización de consultas y uso de Redis para mejora de rendimiento.
        </span>
        <br />
        <span className="resume-description-text">
          - Desarrollo de testing (JUnit, Mockito), revisión de código y trabajo
          en entornos Agile (Scrum) con GitLab, contribuyendo a buenas prácticas
          y calidad del software.
        </span>
      </div>
      <ResumeHeading
        heading={"Accenture"}
        subHeading={"Business & Integration Arch Associate"}
        fromDate={"2022"}
        toDate={"2022"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Participación en proyecto internacional, centrado en automatización de
          procesos con Appian dentro de un entorno Agile (Scrum).
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          - Diseño e implementación de lógica de negocio y automatización de
          procesos mediante la utilización de Appian.
        </span>
        <br />
        <span className="resume-description-text">
          - Participación activa en equipo internacional bajo metodología Agile
          (Scrum).
        </span>
        <br />
        <span className="resume-description-text">
          - Elaboración y mantenimiento de documentación técnica y funcional de
          procesos, garantizando claridad y trazabilidad de las soluciones
          implementadas.
        </span>
      </div>
      <ResumeHeading
        heading={"Walcon Virtual"}
        subHeading={"Diseñadora gráfica"}
        fromDate={"2020"}
        toDate={"2020"}
      />
      <ResumeHeading
        heading={"JLC Creativos"}
        subHeading={"Diseñadora gráfica"}
        fromDate={"2019"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"A-puntadas"}
        subHeading={"Diseñadora gráfica"}
        fromDate={"2018"}
        toDate={"2018"}
      />
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet">
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage-bar"
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>,

    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((project, index) => (
        <ResumeHeading
          key={index}
          heading={project.title}
          subHeading={project.subHeading}
          description={project.description}
          fromDate={project.duration.fromDate}
          toDate={project.duration.toDate}
        />
      ))}
    </div>,

    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Senderismo y naturaleza"
        description="Disfruto del senderismo y las actividades al aire libre, lo que me permite mantener un equilibrio entre el ámbito profesional y personal, fomentando la constancia y el bienestar."
      />
      <ResumeHeading
        heading="Lectura"
        description="Interesada en la lectura de novelas de distintos géneros, especialmente fantasía, romance y comedia, desarrollando la creatividad y la capacidad de concentración."
      />
      <ResumeHeading
        heading="Videojuegos cooperativos"
        description="Aficionada a videojuegos en equipo, donde se potencian habilidades como la comunicación, la estrategia y la resolución de problemas."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffSet = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffSet);
    setSelectBulletIndex(index);

    // Resetear scroll al cambiar de sección
    const scrollContainer = document.querySelector(".resume-screen-container");
    if (scrollContainer) scrollContainer.scrollTop = 0;
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="Imagen no encontrada"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading
          title={"Trayectoria"}
          subHeading={"Detalles sobre mi trayectoria"}
        />
        {isMobile ? (
          getMobileView()
        ) : (
          <div className="resume-card">
            <div className="resume-bullets">
              <div className="bullet-container">
                <div className="bullet-icons">
                  <div className="bullets">{getBullets()}</div>
                </div>
              </div>
            </div>

            <div className="resume-bullet-details">{getResumeScreens()}</div>
          </div>
        )}
      </div>
    </div>
  );
}
