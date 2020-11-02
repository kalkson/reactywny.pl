import React from 'react';
import StyledSocialLinks from './SocialLinks.styled';
import Facebook from '../../assets/svg/facebook-icon.svg';
import Instagram from '../../assets/svg/instagram-icon.svg';
import YouTube from '../../assets/svg/youtube-icon.svg';

const SocialLinks = () => (
  <StyledSocialLinks className="header__social">
    <a href="https://facebook.com">
      <Facebook className="header__social__link" />
    </a>
    <a href="https://instagram.com">
      <Instagram className="header__social__link" />
    </a>
    <a href="https://youtube.com">
      <YouTube className="header__social__link" />
    </a>
  </StyledSocialLinks>
);

export default SocialLinks;
