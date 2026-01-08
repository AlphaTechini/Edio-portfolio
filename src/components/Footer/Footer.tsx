import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.credit}>
          Made with ❤️ by{' '}
          <a 
            href="https://emmafidel.xyz" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.link}
          >
            Emma
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;