import dotenv from 'dotenv';
dotenv.config();

import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TemplatesSection from '../components/TemplatesSection';
import SignUpSection from '../components/SignUpSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TemplatesSection />
      <SignUpSection />
      <Footer />
    </div>
  );
};

export default HomePage;