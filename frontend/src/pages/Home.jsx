import React from 'react';
import { motion } from 'framer-motion';

import Start from '../sections/Start';
import Offer from '../sections/Offer';
import About from '../sections/About';
import Cooperation from '../sections/Cooperation';
import Portfolio from '../sections/Portfolio';
import Opinions from '../sections/Opinions';
import Footer from '../sections/Footer';

import '../styles/Home.scss';

const Home = () => (
  // eslint-disable-next-line react/jsx-pascal-case
  <motion.div
    className="home"
    transition={{ duration: 0.5 }}
    initial={{ opacity: 0, transform: 'translateX(-20%)' }}
    animate={{ opacity: 1, transform: 'translateX(0%)' }}
    exit={{ opacity: 0, transform: 'translateX(-20%)' }}
  >
    <Start />
    <Offer />
    <About />
    <Cooperation />
    <Portfolio />
    <Opinions />
    <Footer />
  </motion.div>
);

export default Home;
