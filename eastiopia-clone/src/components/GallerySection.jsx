import React, { useState } from 'react';
import './GallerySection.css';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      alt: 'Couple enjoying scenic view',
      category: 'Adventure'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      alt: 'Traditional phinisi boat sailing',
      category: 'Sailing'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      alt: 'Crystal clear waters and beach',
      category: 'Beach'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      alt: 'Underwater marine life',
      category: 'Diving'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      alt: 'Sunset sailing experience',
      category: 'Sunset'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      alt: 'Komodo dragon encounter',
      category: 'Wildlife'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      alt: 'Luxury boat interior',
      category: 'Luxury'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      alt: 'Island hopping adventure',
      category: 'Adventure'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      alt: 'Snorkeling in pristine waters',
      category: 'Snorkeling'
    }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <section className="gallery-section">
      <div className="container">
        <div className="section-header">
          <h3 className="section-subtitle">Our Gallery</h3>
          <h2 className="section-title">Some Beautiful <span className="text-teal">Snapshots</span></h2>
          <p className="section-description">
            Capture the essence of your adventure through our lens. These moments showcase 
            the incredible experiences waiting for you in Indonesia's pristine waters.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className={`gallery-item ${index % 3 === 0 ? 'tall' : ''}`}
              onClick={() => openLightbox(image)}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div className="gallery-overlay">
                <div className="gallery-content">
                  <span className="gallery-category">{image.category}</span>
                  <div className="zoom-icon">🔍</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <button className="lightbox-prev" onClick={prevImage}>‹</button>
            <button className="lightbox-next" onClick={nextImage}>›</button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="lightbox-info">
              <h3>{selectedImage.category}</h3>
              <p>{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
