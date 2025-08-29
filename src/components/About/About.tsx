import React from 'react';
import { Section } from '../Layout';
import styles from './About.module.css';

interface AboutProps {
  visibleElements: Set<string>;
}

/**
 * About component with two-column layout
 * Features: Text content, credentials box, quote display, responsive design
 */
const About: React.FC<AboutProps> = ({ visibleElements }) => {
  return (
    <Section id="about" background="primary">
      <h2 
        className={`section-title ${styles.fadeIn} ${
          visibleElements.has('about-title') ? styles.visible : ''
        }`}
        id="about-title"
        data-fade
      >
        About Roll with It
      </h2>
      
      <div className={styles.aboutContent}>
        <div className={`${styles.aboutText} ${styles.fadeIn} ${
          visibleElements.has('about-text') ? styles.visible : ''
        }`}
        id="about-text"
        data-fade>
          <p>
            Welcome to a different kind of therapy experience. At Roll with It, we believe that healing happens when you're ready, not when the world expects you to be. Our approach blends evidence-based therapeutic techniques with the laid-back wisdom of Southern California beach culture.
          </p>
          
          <p>
            We specialize in men's mental health, understanding that guys often need a different approach to opening up and working through life's challenges. Whether you're dealing with anxiety, depression, relationship issues, or just feeling stuck, we're here to help you find your flow.
          </p>
          
          <div className={styles.credentials}>
            <h3>Professional Credentials</h3>
            <p><strong>AMFT</strong> - Associate Marriage & Family Therapist</p>
            <p>Located in Piñon Hills, California</p>
            <p>Specializing in DBT, CBT, and Mindfulness-Based Approaches</p>
          </div>
        </div>
        
        <div className={`${styles.aboutImage} ${styles.fadeIn} ${
          visibleElements.has('about-image') ? styles.visible : ''
        }`}
        id="about-image"
        data-fade>
          <div className={styles.quoteBox}>
            <blockquote>
              "Self-care is not selfish;<br />it's essential"
            </blockquote>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;