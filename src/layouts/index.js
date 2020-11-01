import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import propTypes from 'prop-types';
import GlobalStyle from '../GlobalStyles/GlobalStyles';
import theme from '../theme/theme';
import PageHeader from '../components/PageHeader/PageHeader';

const StyledContainer = styled.div`
  position: relative;
  padding-top: 100px;
  z-index: 1;
`;

const MainLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageHeader />
      <StyledContainer>{children}</StyledContainer>
    </ThemeProvider>
  );
};

MainLayout.propTypes = {
  children: propTypes.element,
};

MainLayout.defaultProps = {
  children: '',
};

export default MainLayout;
