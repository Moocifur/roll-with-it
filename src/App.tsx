import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services';
import Philosophy from './components/Philosophy/Philosophy';
import { Section } from './components/Layout';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import './App.css';


const App: React.FC = () => {
  const { visibleElements } = useIntersectionObserver();

  return (
    <div className="app">
      <Header />
      
      {/* Hero Section - Temporary */}
      <Hero />

      {/* About placeholder */}
      <About visibleElements={visibleElements} />
    

      {/* Services Section - Our beautiful wave flow! */}
      <Services visibleElements={visibleElements} />

      {/* Philosophy placeholder */}
      <Philosophy visibleElements={visibleElements} />

      {/* Contact placeholder */}
      <Section id="contact" background="white">
        <h2 className="section-title">Contact</h2>
        <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>
          Future Contact Section
        </p>
      </Section>
    </div>
  );
};

export default App;