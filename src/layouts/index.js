import React from 'react';
import { ThemeProvider } from 'styled-components';
import propTypes from 'prop-types';
import GlobalStyle from '../GlobalStyles/GlobalStyles';
import theme from '../theme/theme';

const MainLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Hello World!</h1>
      {children}
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
