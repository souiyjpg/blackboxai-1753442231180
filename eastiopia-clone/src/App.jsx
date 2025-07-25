import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SearchSection from './components/SearchSection';
import BrandingSection from './components/BrandingSection';
import AboutSection from './components/AboutSection';
import PhinisiBoatSection from './components/PhinisiBoatSection';
import TourPackageSection from './components/TourPackageSection';
import PrivateCharterSection from './components/PrivateCharterSection';
import TopDestinationsSection from './components/TopDestinationsSection';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <SearchSection />
      <BrandingSection />
      <AboutSection />
      <PhinisiBoatSection />
      <TourPackageSection />
      <PrivateCharterSection />
      <TopDestinationsSection />
      <GallerySection />
      <Footer />
    </div>
  );
}

export default App;
