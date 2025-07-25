import React from 'react';
import './PhinisiBoatSection.css';

const PhinisiBoatSection = () => {
  const boats = [
    {
      id: 1,
      name: 'Ciela Phinisi',
      type: 'Luxury Phinisi',
      price: 'From IDR 27,500 K',
      priceUnit: 'pax',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: ['Traditional Design', 'Modern Amenities', 'Professional Crew']
    },
    {
      id: 2,
      name: 'Cajoma IV Phinisi',
      type: 'Luxury Phinisi',
      price: 'From IDR 42,800 K',
      priceUnit: 'pax',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: ['Premium Service', 'Spacious Cabins', 'Fine Dining']
    }
  ];

  return (
    <section id="boats" className="phinisi-section">
      <div className="container">
        <div className="section-header">
          <h3 className="section-subtitle">Ship</h3>
          <h2 className="section-title">Phinisi <span className="text-teal">Boat</span></h2>
        </div>

        <div className="boats-grid">
          {boats.map(boat => (
            <div key={boat.id} className="boat-card">
              <div className="boat-image">
                <img src={boat.image} alt={boat.name} loading="lazy" />
                <div className="boat-badge">{boat.type}</div>
              </div>
              
              <div className="boat-content">
                <div className="boat-category">Phinisi</div>
                <h3 className="boat-name">{boat.name}</h3>
                
                <ul className="boat-features">
                  {boat.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                
                <div className="boat-footer">
                  <div className="boat-price">
                    <span className="price">{boat.price}</span>
                    <span className="price-unit">| {boat.priceUnit}</span>
                  </div>
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhinisiBoatSection;
