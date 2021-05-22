import React from 'react';
import Headline from '../../../atoms/Headline/Headline';
import StyledHeroSection from './HeroSection.styled';
import HeroIllustration from '../../../../assets/svg/hero.svg';

const HeroSection = () => (
  <StyledHeroSection className="container hero">
    <div className="hero__text-container">
      <Headline className="hero__headline">
        Cześć,
        <br />
        porozmawiajmy o<br />
        kodzie
      </Headline>
    </div>
    {/* <div className="hero__illustration-container"> */}
    <HeroIllustration className="hero__illustration" />
    {/* </div> */}
  </StyledHeroSection>
);

export default HeroSection;
