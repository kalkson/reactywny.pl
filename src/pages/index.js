import React from 'react';
import HeroSection from '../components/pages/IndexPage/HeroSection/HeroSection';
// import WelcomeSection from '../components/pages/IndexPage/WelcomeSection/WelcomeSection';
// import NewestPostSection from '../components/pages/IndexPage/NewestPostSection/NewestPostSection';
// import MissionSection from '../components/pages/IndexPage/MissionSection/MissionSection';
import SEO from '../seo/SEO';

const IndexPage = () => {
  return (
    <>
      <SEO />
      <HeroSection />
      {/* <WelcomeSection />
      <NewestPostSection />
      <MissionSection />
    </> */}
    </>
  );
};

export default IndexPage;
