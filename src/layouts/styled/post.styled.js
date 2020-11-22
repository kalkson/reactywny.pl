import styled from 'styled-components';

const StyledPostLayout = styled.article`
  padding: 200px 17px 0;
  background-color: ${({ theme }) => theme.colors.mainDark};
  color: ${({ theme }) => theme.colors.mainFair};
  font-weight: ${({ theme }) => theme.fonts.Bold};
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

  .post {
    &__nav {
      display: flex;
      font-size: 0.8rem;
      color: darkgray;

      &__previous {
        display: flex;
        align-items: center;
        text-decoration: underline;

        svg {
          width: 0.8rem;
          height: 0.8rem;
          margin-right: 2px;
          path {
            fill: darkgray;
          }
        }
      }
    }

    &__top {
      font-size: 1.2rem;

      &__date {
        text-transform: uppercase;
        margin-right: 7px;
      }

      &__category {
        color: ${({ theme }) => theme.colors.mainBlue};
      }
    }

    &__featuredImage {
      width: 100vw;
      transform: translateX(-17px);
      height: 200px;
      box-shadow: inset 0px 0px 66px 5px rgba(0, 0, 0, 0.75);
    }

    &__image {
      max-width: 100%;
    }

    &__title {
      font-size: 3rem;
      font-weight: ${({ theme }) => theme.fonts.Bold};
    }

    &__description {
      font-size: 2.2rem;
    }

    &__paragraph {
      font-size: 1.6rem;
      line-height: 2.2rem;
      font-weight: 400;

      & a {
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.mainBlue};
        font-weight: 500;
      }
    }

    &__disquis {
      margin-top: 40px;
    }

    &__heading {
      margin-bottom: 20px !important;
      margin-top: 30px;
      padding-bottom: 5px;
      border-bottom: solid 2px rgba(255, 255, 255, 0.1);
    }

    &__syntax {
      font-size: 0.9rem !important;
      line-height: 15px;
      font-weight: 500 !important;
      font-weight: initial;
      font-weight: 600;
      width: 100%;
      margin-bottom: 30px !important;

      & * {
        font-family: 'Fira Code', monospace;
      }
    }

    &__cli {
      max-width: 85%;
      min-width: 85%;
      font-size: 0.9rem !important;
      line-height: 15px;
      font-weight: 500 !important;
      padding: 10px;
      margin-bottom: 30px !important;
    }

    &__video {
      align-self: center;
      width: 300px;
      height: 169px;
      margin: 30px 0;

      @media (min-width: 425px) {
        width: 90%;
        height: 300px;
      }
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    padding: 400px 232px 0 80px;

    & > *:not(:last-child) {
      margin-bottom: 40px;
    }

    .post {
      &__nav {
        font-size: 1.4rem;

        &__previous {
          svg {
            width: 1.6rem;
            height: 1.6rem;
            margin-right: 5px;
          }
        }
      }

      &__top {
        font-size: 2.5rem;
      }

      &__featuredImage {
        width: 100%;
        transform: translateX(0);
        height: 300px;
      }

      &__image {
        max-width: 80%;
      }

      &__title {
        font-size: 5.6rem;
      }

      &__description {
        font-size: 3rem;
        font-weight: 600;
      }

      &__paragraph {
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.4rem;
      }

      &__syntax {
        font-size: 1.6rem !important;
        line-height: 30px;
      }

      &__cli {
        max-width: 100%;
        min-width: 45%;
        font-size: 1.6rem !important;
        line-height: 30px !important;
        padding: 30px 20px 20px !important;
      }

      &__video {
        height: 36.6vw;
        width: 65vw;
      }

      &__heading {
        margin-top: 5px;
      }
    }
  }

  @media ${({ theme }) => theme.media.laptop} {
    padding: 400px 546px 150px 208px;

    .post {
      &__image {
        max-width: 80%;
      }

      &__featuredImage {
        width: 100vw;
        transform: translateX(-208px);
        height: 400px;
      }

      &__video {
        height: 25.3vw;
        width: 45vw;
      }
    }
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding: 400px 792px 150px 416px;

    .post {
      &__image {
        height: 36.6vw;
        max-width: 65vw;
      }

      &__featuredImage {
        transform: translateX(-416px);
      }
    }
  }
`;

export default StyledPostLayout;
