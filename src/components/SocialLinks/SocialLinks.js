import React from 'react';
import StyledSocialLinks from './SocialLinks.styled';
import Facebook from '../../assets/svg/facebook-icon.svg';
import Instagram from '../../assets/svg/instagram-icon.svg';
import YouTube from '../../assets/svg/youtube-icon.svg';

const SocialLinks = () => (
  <StyledSocialLinks className="header__social">
    <a href="https://www.facebook.com/reactywnypl" title="Facebook">
      <Facebook className="header__social__link" />
    </a>
    <a href="https://www.instagram.com/reactywny.pl/" title="Instagram">
      <Instagram className="header__social__link" />
    </a>
    <a href="https://youtube.com" title="Youtube">
      <YouTube className="header__social__link" />
    </a>
  </StyledSocialLinks>
);

export default SocialLinks;
