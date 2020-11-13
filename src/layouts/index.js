import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import propTypes from 'prop-types';
import GlobalStyle from '../GlobalStyles/GlobalStyles';
import theme from '../theme/theme';
import SEO from '../SEO';

const StyledContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const MainLayout = ({ children }) => {
  return (
    <>
      <SEO />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <StyledContainer>{children}</StyledContainer>
      </ThemeProvider>
    </>
  );
};

MainLayout.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
};

export default MainLayout;
