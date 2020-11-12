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

    & h1 {
      text-align: center;
      color: ${({ theme }) => theme.colors.mainFair};
      width: fit-content;
      z-index: 0;
      margin: 42px 0 70px;
      font-size: 5.4rem;
      position: relative;

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

    &__paragraph {
      display: none;
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    padding-top: 380px;
    flex-direction: row;
    justify-content: space-around;

    .posts__left-section {
      flex-direction: column;
      width: 400px;

      &__paragraph {
        width: 100%;
        display: block;
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.mainFair};
      }
    }

    .posts__wrapper {
      margin-right: 50px;
    }
  }

  @media ${({ theme }) => theme.media.desktop} {
    .posts__wrapper {
      margin-right: 250px;
    }

    .posts__left-section {
      width: 600px;

      &__paragraph {
        font-size: 2.8rem;
      }
    }
  }
`;

export default StyledPostsWrapperContainer;
