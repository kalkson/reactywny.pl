import Facebook from 'assets/svg/social/facebook.svg';
import Instagram from 'assets/svg/social/instagram.svg';
import Linkedin from 'assets/svg/social/linkedin.svg';
import React from 'react';

import StyledSocialLinks from './SocialLinks.styled';

const SocialLinks = ({ ...props }) => (
  <StyledSocialLinks className="social-group" {...props}>
    <a
      href="https://www.facebook.com/reactywnypl"
      aria-label="przejdź do mojego profilu na Facebooku"
      className="social-group__link"
    >
      <Facebook role="presentation" className="social-group__icon" />
    </a>
    <a
      href="https://www.instagram.com/reactywny.pl/"
      aria-label="przejdź do mojego profilu na Instagramie"
      className="social-group__link"
    >
      <Instagram role="presentation" className="social-group__icon" />
    </a>
    <a
      href="https://www.linkedin.com/in/damian-kalka/"
      aria-label="przejdź do mojego profilu na LinkedIn"
      className="social-group__link"
    >
      <Linkedin role="presentation" className="social-group__icon" />
    </a>
  </StyledSocialLinks>
);

export default SocialLinks;
