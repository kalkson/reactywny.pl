import styled from 'styled-components';

const StyledNewestPostSection = styled.section`
  padding: ${({ theme }) => theme.paddings.mobile};
  background-color: ${({ theme }) => theme.colors.mainDark};

  & > header {
    text-align: right;
    color: ${({ theme }) => theme.colors.mainFair};
    position: relative;
    z-index: 0;

    &:after {
      content: '';
      position: absolute;
      background-color: ${({ theme }) => theme.colors.mainFair};
      width: 320px;
      height: 70px;
      top: 0;
      right: -10px;
      z-index: -1;
    }
  }

  & .newest-post__wrapper {
    margin: 80px 0;
  }
`;

export default StyledNewestPostSection;
