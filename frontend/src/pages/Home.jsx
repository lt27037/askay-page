import React from 'react';

import Header from '../components/Header';
import Start from '../sections/Start';
import Offer from '../sections/Offer';
import About from '../sections/About';

import '../styles/Home.scss';

const Home = () => (
  <div className="home">
    <Header />
    <Start />
    <Offer />
    <About />
  </div>
);

export default Home;
