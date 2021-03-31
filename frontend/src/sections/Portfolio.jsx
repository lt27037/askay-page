import React from 'react';

import photo from '../images/mountainash-9H6PHAs-cAc-unsplash.jpg';
import Button from '../components/Button';

import '../styles/PortfolioSection.scss';

const Portfolio = () => (
  <section className="portfolio">
    <h2 className="portfolio__title">Nasze Realizacje</h2>
    <div className="portfolio__wrapper">
      <div className="portfolio__item">
        <img
          src={photo}
          alt="zdjęcie z portfolio"
          className="portfolio__item__img"
        />
      </div>
      <div className="portfolio__item">
        <img
          src={photo}
          alt="zdjęcie z portfolio"
          className="portfolio__item__img"
        />
      </div>
      <div className="portfolio__item">
        <img
          src={photo}
          alt="zdjęcie z portfolio"
          className="portfolio__item__img"
        />
      </div>
      <div className="portfolio__item">
        <img
          src={photo}
          alt="zdjęcie z portfolio"
          className="portfolio__item__img"
        />
      </div>
    </div>
    <Button content="Zobacz więcej" />
  </section>
);

export default Portfolio;
