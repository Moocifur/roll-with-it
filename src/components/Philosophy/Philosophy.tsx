import React from 'react';
import { Section } from '../Layout';
import styles from './Philosophy.module.css';

interface PhilosophyItem {
  title: string;
  description: string;
}

interface PhilosophyProps {
  visibleElements: Set<string>;
}

/**
 * Philosophy component with gradient background and grid layout
 * Features: Glass-morphism cards, responsive grid, fade-in animations
 */
const Philosophy: React.FC<PhilosophyProps> = ({ visibleElements }) => {
  const philosophyItems: PhilosophyItem[] = [
    {
      title: "Flow > Force",
      description: "Real change happens naturally, not through pressure or force. We work with your natural rhythm."
    },
    {
      title: "Roll with Life",
      description: "Like a surfer reading the waves, we'll help you learn to adapt and flow with life's ups and downs."
    },
    {
      title: "Heal at Your Pace",
      description: "There's no timeline for healing. We meet you where you are and move forward when you're ready."
    },
    {
      title: "Authentic Connection",
      description: "Therapy works best when you feel truly seen and understood. We create a space where you can be real."
    }
  ];

  return (
    <Section id="philosophy" background="gradient">
      <h2 
        className={`${styles.sectionTitle} ${styles.fadeIn} ${
          visibleElements.has('philosophy-title') ? styles.visible : ''
        }`}
        id="philosophy-title"
        data-fade
      >
        Our Philosophy
      </h2>
      
      <div className={styles.philosophyGrid}>
        {philosophyItems.map((item, index) => (
          <div
            key={index}
            className={`${styles.philosophyItem} ${styles.fadeIn} ${
              visibleElements.has(`philosophy-${index}`) ? styles.visible : ''
            }`}
            id={`philosophy-${index}`}
            data-fade
          >
            <h3 className={styles.philosophyItemTitle}>{item.title}</h3>
            <p className={styles.philosophyItemDescription}>{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Philosophy;