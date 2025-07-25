import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Tour Package', href: '#tours' },
    { name: 'Phinisi Boat', href: '#boats' },
    { name: 'Destination', href: '#destinations' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Instagram Link', href: '#instagram' }
  ];

  const promotions = [
    'Open Trip 3D 2N Sailing',
    'Open Trip 2D 1N',
    'Overland 5D4N SUMBA'
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInstagramClick = () => {
    // In a real implementation, this would open Instagram
    alert('Instagram link would open here!');
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div className="container">
          {/* Instagram Gallery Section */}
          <div className="instagram-section">
            <div className="instagram-gallery">
              <div className="instagram-item">
                <img src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" alt="Instagram post" />
              </div>
              <div className="instagram-item">
                <img src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" alt="Instagram post" />
              </div>
              <div className="instagram-item">
                <img src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" alt="Instagram post" />
              </div>
              <div className="instagram-item">
                <img src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" alt="Instagram post" />
              </div>
            </div>
            <button className="instagram-btn" onClick={handleInstagramClick}>
              Follow On Instagram
            </button>
          </div>

          {/* Main Footer Content */}
          <div className="footer-main">
            <div className="footer-grid">
              {/* Company Info */}
              <div className="footer-column">
                <div className="footer-logo">
                  <div className="logo-icon">
                    <div className="boat-hull"></div>
                    <div className="boat-mast"></div>
                    <div className="boat-sail-main"></div>
                    <div className="boat-sail-front"></div>
                  </div>
                  <div className="logo-text">
                    <h3>east.iopia</h3>
                    <p>Your Unforgettable Sailing Partner</p>
                  </div>
                </div>
                <p className="company-description">
                  Whether exploring the islands of Komodo or diving in the coral-rich seas 
                  of Raja Ampat, Eastiopia ensures a remarkable journey for travelers 
                  seeking adventure, relaxation, and natural beauty.
                </p>
              </div>

              {/* Quick Links */}
              <div className="footer-column">
                <h4>Quick Link</h4>
                <ul className="footer-links">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      {link.href === '#instagram' ? (
                        <button onClick={handleInstagramClick}>{link.name}</button>
                      ) : (
                        <button onClick={() => scrollToSection(link.href)}>
                          {link.name}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Promotions */}
              <div className="footer-column">
                <h4>Promotion</h4>
                <ul className="footer-links">
                  {promotions.map((promo, index) => (
                    <li key={index}>
                      <button>{promo}</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} eastiopia. All rights reserved.</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button 
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
