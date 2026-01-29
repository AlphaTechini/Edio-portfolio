import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <p className={styles.description}>
            I’m <span className={styles.goldText}>Ediodiong Emmanuel</span>, a graphic designer who focuses on clarity, structure, and purpose. I approach design as a problem to be solved—understanding what needs to be communicated first, then deciding how it should look.
         </p>
         <p className={styles.description}>
My work covers logos, flyers, social media visuals, and promotional materials, with a strong emphasis on layout, hierarchy, and readability. I care about how people interact with a design, what they notice first, and whether the message comes through without explanation.
         </p>
         <p className={styles.description}>
I don’t design to decorate. I design to organize information, guide attention, and support the goal of the project. That mindset shapes every decision I make, from typography and spacing to color and composition.
        </p>
         <p className={styles.description}>
I’m continually refining my process and standards, aiming for work that feels deliberate, confident, and reliable—design that holds up because it’s well thought through.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;