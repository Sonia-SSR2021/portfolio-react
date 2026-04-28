import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import ScrollService from '../../../utilities/ScrollService';
import './Profile.css?v=2';

export default function Profile() {
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
              Hola, soy <span className='highlighted-text'>Sonia</span>
            </span>
          </div>

          <div className='profile-details-role'>
            <span className='primary-text'>
              {" "}
              <h1>
                <TypeAnimation
                  sequence={[
                    'Desarrolladora Java Backend 💻',
                    1000,
                    'Desarrolladora Spring Boot ⚡️',
                    1000,
                    'Desarrollo APIs REST 🌐',
                    1000,
                    'Desarrollo de Microservicios ⚙️',
                    1000,
                    'Identidad Digital Blockchain 🚀',
                    1000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  className='wrap'
                />
              </h1>
              <span className='profile-role-tagline'>
                Especializada en desarrollo backend con Java, Spring Boot y APIs REST.
              </span>
            </span>
          </div>

          <div className='profile-options'>
            <button className='btn primary-btn' onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
              {""}
              Contacto{" "}
            </button>
            <a href='sonia_soriano_cv.pdf' download='Sonia Soriano.pdf'>
              <button className='btn highlighted-btn'>Descargar CV</button>
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