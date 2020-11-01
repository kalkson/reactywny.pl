import React, { useState } from 'react';
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

  return (
    <StyledPageHeader isMenuVisible={isMenuVisible}>
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
          <MenuLink>
            <Link to="/">HOME</Link>
          </MenuLink>
          <MenuLink>
            <Link to="/posts">WPISY</Link>
          </MenuLink>
          <MenuLink>
            <Link to="/faq">FAQ</Link>
          </MenuLink>
          <MenuLink>
            <Link to="/article">KONTAKT</Link>
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
