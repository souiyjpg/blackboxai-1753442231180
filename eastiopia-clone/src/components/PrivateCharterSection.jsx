import React from 'react';
import './PrivateCharterSection.css';

const PrivateCharterSection = () => {
  const privateCharters = [
    {
      id: 1,
      name: 'Private Charter Standar Phinisi',
      duration: '1 - 4 Days Tours',
      type: 'Private Trip',
      price: 'From IDR 19,250 K',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      features: ['Standard Amenities', 'Professional Crew', 'Flexible Itinerary']
    },
    {
      id: 2,
      name: 'Private Charter Superior Phinisi',
      duration: '1 - 4 Days Tours',
      type: 'Private Trip',
      price: 'From IDR 37,400 K',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      features: ['Superior Comfort', 'Premium Service', 'Gourmet Meals']
    },
    {
      id: 3,
      name: 'Private Charter Medium Phinisi',
      duration: '1 - 4 Days Tours',
      type: 'Private Trip',
      price: 'From IDR 29,700 K',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      features: ['Spacious Cabins', 'Quality Service', 'Modern Facilities']
    },
    {
      id: 4,
      name: 'Private Charter Luxury Phinisi',
      duration: '1 - 4 Days Tours',
      type: 'Private Trip',
      price: 'From IDR 27,500 K',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      features: ['Luxury Experience', 'Fine Dining', 'Exclusive Service']
    },
    {
      id: 5,
      name: 'Private Charter VIP Phinisi',
      duration: '1 - 4 Days Tours',
      type: 'Private Trip',
      price: 'From IDR 50,000 K',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      features: ['VIP Treatment', 'Butler Service', 'Ultimate Luxury']
    }
  ];

  return (
    <section className="private-charter-section">
      <div className="container">
        <div className="section-header">
          <h3 className="section-subtitle">Private Charter</h3>
          <h2 className="section-title">Exclusive <span className="text-teal">Sailing</span> Experience</h2>
          <p className="section-description">
            Experience the ultimate in luxury and privacy with our exclusive private charter services. 
            Each vessel is carefully selected to provide you with an unforgettable sailing adventure.
          </p>
        </div>

        <div className="charter-grid">
          {privateCharters.map(charter => (
            <div key={charter.id} className="charter-card">
              <div className="charter-image">
                <img src={charter.image} alt={charter.name} loading="lazy" />
                <div className="charter-duration">{charter.duration}</div>
                <div className="vip-badge">
                  {charter.name.includes('VIP') && <span className="vip-crown">👑</span>}
                  {charter.type}
                </div>
              </div>
              
              <div className="charter-content">
                <h3 className="charter-name">{charter.name}</h3>
                
                <ul className="charter-features">
                  {charter.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                
                <div className="charter-footer">
                  <div className="charter-price">
                    <span className="price">{charter.price}</span>
                  </div>
                  <div className="charter-actions">
                    <button className="btn-outline">Get Quote</button>
                    <button className="btn btn-primary">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivateCharterSection;
