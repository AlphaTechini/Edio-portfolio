import React from 'react';
import { ProjectGallery } from '../';
import styles from './Portfolio.module.css';

const Portfolio: React.FC = () => {
  return (
    <div id="portfolio" className={styles.portfolio}>
      <ProjectGallery />
    </div>
  );
};

export default Portfolio;