import React from 'react';
import Hero from '../../components/hero/hero';
import PortfolioGallery from '../../components/portfolio/portfolio';
import Service from '../../components/service/service';
import About from '../../components/about/about'
import Testimonials from '../../components/testimonials/Testimonials';
import Contact from '../../components/contact/contact';

const Page = () => {
  return (
    <div>
      <Hero />
      <PortfolioGallery />
      <About />
      <Service />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Page;
