import React from 'react';
import '../styles/HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Life is either a daring adventure or nothing at all</h1>
          <p>Progressively innovate corporate systems through technically sound functionalities. The credibly productive seamless data.</p>
          <div className="hero-details">
            <p>01-06-2024</p>
            <p>Maldives</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
