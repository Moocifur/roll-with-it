import { useState, useEffect, useCallback } from 'react';
import type { UseIntersectionObserverOptions, UseIntersectionObserverReturn } from '../types';

/**
 * Custom hook for tracking element visibility using Intersection Observer
 * Useful for animations and lazy loading
 */
export const useIntersectionObserver = (
  options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverReturn => {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  
  // Default options with sensible defaults
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px'
  } = options;

  const observe = useCallback((element: Element) => {
    if (!element.id) {
      console.warn('Element must have an id to be observed');
      return;
    }

    const observerOptions: IntersectionObserverInit = {
      threshold,
      rootMargin
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleElements(prev => new Set(prev).add(entry.target.id));
          // Optionally unobserve after first intersection for performance
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    observer.observe(element);

    // Return cleanup function
    return () => observer.unobserve(element);
  }, [threshold, rootMargin]);

  const unobserve = useCallback((element: Element) => {
    setVisibleElements(prev => {
      const newSet = new Set(prev);
      newSet.delete(element.id);
      return newSet;
    });
  }, []);

  // Auto-observe elements with data-fade attribute on mount
  useEffect(() => {
    const elements = document.querySelectorAll('[data-fade]');
    const cleanupFunctions: Array<(() => void) | undefined> = [];

    elements.forEach(element => {
      if (element.id) {
        const cleanup = observe(element);
        cleanupFunctions.push(cleanup);
      }
    });

    // Cleanup on unmount
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup?.());
    };
  }, [observe]);

  return {
    visibleElements,
    observe,
    unobserve
  };
};