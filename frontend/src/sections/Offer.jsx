import React from 'react';

import SingleOffer from '../components/SingleOffer';

import '../styles/Offer.scss';

const Offer = () => (
  <section className="offer">
    <h2 className="offer__title">Czym się zajmujemy?</h2>
    <div className="offer__wrapper">
      <SingleOffer />
      <SingleOffer />
      <SingleOffer />
    </div>
  </section>
);

export default Offer;
