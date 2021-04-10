import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as Logo } from '../images/Askay-logo-final 1.svg';

import '../styles/Header.scss';

const Header = () => (
  <header className="mainHeader">
    <Logo className="mainHeader__logo" />
    <button className="mainHeader__menuButton" type="button">
      <span className="mainHeader__menuButton__span" />
    </button>
    <nav className="meniHeader__menu">
      <ul className="mainHeader__menu__list">
        <li className="mainHeader__menu__item">
          <NavLink to="/" exact>Strona Główna</NavLink>
        </li>
        <li className="mainHeader__menu__item">
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li className="mainHeader__menu__item">
          <NavLink to="/oferta">Oferta</NavLink>
        </li>
        <li className="mainHeader__menu__item">
          <NavLink to="/o-nas">O nas</NavLink>
        </li>
        <li className="mainHeader__menu__item">
          <NavLink to="/kontakt">Kontakt</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
