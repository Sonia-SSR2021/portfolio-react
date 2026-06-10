import React from 'react';
import { useTranslation } from 'react-i18next';
import { TypeAnimation } from 'react-type-animation';
import ScrollService from '../../../utilities/ScrollService';
import './Profile.css?v=2';

export default function Profile() {
  const { t } = useTranslation();

  const roleSequence = [
    t('home.roles.backend'),
    1000,
    t('home.roles.springboot'),
    1000,
    t('home.roles.apis'),
    1000,
    t('home.roles.microservices'),
    1000,
    t('home.roles.blockchain'),
    1000,
  ];

  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
            <a href='https://www.linkedin.com/in/sonia-soriano-rodr%C3%ADguez/'>
              <i className='fa fa-linkedin'></i>
            </a>
            <a href='https://github.com/Sonia-SSR2021'>
              <i className='fa fa-github'></i>
            </a>
            </div>
          </div>

          <div className='profile-details-name'>
            <span className='primary-text'>
              {" "}
              {t('home.greeting')} <span className='highlighted-text'>{t('home.name')}</span>
            </span>
          </div>

          <div className='profile-details-role'>
            <span className='primary-text'>
              {" "}
              <h1>
                <TypeAnimation
                  sequence={roleSequence}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  className='wrap'
                />
              </h1>
              <span className='profile-role-tagline'>
                {t('home.tagline')}
              </span>
            </span>
          </div>

          <div className='profile-options'>
            <button className='btn primary-btn' onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
              {""}
              {t('home.contactButton')}{" "}
            </button>
            <a href='sonia_soriano_cv.pdf' download='Sonia Soriano.pdf'>
              <button className='btn highlighted-btn'>{t('home.downloadCV')}</button>
            </a>
            </div>
          </div>

        <div className='profile-picture'>
          <div className='profile-picture-background'>

          </div>
        </div>
      </div>
    </div>
  );
}