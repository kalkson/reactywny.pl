import React from 'react';
import propTypes from 'prop-types';
import StyledMenuButton from './MenuButton.styled';

const MenuButton = ({ isMenuVisible, setMenuVisible }) => {
  return (
    <StyledMenuButton
      className="menu-button"
      isMenuVisible={isMenuVisible}
      onClick={() => setMenuVisible(!isMenuVisible)}
    >
      <div className="menu-button__element" />
      <div className="menu-button__element" />
      <div className="menu-button__element" />
      <div className="menu-button__element" />
    </StyledMenuButton>
  );
};

MenuButton.propTypes = {
  isMenuVisible: propTypes.bool.isRequired,
  setMenuVisible: propTypes.func.isRequired,
};

export default MenuButton;
