import React from 'react';
import { Link } from 'gatsby';
import StyledWelcomeSection from './WelcomeSection.styled';
import Headline from '../../../Headline/Headline';
import Illustration from '../../../../assets/images/illu.svg';

const WelcomeSection = () => {
  return (
    <StyledWelcomeSection>
      <h1 size={54} className="welcome-section__headline">
        <span style={{ color: '#61DAFB' }}>Ucz się</span>
        <br />
        razem
        <br />
        ze mną
      </h1>
      <div className="welcome-section__content">
        <Headline size={36}>Hello!</Headline>
        <p className="welcome-sction__content__paragraph">
          Niezmiernie mi miło, że się tutaj znalazłeś. A to musi oznaczać, że
          jesteś zainteresowany programowaniem tak samo jak ja. Nie? No to może
          FrontEnd? Albo jakiś design?
          <br />
          <br />
          Niemniej, blog ten w głównej mierze poświęcony jest szeroko pojętemu
          webdevelopmentu. Nie jest to jednak jedyne co poruszam na swoim blogu.
          Piszę także o tematach rozwojowych czy nowinkach technologicznych. O
          blogu możesz dowiedzieć się więcej{' '}
          <Link to="/faq" style={{ textDecoration: 'underline' }} title="faq">
            tutaj
          </Link>{' '}
          Chodź, zobacz sam! Zapraszam serdecznie!
        </p>
        <div className="welcome-sction__content__image-cont">
          <Illustration />
        </div>
      </div>
      <div className="background-stripe" />
    </StyledWelcomeSection>
  );
};

export default WelcomeSection;
