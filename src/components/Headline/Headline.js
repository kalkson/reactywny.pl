import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledHeadline = styled.header`
  font-size: ${({ size }) => size}px;
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  position: relative;
`;

const Headline = ({ children, size }) => {
  return <StyledHeadline size={size}>{children}</StyledHeadline>;
};

Headline.propTypes = {
  children: propTypes.element.isRequired,
  size: propTypes.number,
};

Headline.defaultProps = {
  size: propTypes.number,
};

export default Headline;