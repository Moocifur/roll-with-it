import React from 'react';
import styles from './Section.module.css';
import Container from './Container';
import type { SectionProps } from '../../types';

/**
 * Section wrapper component for consistent spacing and structure
 * Automatically includes Container unless specified otherwise
 */
interface ExtendedSectionProps extends SectionProps {
  background?: 'primary' | 'secondary' | 'gradient' | 'white';
  padding?: 'small' | 'medium' | 'large' | 'none';
  containerless?: boolean; // Skip the Container wrapper
}

const Section: React.FC<ExtendedSectionProps> = ({
  id,
  className = '',
  background = 'primary',
  padding = 'medium',
  containerless = false,
  children
}) => {
  const sectionClasses = [
    styles.section,
    styles[`background-${background}`],
    styles[`padding-${padding}`],
    className
  ].filter(Boolean).join(' ');

  const content = containerless ? children : <Container>{children}</Container>;

  return (
    <section id={id} className={sectionClasses}>
      {content}
    </section>
  );
};

export default Section;