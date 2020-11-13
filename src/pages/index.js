import React from 'react';
import WelcomeSection from '../components/pages/IndexPage/WelcomeSection/WelcomeSection';
import NewestPostSection from '../components/pages/IndexPage/NewestPostSection/NewestPostSection';
import MissionSection from '../components/pages/IndexPage/MissionSection/MissionSection';
import PageHeader from '../components/PageHeader/PageHeader';
import PageFooter from '../components/PageFooter/PageFooter';

const IndexPage = () => {
  return (
    <>
      <PageHeader />
      <WelcomeSection />
      {/* <ImageWrapper className="asd" fluid={data.file.childImageSharp.fluid} /> */}
      <NewestPostSection />
      <MissionSection />
      <PageFooter />
    </>
  );
};

export default IndexPage;
