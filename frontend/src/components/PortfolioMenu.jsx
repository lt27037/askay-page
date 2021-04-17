import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/PortfolioMenu.scss';

const PortfolioMenu = () => (
  <nav className="portfolioMenu">
    <ul className="portfolioMenu__list">
      <li className="portfolioMenu__item">
        <NavLink to="/portfolio" exact>
          All
        </NavLink>
      </li>
      <li className="portfolioMenu__item">
        <NavLink to="/portfolio/logo">
          Logo
        </NavLink>
      </li>
      <li className="portfolioMenu__item">
        <NavLink to="/portfolio/mascot">
          Mascot Logo
        </NavLink>
      </li>
      <li className="portfolioMenu__item">
        <NavLink to="/portfolio/identyfikacja-wizualna">
          Identyfikacja Wizualna
        </NavLink>
      </li>
      <li className="portfolioMenu__item">
        <NavLink to="/portfolio/web-design">
          Web, UX/UI Design
        </NavLink>
      </li>
      <li className="portfolioMenu__item">
        <NavLink to="/portfolio/social-media">
          Social Media
        </NavLink>
      </li>
      <li className="portfolioMenu__item">
        <NavLink to="/portfolio/druk-reklamy">
          Druk, Reklamy
        </NavLink>
      </li>
      <li className="portfolioMenu__item">
        <NavLink to="/portfolio/ilustracje">
          Ilustracje
        </NavLink>
      </li>
      <li className="portfolioMenu__item">
        <NavLink to="/portfolio/inne">
          Inne...
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default PortfolioMenu;
