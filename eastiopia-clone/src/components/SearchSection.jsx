import React, { useState } from 'react';
import './SearchSection.css';

const SearchSection = () => {
  const [formData, setFormData] = useState({
    tripType: '',
    duration: '',
    budget: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    if (!formData.tripType) newErrors.tripType = 'Please select a trip type';
    if (!formData.duration) newErrors.duration = 'Please select duration';
    if (!formData.budget) newErrors.budget = 'Please select budget range';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission
    console.log('Search submitted:', formData);
    alert('Search functionality would be implemented here!');
  };

  return (
    <section className="search-section">
      <div className="container">
        <div className="search-card">
          <div className="search-header">
            <div className="location-pin"></div>
            <h2>Find Your Holiday</h2>
          </div>
          
          <form className="search-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <select
                name="tripType"
                value={formData.tripType}
                onChange={handleChange}
                className={errors.tripType ? 'error' : ''}
              >
                <option value="">Open Trip</option>
                <option value="komodo-1day">Komodo 1 Day</option>
                <option value="komodo-2d1n">Komodo 2D1N</option>
                <option value="komodo-3d2n">Komodo 3D2N</option>
                <option value="sumba-4d3n">Sumba 4D3N</option>
                <option value="private-charter">Private Charter</option>
              </select>
              {errors.tripType && <span className="error-message">{errors.tripType}</span>}
            </div>

            <div className="form-group">
              <select
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className={errors.duration ? 'error' : ''}
              >
                <option value="">Tour Duration</option>
                <option value="1-day">1 Day</option>
                <option value="2-days">2 Days</option>
                <option value="3-days">3 Days</option>
                <option value="4-days">4 Days</option>
                <option value="5-days">5+ Days</option>
              </select>
              {errors.duration && <span className="error-message">{errors.duration}</span>}
            </div>

            <div className="form-group">
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className={errors.budget ? 'error' : ''}
              >
                <option value="">Max Budget / Pax</option>
                <option value="under-2m">Under IDR 2,000K</option>
                <option value="2m-5m">IDR 2,000K - 5,000K</option>
                <option value="5m-10m">IDR 5,000K - 10,000K</option>
                <option value="10m-20m">IDR 10,000K - 20,000K</option>
                <option value="above-20m">Above IDR 20,000K</option>
              </select>
              {errors.budget && <span className="error-message">{errors.budget}</span>}
            </div>

            <button type="submit" className="search-btn">
              Search Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
