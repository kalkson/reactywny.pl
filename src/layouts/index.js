import React from 'react';
import { Link } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import CookieConsent from 'react-cookie-consent';
import propTypes from 'prop-types';
import GlobalStyle from '../GlobalStyles/GlobalStyles';
import theme from '../theme/theme';

const StyledContainer = styled.div`
  position: relative;
  z-index: 1;
`;

const MainLayout = ({ children }) => {
  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Zaakceptuj"
        declineButtonText="Odrzuć"
        cookieName="gatsby-gdpr-google-analytics"
        containerClasses="consent"
        buttonClasses="consent__button"
        contentClasses="consent__text"
        buttonWrapperClasses="consent__buttons"
      >
        Korzystając ze strony zgadzasz się na używanie plików cookies, które są
        instalowane na Twoim urządzeniu. Więcej o plikach cookies oraz o
        możliwościach zmiany ich ustawień dowiesz się w{' '}
        <Link to="/privacy">Polityce Prywatności.</Link>
      </CookieConsent>
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
