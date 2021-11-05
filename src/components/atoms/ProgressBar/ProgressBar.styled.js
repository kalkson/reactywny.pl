import styled from 'styled-components';

const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  z-index: 1000;
  outline: none;
  border: none;
  width: 100%;

  /* transition: width 2s; */
  /* width: ${({ value }) => `${value}%`}; */

  transform-origin: left;
  will-change: transform;
  transform: scale3d(${({ value }) => value}, 1, 1);
  transform-style: preserve-3d;
`;

export default ProgressBar;
