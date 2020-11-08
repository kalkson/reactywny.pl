import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import propTypes from 'prop-types';
import GlobalStyle from '../GlobalStyles/GlobalStyles';
import theme from '../theme/theme';
import PageHeader from '../components/PageHeader/PageHeader';
import PageFooter from '../components/PageFooter/PageFooter';
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
        <PageHeader />
        <StyledContainer>{children}</StyledContainer>
        <PageFooter />
      </ThemeProvider>
    </>
  );
};

MainLayout.propTypes = {
  children: propTypes.element,
};

MainLayout.defaultProps = {
  children: '',
};

export default MainLayout;
