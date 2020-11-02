import SocialLinks from 'components/SocialLinks/SocialLinks';
import React from 'react';
import Logo from 'assets/svg/logo-1.svg';
import StyledPageFooter from './PageFooter.styled';

const PageFooter = () => {
  return (
    <StyledPageFooter>
      <SocialLinks />
      <Logo className="footer__logo" />
      <span className="footer__adnotation">
        &copy; Damian Kalka 2021 <br />
        Wszelkie prawa zastrzeżone
      </span>
    </StyledPageFooter>
  );
};

export default PageFooter;
