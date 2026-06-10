//TODO: añadir las imagenes para las cards

import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Specialization.css?v=2";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import javaIcon from "../../assets/Specialization/java.png";
import databaseIcon from "../../assets/Specialization/sql.png";
import apiIcon from "../../assets/Specialization/api.png";
import microservicesIcon from "../../assets/Specialization/microservices.png";
import testingIcon from "../../assets/Specialization/testing.png";
import cicdIcon from "../../assets/Specialization/ci-cd.png";
import agileIcon from "../../assets/Specialization/agile.png";
import aiIcon from "../../assets/Specialization/ia.png";
import footerShape from "../../assets/Specialization/shape-bg.png";

export default function Specialization(props) {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  useEffect(() => {
    const sub =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    return () => sub.unsubscribe();
  }, []);

  const specializationData = [
    {
      title: "Desarrollo Backend en Java",
      points: [
        "Experiencia en Java 8–21 y Spring.",
        "Implementación de APIs RESTful y microservicios.",
        "Definición de contratos API First con OpenAPI (YAML)",
      ],
      level: "Avanzado",
      percentage: 80,
      icon: javaIcon,
    },
    {
      title: "Sistemas de Bases de Datos",
      points: [
        "Experiencia en PostgreSQL, Oracle y SQL Server.",
        "Diseño y optimización de consultas complejas.",
        "Uso de Redis para cacheo y optimización.",
      ],
      level: "Intermedio",
      percentage: 60,
      icon: databaseIcon,
    },
    {
      title: "APIs REST & Diseño de Sistemas",
      points: [
        "Diseño de APIs REST escalables y mantenibles.",
        "Modelado de recursos y endpoints eficientes.",
        "Versionado y buenas prácticas.",
        "Integración entre servicios.",
      ],
      level: "Intermedio‑Avanzado",
      percentage: 75,
      icon: apiIcon,
    },
    {
      title: "Arquitectura de Microservicios",
      points: [
        "Diseño de sistemas distribuidos.",
        "Separación por dominios (DDD básico).",
        "Comunicación entre servicios REST.",
        "Principios de escalabilidad y resiliencia.",
      ],
      level: "Intermedio",
      percentage: 70,
      icon: microservicesIcon,
    },
    {
      title: "Testing & Calidad de Software",
      points: [
        "Unit testing (JUnit, Mockito).",
        "Testing de pruebas end-to-end.",
        "Uso de herramientas de calidad de software (SonarQube).",
        "Realización de pruebas Postman para validar APIs.",
      ],
      level: "Intermedio‑Avanzado",
      percentage: 75,
      icon: testingIcon,
    },
    {
      title: "CI/CD & Entornos de Desarrollo",
      points: [
        "Uso de pipelines CI/CD (Jenkins / GitLab CI).",
        "Despliegues en Docker y Kubernetes.",
        "Gestión de artefactos con Nexus.",
        "Integración de SonarQube en pipelines.",
      ],
      level: "Básico‑Intermedio",
      percentage: 50,
      icon: cicdIcon,
    },
    {
      title: "Metodologías Ágiles & Herramientas",
      points: [
        "Trabajo en entornos Agile/Scrum.",
        "Gestión de versiones con Git, GitLab y Github.",
        "Flujos de trabajo colaborativos.",
        "Revisiones de código y mejora continua.",
      ],
      level: "Avanzado",
      percentage: 85,
      icon: agileIcon,
    },
    {
      title: "Exploración de IA & LLMs",
      points: [
        "Consumo de APIs de LLMs (Claude / OpenAI).",
        "Integración de IA en aplicaciones backend.",
        "Experimentación con prompting.",
        "Aprendizaje continuo en tecnologías emergentes.",
      ],
      level: "Básico",
      percentage: 30,
      icon: aiIcon,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  return (
    <div className="specialization">
      <ScreenHeading
        title={"Áreas de Especialización"}
        subHeading={"Mis principales fortalezas y áreas de especialización"}
      />

      <section className="specialization-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <Slider {...settings}>
              {specializationData.map((item, index) => (
                <div key={index}>
                  <div className="specialization-item">
                    <div className="specialization-icon">
                      {typeof item.icon === "string" &&
                      item.icon.startsWith("http") ? (
                        <img src={item.icon} alt={item.title} />
                      ) : typeof item.icon === "string" &&
                        item.icon.endsWith(".png") ? (
                        <img src={item.icon} alt={item.title} />
                      ) : (
                        item.icon
                      )}
                    </div>

                    <h3 className="specialization-title">{item.title}</h3>

                    <ul className="specialization-points">
                      {item.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>

                    <div className="specialization-progress">
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <span className="progress-label">{item.level}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <div className="footer-image wave-shape">
        <img src={footerShape} alt="footer decoration" />
      </div>
    </div>
  );
}
