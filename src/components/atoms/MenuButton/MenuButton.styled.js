import styled from 'styled-components';

const StyledMenuButton = styled.button`
  width: fit-content;
  height: fit-content;
  position: relative;
  cursor: pointer;
  background-color: transparent;

  & .element {
    background-color: ${({ theme }) => theme.colors.text};
    width: 30px;
    position: relative;
    transition: transform 300ms ease-in-out, left 300ms ease-in-out,
      width 300ms ease-in-out;
    height: 2.5px;
    margin-bottom: 3px;

    &:nth-of-type(1) {
      left: 0;
      transform-origin: left;

      transform: scaleX(${({ isMenuVisible }) => (isMenuVisible ? '0' : '1')});
    }

    &:nth-of-type(2) {
      height: 2px !important;
      left: 4px;
      width: ${({ isMenuVisible }) => (isMenuVisible ? '40px' : '30px')};
    }

    &:nth-of-type(3) {
      left: 0;
      transform-origin: left;

      transform: scaleX(${({ isMenuVisible }) => (isMenuVisible ? '0' : '1')});
    }

    &:nth-of-type(4) {
      left: 4px;
      transform-origin: right;

      transform: scaleX(${({ isMenuVisible }) => (isMenuVisible ? '0' : '1')});
    }
  }

  &:hover {
    & .menu-button__element:nth-of-type(1) {
      left: 3px;
    }

    & .menu-button__element:nth-of-type(2) {
      left: 0;
    }

    & .menu-button__element:nth-of-type(3) {
      left: 3px;
    }

    & .menu-button__element:nth-of-type(4) {
      left: 0;
    }
  }
`;

export default StyledMenuButton;
