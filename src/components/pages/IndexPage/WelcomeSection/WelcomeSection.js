import React from 'react';
import { Link } from 'gatsby';
import StyledWelcomeSection from './WelcomeSection.styled';
import Headline from '../../../Headline/Headline';
// import { dk } from '../../../../assets/images/dk.png';

const WelcomeSection = () => {
  return (
    <StyledWelcomeSection>
      <Headline size={54} className="welcome-section__headline">
        <span style={{ color: '#61DAFB' }}>Ucz się</span>
        <br />
        razem
        <br />
        ze mną
      </Headline>
      <div className="welcome-section__content">
        <Headline size={36}>Hello!</Headline>
        <p className="welcome-sction__content__paragraph">
          Niezmiernie mi miło, że się tutaj znalazłeś. A jeżeli tak się stało,
          to znaczy, że jesteś zainteresowany programowaniem tak jak ja. <br />
          <br />
          Blog ten poświęcony jest szeroko pojętemu webdevelopmentu. Znajdziesz
          tutaj posty, dotyczące tworzeniu stron internetowych w najróżniejszych
          technologiach. Aczkolwiek w tej dziedzinie moim konikiem jest
          ekosystem React. Więcej o mnie możesz dowiedzieć się{' '}
          <Link to="/faq">tutaj</Link>, a tymczasem miłego czytania :)
        </p>
        <div className="welcome-sction__content__image-cont">
          <img
            src="dk.png"
            alt="damian-kalka"
            className="welcome-sction__content__image-cont__image"
          />
        </div>
      </div>
    </StyledWelcomeSection>
  );
};

export default WelcomeSection;
