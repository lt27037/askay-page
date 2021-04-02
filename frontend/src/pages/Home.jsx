import React from 'react';

import Header from '../components/Header';
import Start from '../sections/Start';
import Offer from '../sections/Offer';
import About from '../sections/About';
import Cooperation from '../sections/Cooperation';
import Portfolio from '../sections/Portfolio';
import Opinions from '../sections/Opinions';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

import '../styles/Home.scss';

const Home = () => (
  <div className="home">
    <Header />
    <Start />
    <Offer />
    <About />
    <Cooperation />
    <Portfolio />
    <Opinions />
    <Contact />
    <Footer />
  </div>
);

export default Home;
