import React from 'react';
import './BrandingSection.css';

const BrandingSection = () => {
  return (
    <section className="branding-section">
      <div className="container">
        <div className="branding-circle">
          <div className="sailing-boat">
            <div className="boat-hull"></div>
            <div className="boat-mast"></div>
            <div className="boat-sail-main"></div>
            <div className="boat-sail-front"></div>
            <div className="boat-waves">
              <div className="wave wave-1"></div>
              <div className="wave wave-2"></div>
              <div className="wave wave-3"></div>
            </div>
          </div>
          <div className="branding-text">
            <h2 className="brand-name">east.iopia</h2>
            <p className="brand-tagline">Your Unforgettable Sailing Partner</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingSection;
