import React from 'react';

import img from '../images/ikona.png';

import '../styles/SingleOffer.scss';

// eslint-disable-next-line react/prop-types
const SingleOffer = () => (
  <div className="singleOffer">
    <img src={img} alt="ikona oferty" className="singleOffer__img" />
    <div className="singleOffer__wrapper">
      <h3 className="singleOffer__title">Grafika Komputerowa</h3>
      <p className="singleOffer__text">Nasza grafika komputerowa w możliwie najtrafniejszy sposób obrazuje funkcję Twojej firmy w społeczeństwie i życiu potencjalnych klientów.</p>
    </div>
  </div>
);

export default SingleOffer;
