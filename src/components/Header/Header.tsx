import React, { useState, useEffect } from 'react';
import { Container } from '../Layout';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import styles from './Header.module.css';
import type { NavItem } from '../../types';

/**
 * Header component with navigation and scroll effects
 * Features: Fixed positioning, scroll detection, smooth scroll navigation
 */
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollTo } = useSmoothScroll(); // Removed unused handleAnchorClick

  // Navigation items
  const navItems: NavItem[] = [
    { label: 'Home', href: 'hero' },
    { label: 'About', href: 'about' },
    { label: 'Services', href: 'services' },
    { label: 'Philosophy', href: 'philosophy' },
    { label: 'Contact', href: 'contact' },
  ];

  // Handle scroll detection for header styling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on link
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const header = document.querySelector('[data-header]');
      if (header && !header.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    scrollTo(href);
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    scrollTo('hero');
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      data-header
    >
      <Container>
        <nav className={styles.nav}>
          {/* Logo */}
          <div className={styles.logo} onClick={handleLogoClick}>
            <div className={styles.logoCircle}>
              <div className={styles.logoWave} />
            </div>
            <span className={styles.logoText}>Roll with It</span>
          </div>

          {/* Desktop Navigation */}
          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  className={styles.navLink}
                  onClick={() => handleNavClick(item.href)}
                  type="button"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.active : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={styles.hamburger}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
          <ul className={styles.mobileNavLinks}>
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  className={styles.mobileNavLink}
                  onClick={() => handleNavClick(item.href)}
                  type="button"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;