import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import StyledPageHeader from './PageHeader.styled';
import Logo from '../../assets/svg/logo-2.svg';
import MenuButton from '../MenuButton/MenuButton';
import HeaderSVG from '../../assets/svg/header-image.svg';
import MenuLink from '../MenuLink/MenuLink';

const PageHeader = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isScrolledDown, setScrolledDown] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(null);

  const header = useRef(null);

  const listener = () => {
    const scrollDirection =
      document.body.getBoundingClientRect().top > scrollPosition
        ? 'up'
        : 'down';
    const newScrollPosition = document.body.getBoundingClientRect().top;

    setScrollPosition(newScrollPosition);

    if (scrollDirection === 'down' && window.scrollY >= 15) {
      setScrolledDown(true);
    } else if (scrollDirection === 'up' && window.scrollY <= 50) {
      setScrolledDown(false);
    }
  };

  const mouseDownHandler = e => {
    if (!header.current || !header.current.contains(e.target)) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', listener);
    document.addEventListener('mousedown', mouseDownHandler);

    return () => {
      document.removeEventListener('scroll', listener);
      document.removeEventListener('mousedown', mouseDownHandler);
    };
  });

  return (
    <StyledPageHeader
      isMenuVisible={isMenuVisible}
      isScrolledDown={isScrolledDown}
      ref={header}
    >
      <MenuButton
        setMenuVisible={setMenuVisible}
        isMenuVisible={isMenuVisible}
      />
      <div className="header__logo">
        <Link to="/">
          <Logo className="header__logo__image" />
        </Link>
        <span className="header__logo__underline">learn with me</span>
      </div>
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
