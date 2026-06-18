import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css?v=2";

export default function AboutMe(props) {
  const { t } = useTranslation();
  const cvFile = t('common.cvFile');
  const cvDownloadName = t('common.cvDownloadName');
  const cvUrl = `${process.env.PUBLIC_URL}/${cvFile}`;

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

  const renderHighlight = () => {
    const bullets = t('about.bullets', { returnObjects: true });
    return bullets.map((value, i) => (
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
        <ScreenHeading title={t('about.title')} subHeading={t('about.subtitle')} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {t('about.description')}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{t('about.highlights')}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {t('common.contactButton')}
              </button>
              <a href={cvUrl} download={cvDownloadName}>
                <button className="btn highlighted-btn">{t('common.downloadCV')}</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
