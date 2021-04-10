import React from 'react';

import napis from '../images/napis-askay.png';
import ilustracja from '../images/Illustracja.png';
import ilustracjaDestop from '../images/Illustracja-desktop.png';
import Button from '../components/Button';

import '../styles/Start.scss';

const Start = () => {
  const img = window.innerWidth < 768 ? ilustracja : ilustracjaDestop;
  return (
    <section className="start">
      <img src={napis} alt="napis ASKAY w tle" className="start__backgroundImage" />
      <div className="start__titleWrapper">
        <h1 className="start__title">
          Witamy na stronie
          <span> ASKAY</span>
        </h1>
        <h2 className="start__subtitle">
          Naszym celem jest twój
          <span> sukces!</span>
        </h2>
      </div>
      <img src={img} alt="ilustracja zespołu" className="start__ilustracja" />
      <div className="start__buttonWrapper">
        <Button content="Napisz do nas" />
        <Button content="Portfolio" />
      </div>
    </section>
  );
};

export default Start;
