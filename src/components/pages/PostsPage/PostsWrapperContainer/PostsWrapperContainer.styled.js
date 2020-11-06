import styled from 'styled-components';

const StyledPostsWrapperContainer = styled.article`
  padding-top: 130px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.mainDark};

  .posts__left-section {
    display: flex;
    flex-direction: column;
    align-items: center;

    & header {
      text-align: center;
      color: ${({ theme }) => theme.colors.mainFair};
      width: fit-content;
      z-index: 0;
      margin: 42px 0 70px;

      &:after {
        content: '';
        display: block;
        width: 75px;
        height: 45px;
        background-color: ${({ theme }) => theme.colors.mainBlue};
        position: absolute;
        right: 0;
        bottom: -15px;
        z-index: -1;
      }
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    padding-top: 310px;

    .posts__left-section {
    display: flex;
    flex-direction: column;
    align-items: center;

    & header {
      text-align: center;
      color: ${({ theme }) => theme.colors.mainFair};
      width: fit-content;
      z-index: 0;
      margin: 42px 0 70px;

      &:after {
        content: '';
        display: block;
        width: 75px;
        height: 45px;
        background-color: ${({ theme }) => theme.colors.mainBlue};
        position: absolute;
        right: 0;
        bottom: -15px;
        z-index: -1;
      }
    }
  }
`;

export default StyledPostsWrapperContainer;
