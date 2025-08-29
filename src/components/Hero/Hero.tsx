import React, { useState } from 'react';
import styles from './Hero.module.css';

interface HeroProps {
  onCtaClick?: () => void;
}

/**
 * Hero component with full viewport height and gradient background
 * Features: Centered content, CTA button with hover effects, smooth scroll integration
 */
const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const [buttonHover, setButtonHover] = useState(false);

  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      // Default behavior - scroll to contact section
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Counseling with SoCal Soul
        </h1>
        <p className={styles.heroTagline}>
          Roll with life, heal at your pace
        </p>
        <button
          className={`${styles.ctaButton} ${buttonHover ? styles.ctaButtonHover : ''}`}
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
          onClick={handleCtaClick}
        >
          Start Your Journey
        </button>
      </div>
    </section>
  );
};

export default Hero;