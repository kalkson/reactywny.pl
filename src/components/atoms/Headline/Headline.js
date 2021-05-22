import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledHeadline = styled.h1`
  font-size: ${({ size }) => size * 0.666}px;
  font-weight: 500;
  position: relative;
  color: ${({ theme }) => theme.colors.text};

  @media ${({ theme }) => theme.media.laptop} {
    font-size: ${({ size }) => size}px;
  }
`;

const Headline = ({ children, size }) => {
  return <StyledHeadline size={size}>{children}</StyledHeadline>;
};

Headline.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
  size: propTypes.number,
};

Headline.defaultProps = {
  size: 48,
};

export default Headline;
