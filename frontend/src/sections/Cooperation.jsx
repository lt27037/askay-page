import React from 'react';

import Button from '../components/Button';
import illustration from '../images/Illustracja_wspolpraca.png';
import illustrationDesktop from '../images/Illustracja_wspolpraca_desktop.png';

import '../styles/Cooperation.scss';

const Cooperation = () => {
  const ill = window.innerWidth < 786 ? illustration : illustrationDesktop;
  return (
    <section className="cooperation">
      <h2 className="cooperation__title">Zacznij z nami Współparcę.</h2>
      <p className="cooperation__text">
        Realizacja zlecenia przez nas to czysta przyjemność! Wysłuchujemy i bierzemy pod uwagę każdą
        sugestię i wytyczną od Klienta. Cechuje nas to, że każdy nasz Klient, to zadowolony Klient.
        Przebieg współpracy z nami jest bardzo prosty i polega na kilku
        jasnych krokach:
      </p>
      <Button content="Napisz do nas" />
      <div className="cooperation__stepWrapper">
        <p className="cooperation__step">Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.</p>
        <p className="cooperation__step">Ogólnie znana teza głosi, iż użytkownika może rozpraszać zrozumiała zawartość strony, kiedy ten chce zobaczyć sam jej wygląd. Jedną z mocnych stron używania Lorem Ipsum jest to, że ma wiele różnych „kombinacji” zdań, słów i akapitów, w przeciwieństwie do zwykłego: „tekst, tekst, tekst”, sprawiającego, że wygląda to „zbyt czytelnie” po polsku.</p>
        <p className="cooperation__step">Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.</p>
      </div>
      <img
        src={ill}
        alt="ilustracja współpracy"
        className="cooperation__illustration"
      />
    </section>
  );
};

export default Cooperation;
