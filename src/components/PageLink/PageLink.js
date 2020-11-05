import React from 'react';
import propTypes from 'prop-types';
import StyledPageLink from './PageLink.styled';
import ForwardArrow from '../../assets/svg/arrow-1.svg';

const PageLink = ({ children, to }) => {
  return (
    <StyledPageLink className="link" to={to}>
      {children}
      <ForwardArrow className="link__icon" />
    </StyledPageLink>
  );
};

PageLink.propTypes = {
  children: propTypes.element.isRequired,
  to: propTypes.string.isRequired,
};

export default PageLink;
