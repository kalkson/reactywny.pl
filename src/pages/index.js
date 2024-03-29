import React from 'react';

import HeroSection from '../components/pages/IndexPage/HeroSection/HeroSection';
import MissionSection from '../components/pages/IndexPage/MissionSection/MissionSection';
import NewestPostSection from '../components/pages/IndexPage/NewestPostSection/NewestPostSection';
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
