import styled from 'styled-components';

const StyledNewsletterSection = styled.section`
  .newsletter {
    &__box {
      display: flex;
      justify-content: space-between;
      flex-direction: column-reverse;

      @media ${({ theme }) => theme.media.tablet} {
        height: 450px;
        flex-direction: row;
        justify-content: space-between;
      }
    }

    &__form {
      align-self: center;
      display: flex;
      flex-direction: column;
      justify-self: flex-start;
      width: 100%;

      @media ${({ theme }) => theme.media.tablet} {
        max-width: 300px;
        height: 250px;
      }
    }

    &__input {
      margin-bottom: 20px;
      width: 100%;

      @media ${({ theme }) => theme.media.tablet} {
        width: unset;
      }
    }

    &__button {
      @media ${({ theme }) => theme.media.mobileXL} {
        max-width: 190px !important;
      }
    }

    &__paragraph {
      margin-bottom: 35px;

      @media ${({ theme }) => theme.media.tablet} {
        margin-bottom: auto;
      }
    }

    &__illustration-container {
      height: fit-content;
      width: 100%;
      align-self: center;
      display: flex;
      justify-content: center;

      @media ${({ theme }) => theme.media.tablet} {
        width: unset;
      }
    }

    &__illustration {
      width: 100%;
      margin-top: 15px;
      margin-bottom: 15px;
      max-width: 300px;

      @media ${({ theme }) => theme.media.tablet} {
        width: 300px;
        max-width: unset;
      }

      @media ${({ theme }) => theme.media.laptop} {
        width: 500px;
      }
    }
  }

  .benefits {
    &__headline {
      margin-top: 40px;
      margin-bottom: 90px;
    }

    &__container {
      display: grid;
      grid-template-columns: 1fr;
      grid-column-gap: 60px;

      @media ${({ theme }) => theme.media.tablet} {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }

    &__item {
      &:not(:first-of-type) {
        margin-top: 70px;

        @media ${({ theme }) => theme.media.tablet} {
          margin-top: unset;
        }
      }
    }

    &__note {
      margin-top: 60px;
    }
  }
`;

export default StyledNewsletterSection;
