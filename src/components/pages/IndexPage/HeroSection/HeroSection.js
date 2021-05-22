import React from 'react';
import Headline from '../../../atoms/Headline/Headline';
import StyledHeroSection from './HeroSection.styled';
import HeroIllustration from '../../../../assets/svg/hero.svg';
import Button from '../../../atoms/Button/Button';
import TextGroup from '../../../molecules/TextGroup/TextGroup';

const HeroSection = () => (
  <StyledHeroSection className="container hero">
    <div className="hero__text-container">
      <Headline className="hero__headline">
        Cześć,
        <br />
        porozmawiajmy o<br />
        <TextGroup
          strings={[
            'kodzie',
            'programowaniu',
            'frontendzie',
            'webdevelpomencie',
          ]}
        />
      </Headline>
      <HeroIllustration className="hero__illustration illu-1" />
      <span className="hero__secondary-text">
        Lubisz czytać o frontendzie? Reactywny (i nie tylko) blog o
        programowaniu
      </span>
      <Button className="hero__button">zobacz moje wpisy</Button>
    </div>
    {/* <div className="hero__illustration-container"> */}
    <HeroIllustration className="hero__illustration illu-2" />
    {/* </div> */}
  </StyledHeroSection>
);

export default HeroSection;
