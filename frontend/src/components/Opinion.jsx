import React from 'react';

import avatar from '../images/opinion-avatar.png';

import '../styles/OpinionComponent.scss';

const Opinion = () => (
  <div className="opinion">
    <img src={avatar} alt="Zdjęcie klienta" className="opinion__avatar" />
    <span className="opinion__name">Jan Kowalski</span>
    <span className="opinion__info">GreatStudio.pl, Polska</span>
    <p className="opinion__text">Jest dostępnych wiele różnych wersji Lorem Ipsum, ale większość zmieniła się pod wpływem dodanego humoru czy przypadkowych słów, które nawet w najmniejszym stopniu nie przypominają istniejących.</p>
  </div>
);

export default Opinion;
