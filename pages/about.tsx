import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>about me</h1>
      <p className={styles.description}>i am a 4th year computer science student at georgia tech with a focus on ai/human-computer interaction. </p>
      <p className={styles.description}>i love all things programming, developing, designing, and everything in between from the passion of computing. </p>
    </div>
  );
};

export default About;
