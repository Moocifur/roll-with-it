// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

// Service Types
export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'therapy' | 'skills' | 'support';
}

// Philosophy Types
export interface PhilosophyItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

// Contact Types
export interface ContactItem {
  id: string;
  title: string;
  description: string;
  action?: ContactAction;
}

export interface ContactAction {
  type: 'button' | 'link' | 'phone' | 'email';
  text: string;
  href?: string;
  onClick?: () => void;
}

// Animation Types
export interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

// Hook Types
export interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
}

export interface UseIntersectionObserverReturn {
  visibleElements: Set<string>;
  observe: (element: Element) => void;
  unobserve: (element: Element) => void;
}

// Component Props
export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

// Theme Types
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

// Responsive breakpoint types
export type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'wide';

export interface ResponsiveValue<T> {
  mobile?: T;
  tablet?: T;
  desktop?: T;
  wide?: T;
}