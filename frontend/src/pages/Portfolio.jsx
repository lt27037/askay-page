import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';

import PortfolioMenu from '../components/PortfolioMenu';

import '../styles/Portfolio.scss';

const Portfolio = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(
    async () => {
      try {
        const res = await fetch('https://picsum.photos/v2/list?page=2&limit=100');
        const data = await res.json();
        const urls = data.map((item) => <img key={item.id} src={`${item.download_url}`} className="portfolioPage__image" alt="element galerii" />);
        setPhotos(urls);
      } catch (err) {
        console.error(err);
      }
    },
    [],
  );

  console.log(photos);

  const breakpointColumnsObj = {
    default: 5,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <motion.div
      className="portfolioPage"
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, transform: 'translateX(20%)' }}
      animate={{ opacity: 1, transform: 'translateX(0%)' }}
      exit={{ opacity: 0, transform: 'translateX(20%)' }}
    >
      <header className="portfolioPage__header">
        <h1 className="portfolioPage__title">Realizacje</h1>
        <h3 className="portfolioPage__subtitle">Zobacz nasze portfolio i przekonaj się, że warto z nami współpracować! </h3>
        <PortfolioMenu />
        <div className="portfolioPage__container">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {photos || null}
          </Masonry>
        </div>
      </header>
    </motion.div>
  );
};

export default Portfolio;
