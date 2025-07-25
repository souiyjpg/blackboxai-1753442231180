import React from 'react';
import './TourPackageSection.css';

const TourPackageSection = () => {
  const tourPackages = [
    {
      id: 1,
      name: 'Open Trip Sailing Komodo 1 Day',
      duration: '1 Days Tours',
      type: 'Open Trip',
      price: 'From IDR 1,450 K',
      priceUnit: 'pax',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      highlights: ['Komodo National Park', 'Pink Beach', 'Snorkeling']
    },
    {
      id: 2,
      name: 'Open Trip 3D 2N Sailing Journey Of',
      duration: '3 Days Tours',
      type: 'Open Trip',
      price: 'From IDR 2,800 K',
      priceUnit: 'pax',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      highlights: ['Padar Island', 'Komodo Dragons', 'Manta Point']
    },
    {
      id: 3,
      name: 'Open Trip 2D 1N Sailing Journey Of',
      duration: '2 Days Tours',
      type: 'Open Trip',
      price: 'From IDR 2,250 K',
      priceUnit: 'pax',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      highlights: ['Rinca Island', 'Kanawa Island', 'Sunset Cruise']
    },
    {
      id: 4,
      name: 'Open Trip 4D3N Sumba',
      duration: '4 Days Tours',
      type: 'Open Trip',
      price: 'From IDR 3,000 K',
      priceUnit: 'pax',
      image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      highlights: ['Traditional Villages', 'Weekuri Lake', 'Mandorak Beach']
    },
    {
      id: 5,
      name: 'Overland 4D3N SUMBA',
      duration: '4 Days Tours',
      type: 'Private Trip',
      price: 'From IDR 3,200 K',
      priceUnit: 'pax',
      image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      highlights: ['Cultural Experience', 'Nihiwatu Beach', 'Local Cuisine']
    },
    {
      id: 6,
      name: 'Overland 5D4N SUMBA',
      duration: '5 Days Tours',
      type: 'Private Trip',
      price: 'From IDR 3,500 K',
      priceUnit: 'pax',
      image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      highlights: ['Extended Adventure', 'Multiple Beaches', 'Photography Tour']
    }
  ];

  return (
    <section id="tours" className="tour-package-section">
      <div className="container">
        <div className="section-header">
          <h3 className="section-subtitle">Package</h3>
          <h2 className="section-title">Tour <span className="text-teal">Package</span></h2>
        </div>

        <div className="tours-grid">
          {tourPackages.map(tour => (
            <div key={tour.id} className="tour-card">
              <div className="tour-image">
                <img src={tour.image} alt={tour.name} loading="lazy" />
                <div className="tour-duration">{tour.duration}</div>
                <div className="tour-overlay">
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>
              
              <div className="tour-content">
                <div className="tour-type">{tour.type}</div>
                <h3 className="tour-name">{tour.name}</h3>
                
                <ul className="tour-highlights">
                  {tour.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
                
                <div className="tour-footer">
                  <div className="tour-price">
                    <span className="price">{tour.price}</span>
                    <span className="price-unit">| {tour.priceUnit}</span>
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

export default TourPackageSection;
