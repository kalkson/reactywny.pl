import styled from 'styled-components';

const StyledNewestPostSection = styled.section`
  padding: ${({ theme }) => theme.paddings.mobile};
  background-color: ${({ theme }) => theme.colors.mainDark};

  & > header {
    text-align: right;
    color: ${({ theme }) => theme.colors.mainFair};
    position: relative;
    z-index: 0;
    transform: translateY(-10px);

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
    display: flex;
    flex-direction: column;

    & > div:not(:last-child) {
      margin-bottom: 30px;
    }

    & > div:nth-child(1) {
      align-self: flex-start;
    }

    & > div:nth-child(2) {
      align-self: center;
    }

    & > div:nth-child(3) {
      align-self: flex-end;
    }
  }

  & .link {
    display: block;
    text-align: center;
    margin-bottom: 100px;
  }
`;

export default StyledNewestPostSection;
