import React from 'react';
import styles from './Container.module.css';
import type { ContainerProps } from '../../types';

/**
 * Container component for consistent max-width and centering
 * Used across all sections for consistent layout
 */
const Container: React.FC<ContainerProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {children}
    </div>
  );
};

export default Container;