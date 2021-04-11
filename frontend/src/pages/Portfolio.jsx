import React from 'react';
import { motion } from 'framer-motion';

import '../styles/Portfolio.scss';

const Portfolio = () => (
  <motion.div
    className="portfolioPage"
    transition={{ duration: 0.5 }}
    initial={{ opacity: 0, transform: 'translateX(20%)' }}
    animate={{ opacity: 1, transform: 'translateX(0%)' }}
    exit={{ opacity: 0, transform: 'translateX(20%)' }}
  >
    Portfolio
  </motion.div>
);

export default Portfolio;
