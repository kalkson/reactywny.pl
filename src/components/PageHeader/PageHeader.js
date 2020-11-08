import React, { useState, useEffect } from 'react';
// import propTypes from 'prop-types';
// import { graphql } from 'gatsby';
// import Img from 'gatsby-image';
import { Link } from 'gatsby';
import StyledPageHeader from './PageHeader.styled';
import Logo from '../../assets/svg/logo-2.svg';
import MenuButton from '../MenuButton/MenuButton';
import SocialLinks from '../SocialLinks/SocialLinks';
import HeaderSVG from '../../assets/svg/header-image.svg';
import MenuLink from '../MenuLink/MenuLink';

const PageHeader = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isScrolledDown, setScrolledDown] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(null);

  const listener = () => {
    const scrollDirection =
      document.body.getBoundingClientRect().top > scrollPosition
        ? 'up'
        : 'down';
    const newScrollPosition = document.body.getBoundingClientRect().top;

    setScrollPosition(newScrollPosition);

    if (scrollDirection === 'down' && window.scrollY >= 0) {
      setScrolledDown(true);
    } else if (scrollDirection === 'up' && window.scrollY <= 50) {
      setScrolledDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', listener);

    return () => document.removeEventListener('scroll', listener);
  });

  return (
    <StyledPageHeader
      isMenuVisible={isMenuVisible}
      isScrolledDown={isScrolledDown}
    >
      <MenuButton
        setMenuVisible={setMenuVisible}
        isMenuVisible={isMenuVisible}
      />
      <div className="header__logo">
        <Logo className="header__logo__image" />
        <span className="header__logo__underline">learn with me</span>
      </div>
      <SocialLinks />
      <HeaderSVG className="header__image" />
      <nav className="header__nav">
        <ul>
          <MenuLink classes="header__nav__link-1">
            <Link to="/" onClick={() => setMenuVisible(false)}>
              HOME
            </Link>
          </MenuLink>
          <MenuLink classes="header__nav__link-2">
            <Link to="/posts" onClick={() => setMenuVisible(false)}>
              WPISY
            </Link>
          </MenuLink>
          <MenuLink classes="header__nav__link-3">
            <Link to="/faq" onClick={() => setMenuVisible(false)}>
              FAQ
            </Link>
          </MenuLink>
          <MenuLink classes="header__nav__link-4">
            <Link to="/faq/#contact" onClick={() => setMenuVisible(false)}>
              KONTAKT
            </Link>
          </MenuLink>
        </ul>
      </nav>
    </StyledPageHeader>
  );
};

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "/src/assets/svg/logo-2.svg" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `;

// PageHeader.propTypes = {
//   data: propTypes.shape({
//     file: propTypes.shape({
//       childImageSharp: propTypes.shape({
//         fixed: propTypes.string,
//       }).isRequired,
//     }).isRequired,
//   }).isRequired,
// };

export default PageHeader;
