import styled from 'styled-components';

const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.mainBlue};
  z-index: 1000;
  outline: none;
  border: none;
  transform-origin: left;

  /* transform: ${({ value }) => `scaleX(${value})`};
   */
  width: ${({ value }) => `${value}%`};
`;

export default ProgressBar;
