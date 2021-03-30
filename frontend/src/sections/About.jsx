import React from 'react';

import askayNapis from '../images/napis-askay.png';
import illustration from '../images/Illustracja_about.png';
import TeamButton from '../components/TeamButton';

import '../styles/About.scss';

const About = () => (
  <div className="about">
    <img src={askayNapis} alt="" className="about__backgroundImg" />
    <h2 className="about__title">Kim jesteśmy?</h2>
    <p className="about__text">Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker </p>
    <img src={illustration} alt="illustracja zespołu" className="about__img" />
    <TeamButton />
    <div className="about__wrapper">
      <span className="about__data">
        <h3 className="about__data__title">projektów</h3>
        <span className="about__data__value">+100</span>
      </span>
      <span className="about__data">
        <h3 className="about__data__title">Współprac</h3>
        <span className="about__data__value">+100</span>
      </span>
      <span className="about__data">
        <h3 className="about__data__title">Zadowolonych klientów</h3>
        <span className="about__data__value">+100</span>
      </span>
    </div>
  </div>
);

export default About;
