import React from 'react';
import propTypes from 'prop-types';
import StyledMenuLink from './MenuLink.styled';

const MenuLink = ({ children }) => {
  return (
    <StyledMenuLink className="menu__nav__link">{children}</StyledMenuLink>
  );
};

MenuLink.propTypes = {
  children: propTypes.element.isRequired,
};

export default MenuLink;
