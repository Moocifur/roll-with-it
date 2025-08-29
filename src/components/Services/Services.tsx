import React, { useState } from 'react';
import { Section } from '../Layout';
import styles from './Services.module.css';
import type { ServiceCard } from '../../types';

interface ServicesProps {
  visibleElements: Set<string>;
}

/**
 * Services component with wave flow layout
 * Features: Alternating layout, hover effects, icons, responsive design
 */
const Services: React.FC<ServicesProps> = ({ visibleElements }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Service data with thoughtful icons and categorization
  const services: ServiceCard[] = [
    {
      id: 'mens-mental-health',
      title: "Men's Mental Health",
      description: "Specialized therapy designed for men who want to break through barriers, develop emotional intelligence, and create meaningful change in their lives.",
      icon: "🧠",
      category: 'therapy'
    },
    {
      id: 'dbt-therapy',
      title: "Dialectical Behavior Therapy (DBT)",
      description: "Learn practical skills for managing emotions, improving relationships, and handling stress. Perfect for those who feel overwhelmed by intense feelings.",
      icon: "⚖️",
      category: 'skills'
    },
    {
      id: 'cbt-therapy',
      title: "Cognitive Behavioral Therapy (CBT)",
      description: "Evidence-based treatment for anxiety, depression, and social challenges. We'll work together to change thought patterns that aren't serving you.",
      icon: "🎯",
      category: 'therapy'
    },
    {
      id: 'mindfulness-stress',
      title: "Mindfulness & Stress Management",
      description: "Learn to slow down, breathe, and find your center. Practical techniques for managing life's pressures without losing yourself.",
      icon: "🌊",
      category: 'skills'
    },
    {
      id: 'relationship-counseling',
      title: "Relationship Counseling",
      description: "Whether it's romantic relationships, friendships, or family dynamics, we'll help you build stronger, more authentic connections.",
      icon: "🤝",
      category: 'support'
    },
    {
      id: 'life-transitions',
      title: "Life Transitions",
      description: "Major changes can be tough. Whether it's career shifts, breakups, or life milestones, we'll help you navigate with confidence.",
      icon: "🌅",
      category: 'support'
    }
  ];

  return (
    <Section id="services" background="secondary">
      <h2 
        className={`section-title ${styles.fadeIn} ${
          visibleElements.has('services-title') ? styles.visible : ''
        }`}
        id="services-title"
        data-fade
      >
        Services
      </h2>
      
      <div className={styles.servicesIntro}>
        <p 
          className={`${styles.introText} ${styles.fadeIn} ${
            visibleElements.has('services-intro') ? styles.visible : ''
          }`}
          id="services-intro"
          data-fade
        >
          Every journey is unique. Our approach flows with your needs, offering specialized support 
          that meets you where you are and helps you find your path forward.
        </p>
      </div>

      <div className={styles.flowContainer}>
        {services.map((service, index) => {
          const isEven = index % 2 === 1;
          const isVisible = visibleElements.has(`service-${service.id}`);
          const isHovered = hoveredCard === index;
          
          return (
            <article
              key={service.id}
              className={`
                ${styles.flowItem} 
                ${isEven ? styles.flowItemReverse : ''} 
                ${styles.fadeIn} 
                ${isVisible ? styles.visible : ''}
                ${isHovered ? styles.hovered : ''}
              `}
              id={`service-${service.id}`}
              data-fade
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              role="article"
              aria-labelledby={`service-title-${service.id}`}
            >
              {/* Service Icon */}
              <div className={styles.itemIcon}>
                <span 
                  className={styles.iconContent}
                  role="img" 
                  aria-hidden="true"
                >
                  {service.icon}
                </span>
              </div>
              
              {/* Service Content */}
              <div className={styles.itemContent}>
                <h3 
                  className={styles.itemTitle}
                  id={`service-title-${service.id}`}
                >
                  {service.title}
                </h3>
                <p className={styles.itemDescription}>
                  {service.description}
                </p>
              </div>
              
              {/* Shimmer effect on hover */}
              {isHovered && (
                <div 
                  className={styles.shimmer}
                  aria-hidden="true"
                />
              )}
            </article>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className={styles.servicesFooter}>
        <p 
          className={`${styles.footerText} ${styles.fadeIn} ${
            visibleElements.has('services-footer') ? styles.visible : ''
          }`}
          id="services-footer"
          data-fade
        >
          Ready to find your flow? Let's start the conversation.
        </p>
        <button 
          className={`btn-primary ${styles.ctaButton}`}
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Get Started Today
        </button>
      </div>
    </Section>
  );
};

export default Services;