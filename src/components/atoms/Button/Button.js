import { Link } from 'gatsby';
import propTypes from 'prop-types';
import React from 'react';

import StyledButton from './Button.styled';

const Button = ({ children, to, href, ...props }) => {
  if (to)
    return (
      <Link to={to}>
        <StyledButton {...props}>{children}</StyledButton>
      </Link>
    );
  if (href)
    return (
      <a href={href}>
        <StyledButton {...props}>{children}</StyledButton>
      </a>
    );
  return <StyledButton {...props}>{children}</StyledButton>;
};

Button.propTypes = {
  children: propTypes.oneOfType([
    propTypes.node,
    propTypes.arrayOf(propTypes.node),
  ]).isRequired,
  to: propTypes.string,
  href: propTypes.string,
};

Button.defaultProps = {
  to: null,
  href: null,
};

export default Button;
