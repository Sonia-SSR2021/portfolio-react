//TODO: añadir las imagenes para las cards

import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
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
      title: t('specialization.items.0.title'),
      points: t('specialization.items.0.points', { returnObjects: true }),
      level: t('specialization.items.0.level'),
      percentage: 80,
      icon: javaIcon,
    },
    {
      title: t('specialization.items.1.title'),
      points: t('specialization.items.1.points', { returnObjects: true }),
      level: t('specialization.items.1.level'),
      percentage: 60,
      icon: databaseIcon,
    },
    {
      title: t('specialization.items.2.title'),
      points: t('specialization.items.2.points', { returnObjects: true }),
      level: t('specialization.items.2.level'),
      percentage: 75,
      icon: apiIcon,
    },
    {
      title: t('specialization.items.3.title'),
      points: t('specialization.items.3.points', { returnObjects: true }),
      level: t('specialization.items.3.level'),
      percentage: 70,
      icon: microservicesIcon,
    },
    {
      title: t('specialization.items.4.title'),
      points: t('specialization.items.4.points', { returnObjects: true }),
      level: t('specialization.items.4.level'),
      percentage: 75,
      icon: testingIcon,
    },
    {
      title: t('specialization.items.5.title'),
      points: t('specialization.items.5.points', { returnObjects: true }),
      level: t('specialization.items.5.level'),
      percentage: 50,
      icon: cicdIcon,
    },
    {
      title: t('specialization.items.6.title'),
      points: t('specialization.items.6.points', { returnObjects: true }),
      level: t('specialization.items.6.level'),
      percentage: 85,
      icon: agileIcon,
    },
    {
      title: t('specialization.items.7.title'),
      points: t('specialization.items.7.points', { returnObjects: true }),
      level: t('specialization.items.7.level'),
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
        title={t('specialization.title')}
        subHeading={t('specialization.subtitle')}
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
