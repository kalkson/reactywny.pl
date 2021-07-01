import React from 'react';
import propTypes from 'prop-types';
import ForwardArrow from 'assets/svg/other/arrow-1.svg';
import StyledPageLink from './PageLink.styled';

const PageLink = ({ children, to, ...props }) => {
  return (
    <StyledPageLink {...props} to={to}>
      {children}
      <ForwardArrow className="link__icon" />
    </StyledPageLink>
  );
};

PageLink.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
  to: propTypes.string,
};

PageLink.defaultProps = {
  to: '',
};

export default PageLink;
