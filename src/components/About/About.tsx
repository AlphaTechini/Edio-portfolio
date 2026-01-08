import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <p className={styles.description}>
            I specialize in creating exceptional <span className={styles.goldText}>logos</span> and 
            eye-catching <span className={styles.goldText}>fliers</span> that help brands 
            communicate their message effectively.
          </p>
          <p className={styles.description}>
            With a keen eye for detail and a passion for visual storytelling, 
            I transform ideas into compelling designs that resonate with audiences 
            and drive results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;