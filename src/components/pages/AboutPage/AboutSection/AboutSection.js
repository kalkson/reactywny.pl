import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Headline from 'components/atoms/Headline/Headline';
import TextGroup from 'components/molecules/TextGroup/TextGroup';
import StyledAboutSection from './AboutSection.styled';

const FaqSection = () => (
  <StyledAboutSection className="container about-section">
    <div className="about-section__content">
      <Headline className="about-section__headline">
        Nazywam się Damian i <br />
        <TextGroup
          strings={['programuję', 'piszę bloga', 'kocham to co robię']}
        />
      </Headline>
    </div>
    <StaticImage
      src="../../../../assets/images/me.png"
      alt="wizerunek autora bloga"
      className="about-section__image"
      placeholder="tracedSVG"
      quality={100}
      formats={[`webp`]}
    />
  </StyledAboutSection>
);

export default FaqSection;
