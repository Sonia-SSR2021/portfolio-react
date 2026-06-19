//TODO Doc
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css?v=2";

export default function Resume(props) {
  const { t } = useTranslation();
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
    { label: t('resume.sections.education'), logoSrc: "education.svg" },
    { label: t('resume.sections.experience'), logoSrc: "work-history.svg" },
    { label: t('resume.sections.skills'), logoSrc: "programming-skills.svg" },
    { label: t('resume.sections.projects'), logoSrc: "projects.svg" },
    { label: t('resume.sections.interests'), logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: t('resume.skills.java'), ratingPercentage: 75 },
    { skill: t('resume.skills.springboot'), ratingPercentage: 65 },
    { skill: t('resume.skills.postgresql'), ratingPercentage: 60 },
    { skill: t('resume.skills.git'), ratingPercentage: 70 },
    { skill: t('resume.skills.restapis'), ratingPercentage: 70 },
    { skill: t('resume.skills.testing'), ratingPercentage: 60 },
    { skill: t('resume.skills.maven'), ratingPercentage: 65 },
    { skill: t('resume.skills.springdatajpa'), ratingPercentage: 70 },
    { skill: t('resume.skills.microservices'), ratingPercentage: 60 },
  ];

  const projectsDetails = [
    {
      title: t('resume.projects.project_portfolio'),
      duration: { fromDate: t('resume.projects.project_portfolio_from_dates'), toDate: t('resume.projects.project_portfolio_to_dates')},
      description: t('resume.projects.project_portfolio_desc'),
      subHeading: t('resume.projects.project_portfolio_tech'),
    },
    {
      title: t('resume.projects.project_Alava'),
      duration: { fromDate: t('resume.projects.project_Alava_from_dates'), toDate: t('resume.projects.project_Alava_to_dates') },
      description: t('resume.projects.project_Alava_desc'),
      subHeading: t('resume.projects.project_Alava_tech'),
    },
    {
      title: t('resume.projects.project_dalion'),
      duration: { fromDate: t('resume.projects.project_dalion_from_dates'), toDate: t('resume.projects.project_dalion_to_dates') },
      description: t('resume.projects.project_dalion_desc'),
      subHeading: t('resume.projects.project_dalion_tech'),
    },
    {
      title: t('resume.projects.project_etnic'),
      duration: { fromDate: t('resume.projects.project_etnic_from_dates'), toDate: t('resume.projects.project_etnic_to_dates') },
      description: t('resume.projects.project_etnic_desc'),
      subHeading: t('resume.projects.project_etnic_tech'),
    },
    {
      title: t('resume.projects.project_banking'),
      duration: { fromDate: t('resume.projects.project_banking_from_dates'), toDate: t('resume.projects.project_banking_to_dates') },
      description: t('resume.projects.project_banking_desc'),
      subHeading: t('resume.projects.project_banking_tech'),
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={t('resume.education.school1')}
        subHeading={t('resume.education.school1_degree')}
        fromDate={t('resume.education.school1_from_dates')}
        toDate={t('resume.education.school1_to_dates')}
      />
      <ResumeHeading
        heading={t('resume.education.university1')}
        subHeading={t('resume.education.university1_degree')}
        fromDate={t('resume.education.university1_from_dates')}
        toDate={t('resume.education.university1_to_dates')}
      />
      <ResumeHeading
        heading={t('resume.education.university2')}
        subHeading={t('resume.education.university2_degree')}
        fromDate={t('resume.education.university2_from_dates')}
        toDate={t('resume.education.university2_to_dates')}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={t('resume.experience.company1')}
        subHeading={t('resume.experience.company1_position')}
        fromDate={t('resume.experience.company1_from_dates')}
        toDate={t('resume.experience.company1_to_dates')}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          {t('resume.experience.company1_desc')}
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          {t('resume.experience.company1_details.0')}
        </span>
        <br />
        <span className="resume-description-text">
          {t('resume.experience.company1_details.1')}
        </span>
        <br />
        <span className="resume-description-text">
          {t('resume.experience.company1_details.2')}
        </span>
        <br />
        <span className="resume-description-text">
          {t('resume.experience.company1_details.3')}
        </span>
      </div>
      <ResumeHeading
        heading={t('resume.experience.company2')}
        subHeading={t('resume.experience.company2_position')}
        fromDate={t('resume.experience.company2_from_dates')}
        toDate={t('resume.experience.company2_to_dates')}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          {t('resume.experience.company2_desc')}
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          {t('resume.experience.company2_details.0')}
        </span>
        <br />
        <span className="resume-description-text">
          {t('resume.experience.company2_details.1')}
        </span>
        <br />
        <span className="resume-description-text">
          {t('resume.experience.company2_details.2')}
        </span>
      </div>
      <ResumeHeading
        heading={t('resume.experience.company3')}
        subHeading={t('resume.experience.company3_position')}
        fromDate={t('resume.experience.company3_from_dates')}
        toDate={t('resume.experience.company3_to_dates')}
      />
      <ResumeHeading
        heading={t('resume.experience.company4')}
        subHeading={t('resume.experience.company4_position')}
        fromDate={t('resume.experience.company4_from_dates')}
        toDate={t('resume.experience.company4_to_dates')}
      />
      <ResumeHeading
        heading={t('resume.experience.company5')}
        subHeading={t('resume.experience.company5_position')}
        fromDate={t('resume.experience.company5_from_dates')}
        toDate={t('resume.experience.company5_to_dates')}
      />
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills">
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
        heading={t('resume.interests.interest1')}
        description={t('resume.interests.interest1_desc')}
      />
      <ResumeHeading
        heading={t('resume.interests.interest2')}
        description={t('resume.interests.interest2_desc')}
      />
      <ResumeHeading
        heading={t('resume.interests.interest3')}
        description={t('resume.interests.interest3_desc')}
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

    // Reset all tab scrolls so each section starts from top when revisited.
    const scrollContainers = document.querySelectorAll(".resume-screen-container");
    scrollContainers.forEach((container) => {
      container.scrollTop = 0;
    });
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
          title={t('resume.title')}
          subHeading={t('resume.subtitle')}
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
