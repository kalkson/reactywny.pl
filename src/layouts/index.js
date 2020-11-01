import React from 'react';
// import styled from 'styled-components';
import propTypes from 'prop-types';

const MainLayout = ({ children }) => {
  return (
    <>
      <h1>Hello World!</h1>
      {children}
    </>
  );
};

MainLayout.propTypes = {
  children: propTypes.element.isRequired,
};

export default MainLayout;
