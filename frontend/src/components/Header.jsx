import React from 'react';

import { ReactComponent as Logo } from '../images/Askay-logo-final 1.svg';

import '../styles/Header.scss';

const Header = () => (
  <header className="mainHeader">
    <Logo className="mainHeader__logo" />
    <button className="mainHeader__menuButton" type="button">
      <span className="mainHeader__menuButton__span" />
    </button>
  </header>
);

export default Header;
