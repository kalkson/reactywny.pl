import React from 'react';
import WelcomeSection from '../components/pages/IndexPage/WelcomeSection/WelcomeSection';
import NewestPostSection from '../components/pages/IndexPage/NewestPostSection/NewestPostSection';
import MissionSection from '../components/pages/IndexPage/MissionSection/MissionSection';

const IndexPage = () => {
  // console.log(data);
  return (
    <>
      <WelcomeSection />
      {/* <ImageWrapper className="asd" fluid={data.file.childImageSharp.fluid} /> */}
      <NewestPostSection />
      <MissionSection />
    </>
  );
};

export default IndexPage;
