import React from 'react';
import './Footer.scss';

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container__card">
          Logo
        </div>
        <div className="footer__container__card">
          <h3>
            Contact Info
          </h3>
          <a>
            1481 Creekside Lane
            Avila Beach, CA 931
          </a>
          <a href="tell:" rel="noreferrer" target="_blank">+53 345 7953 32453</a>
          <a href="tell:" rel="noreferrer" target="_blank">yourmail@gmail.com</a>

        </div>
        <div className="footer__container__card">
          <h3>
            Graphic Design
          </h3>
          <a>Applied Studies</a>
          <a>Software Engeneering</a>
          <a>Informational Engeneering</a>
          <a>System Engeneering</a>
          <a>Computer Engeneering</a>
        </div>
        <div className="footer__container__card">
          <h3>
            Engeneering
          </h3>
          <a>Applied Studies</a>
          <a>Software Engeneering</a>
          <a>Informational Engeneering</a>
          <a>System Engeneering</a>
          <a>Computer Engeneering</a>
        </div>

      </div>
      <div className="footer__footer">
        <div className='footer__footer__container'>
          <div className="footer__container__footer__item">
            <p>
              Copyright ©2022 All rights reserved | This template is made with
              <i className="fa fa-heart-o" aria-hidden="true"></i>
              <a>KGD</a>
            </p>
          </div>
          <div className="footer__container__footer__list">
            <p>
              <a>Terms & Condition</a> |
              <a>Register</a> |
              <a>Privacy</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;