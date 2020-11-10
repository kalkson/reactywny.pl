import React from 'react';
import propTypes from 'prop-types';
import StyledMenuLink from './MenuLink.styled';

const MenuLink = ({ children, classes }) => {
  return (
    <StyledMenuLink className={`menu-nav-link ${classes}`}>
      {children}
    </StyledMenuLink>
  );
};

MenuLink.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
  classes: propTypes.string.isRequired,
};

export default MenuLink;
