import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import SingleOffer from '../components/SingleOffer';

import '../styles/Offer.scss';

const Offer = () => {
  const offer = useRef(null);
  const location = useLocation();

  useEffect(
    () => {
      if (location.pathname === '/oferta') offer.current?.scrollIntoView();
    },
    [location],
  );

  return (
    <section className="offer" ref={offer}>
      <h2 className="offer__title">
        Czym się
        <span> zajmujemy?</span>
      </h2>
      <div className="offer__wrapper">
        <SingleOffer />
        <SingleOffer />
        <SingleOffer />
        <SingleOffer />
        <SingleOffer />
        <SingleOffer />
        <SingleOffer />
        <SingleOffer />
        <SingleOffer />
      </div>
    </section>
  );
};

export default Offer;
