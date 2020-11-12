import styled from 'styled-components';

const StyledNewestPostSection = styled.section`
  padding: ${({ theme }) => theme.paddings.mobile};
  background-color: ${({ theme }) => theme.colors.mainDark};

  position: relative;

  .newest-post__icon {
    position: absolute;
    top: -150px;
    left: -20px;
    z-index: 2;
  }

  & h2 {
    text-align: right;
    color: ${({ theme }) => theme.colors.mainFair};
    position: relative;
    transform: translateY(-10px);
    margin-top: 80px;
    z-index: 3;
    font-size: 5.4rem;

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

    & > a {
      z-index: 5;
      position: relative;
    }

    & > a:not(:last-child) {
      margin-bottom: 30px;
    }

    & > a:nth-child(1) {
      align-self: flex-start;
    }

    & > a:nth-child(2) {
      align-self: center;
    }

    & > a:nth-child(3) {
      align-self: flex-end;
    }
  }

  & .link {
    display: block;
    text-align: center;
    margin-bottom: 100px;
  }

  @media ${({ theme }) => theme.media.tablet} {
    & h2 {
      text-align: left;
      margin: 100px 0 0 200px;

      &:after {
        left: 80px;
      }
    }

    .newest-post__icon {
      display: none;
    }

    & .newest-post__wrapper {
      & > a {
        width: 500px;
        height: 200px;

        font-size: 1.8em;
      }

      & > a:nth-child(1) {
        align-self: center;
      }

      & > a:nth-child(3) {
        align-self: center;
      }
    }

    & .link {
      width: fit-content;
      margin-left: auto;
      margin-right: auto;
      font-size: 2.2rem;
    }
  }

  @media ${({ theme }) => theme.media.laptop} {
    display: flex;
    flex-direction: column;

    & > .newest-post {
      display: flex;
      justify-content: space-between;

      & h2 {
        font-size: 9.3rem;
        margin-top: auto;
        margin-bottom: 130px;

        &:after {
          width: 326px;
          height: 83px;
          top: 50px;
          left: -56px;
        }
      }

      & .newest-post__wrapper {
        padding: 0 120px;
        align-items: flex-end;
        justify-content: flex-end;

        & > a {
          width: 450px;
          height: 200px;

          font-size: 1.8em;
        }

        & > div:nth-child(3) {
          justify-self: flex-end;
          margin-left: auto;
        }
      }
    }

    & .link {
      text-align: right;
      margin-left: auto;
      margin-right: 120px;
    }
  }

  @media ${({ theme }) => theme.media.desktop} {
    display: flex;
    flex-direction: column;

    & > .newest-post {
      & .newest-post__wrapper {
        & > a {
          width: 500px;
          height: 200px;

          font-size: 1.8em;
        }
      }
    }
  }
`;

export default StyledNewestPostSection;
