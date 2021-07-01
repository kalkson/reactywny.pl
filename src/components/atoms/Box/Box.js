import React, { forwardRef } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledBox = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
  padding: 2rem;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 4rem;
  }
`;

const Box = forwardRef(({ children, ...props }, ref) => (
  <StyledBox ref={ref} {...props}>
    {children}
  </StyledBox>
));

Box.displayName = 'Box';

Box.propTypes = {
  children: propTypes.oneOfType([
    [propTypes.node, propTypes.arrayOf(propTypes.node)],
  ]).isRequired,
};

export default Box;
