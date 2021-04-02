import React from 'react';

import icon from '../images/outline_facebook_white_24dp.png';
import background from '../images/footer-background.png';

import '../styles/Footer.scss';

const Footer = () => (
  <footer className="footer">
    <img src={background} alt="ilustracja w tle" className="footer__background" />
    <h2 className="footer__title">Skontaktuj się z nami.</h2>
    <h3 className="footer__subtitle">Askay Studio</h3>
    <section className="footer__department">
      <h3 className="footer__department__name">Dział Graficzny</h3>
      <span className="footer__department__text">Marek Trela</span>
      <span className="footer__department__text">grafika@askay.eu</span>
      <span className="footer__department__text">+48 588 695 547</span>
    </section>
    <section className="footer__department">
      <h3 className="footer__department__name">Dział Marketingu</h3>
      <span className="footer__department__text">Jowan Koleczko</span>
      <span className="footer__department__text">marketing@askay.eu</span>
      <span className="footer__department__text">+48 658 412 569</span>
    </section>
    <h3 className="footer__subtitle">Social Media</h3>
    <section className="footer__social">
      <span className="footer__social__item">
        <img
          src={icon}
          alt="Ikona media społecznościowe"
          className="footer__social__icon"
        />
        @forsaken_ig
      </span>
      <span className="footer__social__item">
        <img
          src={icon}
          alt="Ikona media społecznościowe"
          className="footer__social__icon"
        />
        @forsaken_fb
      </span>
      <span className="footer__social__item">
        <img
          src={icon}
          alt="Ikona media społecznościowe"
          className="footer__social__icon"
        />
        @forsaken_be
      </span>
      <span className="footer__social__item">
        <img
          src={icon}
          alt="Ikona media społecznościowe"
          className="footer__social__icon"
        />
        @forsaken_dr
      </span>
    </section>
  </footer>
);

export default Footer;
