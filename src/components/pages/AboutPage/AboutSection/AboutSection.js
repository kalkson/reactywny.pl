import Headline from 'components/atoms/Headline/Headline';
import SocialLinks from 'components/molecules/SocialLinks/SocialLinks';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import StyledAboutSection from './AboutSection.styled';

const FaqSection = () => (
  <StyledAboutSection className="container about-section">
    <div className="about-section__content">
      <Headline className="about-section__headline">O mnie</Headline>
      <p className="about-section__paragraph">
        W poniższej sekcji możesz dowiedzieć się o mnie trochę więcej. O mojej
        osobie postanowiłem napisać w formie listy dzielonej na - być może -
        interesujące dla ciebie pytania. Jeśli jednak chciałbyś/chciałabyś mnie
        o coś zapytać, zapraszam do kontaktu na jednym z social mediów, gdzie
        postaram się jak najszybciej odpowiedzieć. Ewentualnie napisz do mnie na
        e-mail: <a href="mailto:kalka762@gmail.com">kalka762@gmail.com</a>.
      </p>
      <SocialLinks />
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
