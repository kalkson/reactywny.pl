import React from 'react';
import { ThemeProvider } from 'styled-components';
import propTypes from 'prop-types';
import GlobalStyle from '../GlobalStyles/GlobalStyles';
import { breakpoints, colors, fonts, media, paddings } from '../theme/theme';

const MainLayout = ({ children }) => {
  return (
    <ThemeProvider
      breakpoints={breakpoints}
      padddings={paddings}
      fonts={fonts}
      colors={colors}
      media={media}
    >
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
  children: <></>,
};

export default MainLayout;
