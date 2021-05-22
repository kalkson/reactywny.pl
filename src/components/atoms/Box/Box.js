import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledBox = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
  padding: 4rem;
`;

const Box = ({ children, ...props }) => (
  <StyledBox {...props}>{children}</StyledBox>
);

Box.propTypes = {
  children: propTypes.oneOfType([
    [propTypes.node, propTypes.arrayOf(propTypes.node)],
  ]).isRequired,
};

export default Box;
