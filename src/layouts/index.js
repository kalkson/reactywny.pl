import React from 'react';
// import styled from 'styled-components';
import propTypes from 'prop-types';
import GlobalStyle from '../GlobalStyles/GlobalStyles';

const MainLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <h1>Hello World!</h1>
      {children}
    </>
  );
};

MainLayout.propTypes = {
  children: propTypes.element.isRequired,
};

export default MainLayout;
