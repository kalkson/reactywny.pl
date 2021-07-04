import React from 'react';
import HeroIllustration from 'assets/svg/meta/hero.svg';
import Button from 'components/atoms/Button/Button';
import TextGroup from 'components/molecules/TextGroup/TextGroup';
import Headline from 'components/atoms/Headline/Headline';
import StyledHeroSection from './HeroSection.styled';

const HeroSection = () => (
  <StyledHeroSection className="container hero">
    <div className="hero__text-container">
      <Headline className="hero__headline">
        Cześć,
        <br />
        porozmawiajmy o<br />
        <TextGroup
          strings={[
            'React.js',
            'kodzie',
            'programowaniu',
            'frontendzie',
            'webdevelopmencie',
          ]}
        />
      </Headline>
      <HeroIllustration className="hero__illustration illu-1" />
      <span className="hero__secondary-text">
        Lubisz czytać o frontendzie lub uczysz się webdevu? <br /> To miejsce
        idealne dla ciebie.
      </span>
      <Button to="/posts" className="hero__button">
        zobacz moje wpisy
      </Button>
    </div>
    <HeroIllustration className="hero__illustration illu-2" />
  </StyledHeroSection>
);

export default HeroSection;
