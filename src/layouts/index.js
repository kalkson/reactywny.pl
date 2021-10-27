import { Link } from 'gatsby';
import propTypes from 'prop-types';
import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { ThemeProvider } from 'styled-components';

import PageFooter from '../components/molecules/PageFooter/PageFooter';
import PageHeader from '../components/organisms/PageHeader/PageHeader';
import GlobalStyle from '../theme/GlobalStyle/GlobalStyle';
import theme from '../theme/theme';

const MainLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PageHeader />
        <CookieConsent
          location="bottom"
          buttonText="Zaakceptuj"
          declineButtonText="Odrzuć"
          cookieName="gatsby-gdpr-google-analytics"
          containerClasses="consent"
          buttonClasses="consent__button"
          contentClasses="consent__text"
          buttonWrapperClasses="consent__buttons"
          role="alert"
        >
          Korzystając ze strony zgadzasz się na używanie plików cookies, które
          są instalowane na Twoim urządzeniu. Więcej o plikach cookies oraz o
          możliwościach zmiany ich ustawień dowiesz się w
          <Link to="/privacy"> Polityce prywatności</Link>.
        </CookieConsent>
        {children}
        <PageFooter />
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
