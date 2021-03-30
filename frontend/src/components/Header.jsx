import React from 'react';

import logo from '../images/Askay-logo-final 1.png';

import '../styles/Header.scss';

const Header = () => (
  <header className="mainHeader">
    <img src={logo} alt="Logo askay" className="mainHeader__logo" />
    <button className="mainHeader__menuButton" type="button">
      <span className="mainHeader__menuButton__span" />
    </button>
  </header>
);

export default Header;
