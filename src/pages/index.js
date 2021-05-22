import React from 'react';
import HeroSection from '../components/pages/IndexPage/HeroSection/HeroSection';
import NewestPostSection from '../components/pages/IndexPage/NewestPostSection/NewestPostSection';
import MissionSection from '../components/pages/IndexPage/MissionSection/MissionSection';
import SEO from '../seo/SEO';

const IndexPage = () => {
  return (
    <>
      <SEO />
      <HeroSection />
      <NewestPostSection />
      <MissionSection />
    </>
  );
};

export default IndexPage;
