import { useCallback } from 'react';

interface SmoothScrollOptions {
  behavior?: 'smooth' | 'auto';
  block?: 'start' | 'center' | 'end' | 'nearest';
  inline?: 'start' | 'center' | 'end' | 'nearest';
  offset?: number; // Additional offset for fixed headers
}

/**
 * Custom hook for smooth scrolling to elements
 * Handles fixed header offset automatically
 */
export const useSmoothScroll = () => {
  const scrollTo = useCallback((
    elementId: string, 
    options: SmoothScrollOptions = {}
  ) => {
    const {
      behavior = 'smooth',
      block = 'start',
      offset = 80 // Default offset for fixed header
    } = options;

    const element = document.getElementById(elementId);
    
    if (!element) {
      console.warn(`Element with id "${elementId}" not found`);
      return;
    }

    // Get element position
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    // Use native scrollTo with offset
    window.scrollTo({
      top: offsetPosition,
      behavior
    });
  }, []);

  // Scroll to top utility
  const scrollToTop = useCallback((behavior: 'smooth' | 'auto' = 'smooth') => {
    window.scrollTo({
      top: 0,
      behavior
    });
  }, []);

  // Handle anchor clicks automatically
  const handleAnchorClick = useCallback((
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    
    if (href && href.startsWith('#')) {
      const elementId = href.substring(1);
      scrollTo(elementId);
    }
  }, [scrollTo]);

  return {
    scrollTo,
    scrollToTop,
    handleAnchorClick
  };
};