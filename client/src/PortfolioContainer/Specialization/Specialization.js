//TODO: añadir las imagenes para las cards

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Specialization.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function Specialization(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const specializationData = [
    {
      title: "Desarrollo Backend en Java",
      points: [
        "Experiencia en Java 8–21 y Spring.",
        "Implementación de APIs RESTful y microservicios.",
        "Optimización de rendimiento y eficiencia.",
      ],
      level: "Avanzado",
      percentage: 80,
      icon: "🖥️",
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
      icon: "🗄️",
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
      icon: "🗄️",
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
      icon: "🗄️",
    },
    {
      title: "Testing & Calidad de Software",
      points: [
        "Unit testing (JUnit, Mockito).",
        "Testing de integración y pruebas end-to-end.",
        "Uso de herramientas de calidad de software.",
        "Realización de pruebas Postman para validar APIs.",
      ],
      level: "Intermedio‑Avanzado",
      percentage: 75,
      icon: "🗄️",
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
      icon: "🗄️",
    },
    {
      title: "Metodologías Ágiles & Herramientas",
      points: [
        "Trabajo en entornos Agile/Scrum.",
        "Gestión de tareas (Jira) y documentación técnica (Confluence).",
        "Gestión de versiones con Git, GitLab y Github.",
        "Flujos de trabajo colaborativos (branching, merge requests)",
        "Revisiones de código y mejora continua.",
      ],
      level: "Avanzado",
      percentage: 85,
      icon: " ⚡",
    },
    {
      title: "Exploración de IA & LLMs",
      points: [
        "Consumo de APIs de LLMs (Claude / OpenAI).",
        "Integración de IA en aplicaciones backend.",
        "Experimentación con prompting básico.",
        "Casos de uso: automatización y asistentes.",
        "Aprendizaje continuo en tecnologías emergentes.",
      ],
      level: "Básico",
      percentage: 30,
      icon: " ⚡",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    responsive: [
      {
        breakpoint: 992, // tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // móviles
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="specialization">
      <ScreenHeading
        title={"Áreas de Especialización"}
        subHeading={"Mis principales fortalezas y áreas de expertise"}
      />

      <section className="specialization-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <Slider {...settings}>
              {specializationData.map((item, index) => (
                <div key={index} className="specialization-item">
                  <div className="specialization-icon">{item.icon}</div>

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
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}
