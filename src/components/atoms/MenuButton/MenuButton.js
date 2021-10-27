import propTypes from 'prop-types';
import React from 'react';

import StyledMenuButton from './MenuButton.styled';

const MenuButton = ({ isMenuVisible, setMenuVisible, ...props }) => (
  <StyledMenuButton
    isMenuVisible={isMenuVisible}
    onClick={() => setMenuVisible(!isMenuVisible)}
    {...props}
  >
    <div className="element" />
    <div className="element" />
    <div className="element" />
    <div className="element" />
  </StyledMenuButton>
);

MenuButton.propTypes = {
  isMenuVisible: propTypes.bool.isRequired,
  setMenuVisible: propTypes.func.isRequired,
};

export default MenuButton;
