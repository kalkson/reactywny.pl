import React from 'react';
import Logo from 'assets/svg/meta/logo-1.svg';
import SocialLinks from '../SocialLinks/SocialLinks';
import StyledPageFooter from './PageFooter.styled';

const PageFooter = () => (
  <StyledPageFooter className="container">
    <Logo className="footer__logo" />
    <SocialLinks className="footer__socials" />
    <span className="footer__adnotation">
      &copy; Damian Kalka 2021
      <br />
      Wszelkie prawa zastrzeżone
    </span>
  </StyledPageFooter>
);

export default PageFooter;
