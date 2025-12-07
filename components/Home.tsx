import React from 'react';
import Hero from './Hero';
import Intro from './Intro';
import Features from './Features';
import Services from './Services';
import MenuHighlights from './MenuHighlights';
import Sustainability from './Sustainability';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Features />
      <Services />
      <MenuHighlights />
      <Sustainability />
    </>
  );
};

export default Home;