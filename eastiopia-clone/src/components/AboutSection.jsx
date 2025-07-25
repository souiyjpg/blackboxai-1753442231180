import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h3 className="section-subtitle">Get To Know Us</h3>
            <h2 className="section-title">Explore All Tour Of The World With Us.</h2>
            <div className="title-underline"></div>
            <p className="section-description">
              Eastiopia is a travel company specializing in phinisi boat tours to the breathtaking 
              destinations of Komodo and Raja Ampat. Offering a unique blend of adventure and 
              luxury, Eastiopia provides unforgettable voyages through Indonesia's pristine waters, 
              showcasing stunning landscapes, vibrant marine life, and rich cultural experiences. 
              Whether exploring the islands of Komodo or diving in the coral-rich seas of Raja 
              Ampat, Eastiopia ensures a remarkable journey for travelers seeking adventure, 
              relaxation, and natural beauty.
            </p>
          </div>
          <div className="about-image">
            <img 
              src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
              alt="Phinisi boat aerial view"
              loading="lazy"
            />
            <div className="image-overlay">
              <div className="play-button">
                <div className="play-icon"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
