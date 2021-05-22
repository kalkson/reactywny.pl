import React from 'react';
import { Link } from 'gatsby';
import StyledPageHeader from './PageHeader.styled';
import Logo from '../../../assets/svg/logo-2.svg';
import MenuButton from '../../atoms/MenuButton/MenuButton';
import MenuLink from '../../atoms/MenuLink/MenuLink';

const PageHeader = () => {
  return (
    <StyledPageHeader className="container">
      <MenuButton />
      <div className="header__logo">
        <Link to="/">
          <Logo className="header__logo__image" />
        </Link>
      </div>
      <nav className="header__nav">
        <ul>
          <MenuLink>
            <Link to="/">home</Link>
          </MenuLink>
          <MenuLink>
            <Link to="/posts">wpisy</Link>
          </MenuLink>
          <MenuLink>
            <Link to="/faq">faq</Link>
          </MenuLink>
          <MenuLink>
            <Link to="/faq/#contact">kontakt</Link>
          </MenuLink>
        </ul>
      </nav>
    </StyledPageHeader>
  );
};

export default PageHeader;
