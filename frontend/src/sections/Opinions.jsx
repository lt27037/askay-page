import React from 'react';

import Opinion from '../components/Opinion';

import '../styles/Opinions.scss';

const Opinions = () => (
  <section className="opinions">
    <section className="partners">
      <h3 className="partners__title">Partnerzy</h3>
      <div className="partners__sliderBox">slider</div>
    </section>
    <h2 className="opinions__title">
      Opinie
      <span> Klientów</span>
    </h2>
    <h3 className="opinions__subtitle">Dowiedz się, co sądza o nas Klienci.</h3>
    <div className="opinions__wrapper">
      <Opinion />
      <Opinion />
      <Opinion />
    </div>
  </section>
);

export default Opinions;
