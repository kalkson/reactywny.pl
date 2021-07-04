import React, { useState } from 'react';
import { Link } from 'gatsby';
import Logo from 'assets/svg/meta/logo-2.svg';
import MenuButton from 'components/atoms/MenuButton/MenuButton';
import PageHeaderContainer from './PageHeaderContainer.styled';
import StyledPageHeader from './PageHeader.styled';

const PageHeader = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  return (
    <PageHeaderContainer className="header">
      {/* svg */}
      <svg className="clip-image">
        <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
          <path d="M0,0 H1 V0.997 s-0.332,0.019,-0.402,-0.037 c-0.006,-0.004,-0.064,-0.161,-0.119,-0.275 S0,0.636,0,0.636" />
        </clipPath>
      </svg>

      <svg className="clip-image">
        <clipPath id="my-clip-path-mobile" clipPathUnits="objectBoundingBox">
          <path d="M0,0 H1 V0.976 s-0.46,0.055,-0.529,0 a0.416,2,0,0,1,-0.109,-0.125 C0.307,0.739,0.265,0.687,0.252,0.676 C0.149,0.59,0,0.623,0,0.623" />
        </clipPath>
      </svg>
      {/* svg end */}

      <div className={`header__wrapper${isMenuVisible ? ' active' : ''}`}>
        <StyledPageHeader
          className="container header-elements"
          isMenuVisible={isMenuVisible}
        >
          <MenuButton
            className="header-elements__button"
            aria-label="rozwiń menu"
            role="button"
            isMenuVisible={isMenuVisible}
            setMenuVisible={setMenuVisible}
            aria-expanded={isMenuVisible}
          />

          <nav className="header-elements__nav">
            <ul className="header-elements__list">
              <li>
                <Link
                  className="header-elements__link"
                  to="/"
                  onClick={() => setMenuVisible(false)}
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  className="header-elements__link"
                  to="/posts"
                  onClick={() => setMenuVisible(false)}
                >
                  wpisy
                </Link>
              </li>
              <li>
                <Link
                  className="header-elements__link"
                  to="/faq"
                  onClick={() => setMenuVisible(false)}
                >
                  o mnie
                </Link>
              </li>
              <li>
                <Link
                  className="header-elements__link"
                  to="/newsletter"
                  onClick={() => setMenuVisible(false)}
                >
                  newsletter
                </Link>
              </li>
            </ul>
          </nav>
          <Link to="/">
            <div className="header-elements__logo">
              <Logo className="header-elements__image" />
            </div>
          </Link>
        </StyledPageHeader>
      </div>
    </PageHeaderContainer>
  );
};

export default PageHeader;
