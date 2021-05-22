import styled from 'styled-components';

const StyledPostLayout = styled.article`
  padding: 200px 17px 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.mainFair};
  font-weight: ${({ theme }) => theme.fonts.Bold};
  display: flex;
  flex-direction: column;
  height: 100%;

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
      font-size: 1.9rem;
      line-height: 3rem;
      font-weight: 300;

      & a {
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.mainBlue};
        font-weight: 500;
      }

      & .tag {
        font-weight: 200;
        color: inherit;
        background-color: #3e5a60;
        padding: 1px 5px;
        border-radius: 3px;
        margin: 0 3px;
      }
    }

    &__disquis {
      margin-top: 40px;
    }

    &__heading {
      margin-bottom: 20px !important;
      padding-top: 30px;
      padding-bottom: 10px;
      border-bottom: solid 2px rgba(255, 255, 255, 0.1);
    }

    &__syntax {
      border: none !important;
      font-size: 1.3rem !important;
      line-height: 15px;
      font-weight: 500 !important;
      font-weight: initial;
      font-weight: 600;
      width: 100%;
      margin-bottom: 50px !important;

      ::-webkit-scrollbar {
        height: 6px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #888;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }

      & * {
        font-family: 'Fira Code', monospace;
      }
    }

    &__cli {
      max-width: 100%;
      min-width: 100%;
      font-size: 1.3rem !important;
      line-height: 15px;
      font-weight: 500 !important;
      padding: 10px;
      margin-bottom: 30px !important;
      margin-top: 0;

      & * {
        font-family: 'Fira Code', monospace !important;
      }
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

    &__quote {
      font-size: 3rem;
      font-weight: 100;
      font-style: italic;
      padding-left: 30px;
      border-left: solid 4px rgba(255, 255, 255, 0.3);
    }

    &__photo {
      display: flex;
      flex-direction: column;
      position: relative;
      margin: 70px 0 !important;
      align-items: center;

      &__sign {
        text-align: center;
        font-weight: 300;
        font-style: italic;
        display: inline-block;
        width: 100%;
        margin-top: 15px;
        color: rgba(255, 255, 255, 0.7);
      }
    }

    &__source {
      color: ${({ theme }) => theme.colors.mainFair};
      margin-top: 70px;
      padding-top: 20px;
      font-size: 2rem;
      border-top: solid 3px rgba(255, 255, 255, 0.4);

      &__list {
        padding-left: 20px;
        padding-right: 10px;
        font-size: 0.8em;
        font-weight: 300;
        font-style: italic;
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.mainBlue};
        word-wrap: break-word;
      }
    }

    &__navHead {
      color: ${({ theme }) => theme.colors.mainFair};
      font-size: 2rem;
      border-top: solid 1px rgba(255, 255, 255, 0.3);
      border-bottom: solid 1px rgba(255, 255, 255, 0.3);
      padding: 20px 0;

      &__list {
        font-size: 0.95em;
        font-weight: 300;
        font-style: italic;
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.mainBlue};
        padding: 0 0 0 40px;
        margin: 0;
        /* list-style-type: none; */

        &__item {
          margin: 3px 0;

          &::marker {
            color: white;
          }
        }
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

      /* &__image {
        max-width: 80%;
      } */

      &__title {
        font-size: 5.6rem;
      }

      &__description {
        font-size: 3rem;
        font-weight: 600;
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

      &__source {
        padding-top: 20px;

        &__list {
          font-size: 0.8em;
        }
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
