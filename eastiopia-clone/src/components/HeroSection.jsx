import React, { useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(1); // For demo, just toggle between 0 and 1
  };

  const prevSlide = () => {
    setCurrentSlide(0);
  };

  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-title">Eastiopia.Id</h1>
            <p className="hero-tagline">Your friendly sailing partner</p>
          </div>
          
          <div className="hero-navigation">
            <button className="nav-arrow nav-arrow-left" onClick={prevSlide}>
              <span className="arrow-left"></span>
            </button>
            <button className="nav-arrow nav-arrow-right" onClick={nextSlide}>
              <span className="arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
