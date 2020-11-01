import styled from 'styled-components';

const StyledMenuButton = styled.div`
  width: 30px;
  height: 24px;
  position: relative;
  cursor: pointer;

  & .menu-button__element {
    background-color: ${({ theme }) => theme.colors.mainDark};
    width: 27px;
    position: relative;
    transition: transform 300ms ease-in-out, left 300ms ease-in-out,
      width 300ms ease-in-out;

    &:nth-of-type(1) {
      height: 3px;
      top: 0;
      left: 0;
      transform-origin: left;

      transform: scaleX(${({ isMenuVisible }) => (isMenuVisible ? '0' : '1')});
    }

    &:nth-of-type(2) {
      height: 3px;
      top: 3px;
      left: 3px;

      width: ${({ isMenuVisible }) => (isMenuVisible ? '40px' : '27px')};
    }

    &:nth-of-type(3) {
      height: 3px;
      top: 6px;
      left: 0;
      transform-origin: left;

      transform: scaleX(${({ isMenuVisible }) => (isMenuVisible ? '0' : '1')});
    }

    &:nth-of-type(4) {
      height: 3px;
      top: 9px;
      left: 3px;
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
