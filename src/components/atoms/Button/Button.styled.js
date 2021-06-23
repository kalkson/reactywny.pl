import styled from 'styled-components';

const StyledButton = styled.button`
  outline: solid 1px ${({ theme }) => theme.colors.mainBlue};
  width: 100%;
  height: 40px;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  z-index: 1;
  cursor: pointer;
  position: relative;

  &:before,
  &:after {
    transform-origin: left;
    transform: scaleX(0);
    left: 0;
    top: 0;
    position: absolute;

    transition: transform 0.5s ease-in-out;
  }

  &:before {
    content: '';
    z-index: 2;
    background-color: ${({ theme }) => theme.colors.mainBlue};
    width: 100%;
    height: 100%;
  }

  &:after {
    content: url('/arrow.svg');
    z-index: 3;

    position: absolute;
    left: 25%;
    top: 50%;
    width: 24px;
    height: 24px;
    padding: 0;
    opacity: 0;
    transform: translateY(-50%);
    transform-origin: center;
    transition: all 0.5s ease-in-out;
    transition-property: all;
    transition-duration: 0.6s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
    pointer-events: none;
  }

  &:hover {
    &:before {
      transform: scaleX(1);
    }

    &:after {
      opacity: 1;
      left: calc(50% - 12px);
    }
  }
`;

export default StyledButton;
