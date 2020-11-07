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
      width: 100%;
    }

    &__title {
      font-size: 3rem;
      font-weight: ${({ theme }) => theme.fonts.semiBold};
    }

    &__description {
      font-size: 2.2rem;
    }

    &__paragraph {
      font-size: 1.2rem;
    }

    &__disquis {
      margin-top: 100px;
    }

    &__heading {
      margin-bottom: 20px !important;
      padding-bottom: 10px;
      border-bottom: solid 2px ${({ theme }) => theme.colors.mainFair};
    }

    &__syntax {
      font-size: 0.9rem !important;
      line-height: 15px;
      font-weight: 500 !important;
      font-weight: initial;
      font-weight: 600;
      width: 100%;
      margin-bottom: 30px !important;
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
  }

  @media ${({ theme }) => theme.media.tablet} {
    padding: 400px 232px 0 80px;

    & > *:not(:last-child) {
      margin-bottom: 40px;
    }

    .post {
      &__top {
        font-size: 2.5rem;
      }

      &__featuredImage {
        width: 100%;
        transform: translateX(0);
        height: 300px;
      }

      &__image {
        width: 80%;
      }

      &__title {
        font-size: 5.6rem;
      }

      &__description {
        font-size: 3.6rem;
      }

      &__paragraph {
        font-size: 1.6rem;
        font-weight: 400;
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
    }
  }

  @media ${({ theme }) => theme.media.laptop} {
    padding: 400px 546px 150px 208px;

    .post {
      &__image {
        width: 80%;
      }

      &__featuredImage {
        width: 100vw;
        transform: translateX(-208px);
        height: 400px;
      }
    }
  }

  @media ${({ theme }) => theme.media.desktop} {
    padding: 400px 792px 150px 416px;

    .post {
      &__image {
        width: 80%;
      }

      &__featuredImage {
        transform: translateX(-416px);
      }
    }
  }
`;

export default StyledPostLayout;
