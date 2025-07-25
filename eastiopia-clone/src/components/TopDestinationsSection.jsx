import React from 'react';
import './TopDestinationsSection.css';

const TopDestinationsSection = () => {
  const destinations = [
    {
      id: 1,
      name: 'Manjarite',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Crystal clear waters and pristine beaches'
    },
    {
      id: 2,
      name: 'Kalong Island',
      image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Famous for spectacular bat colonies at sunset'
    },
    {
      id: 3,
      name: 'Kelor Island',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Perfect for snorkeling and diving adventures'
    },
    {
      id: 4,
      name: 'Manta Point',
      image: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Encounter majestic manta rays in their natural habitat'
    },
    {
      id: 5,
      name: 'Komodo Island',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Home to the legendary Komodo dragons'
    }
  ];

  return (
    <section id="destinations" className="destinations-section">
      <div className="container">
        <div className="section-header">
          <h3 className="section-subtitle">Top Destinations</h3>
          <h2 className="section-title">Explore Top <span className="text-teal">Destinations</span></h2>
          <p className="section-description">
            Discover the most breathtaking destinations in Indonesia's pristine waters. 
            Each location offers unique experiences and unforgettable memories.
          </p>
        </div>

        <div className="destinations-grid">
          {destinations.map((destination, index) => (
            <div 
              key={destination.id} 
              className={`destination-card ${index === 0 ? 'featured' : ''}`}
            >
              <div className="destination-image">
                <img src={destination.image} alt={destination.name} loading="lazy" />
                <div className="destination-overlay">
                  <div className="destination-content">
                    <h3 className="destination-name">{destination.name}</h3>
                    <p className="destination-description">{destination.description}</p>
                    <button className="explore-btn">Explore</button>
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

export default TopDestinationsSection;
