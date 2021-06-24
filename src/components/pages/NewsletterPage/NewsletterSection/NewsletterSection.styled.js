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
      position: relative;

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
      margin-bottom: 15px;
      text-align: center;

      @media ${({ theme }) => theme.media.tablet} {
        margin-bottom: auto;
      }
    }

    &__success {
      text-align: center;
    }

    &__error {
      color: red;
      margin-top: 10px;
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

  .checkmark {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: block;
    stroke-width: 2;
    stroke: #fff;
    stroke-miterlimit: 10;
    margin: 10% auto;
    box-shadow: inset 0px 0px 0px #7ac142;
    animation: fillCheck 0.4s ease-in-out 0.4s forwards,
      scaleCheck 0.3s ease-in-out 0.9s both;

    &__circle {
      stroke-dasharray: 166;
      stroke-dashoffset: 166;
      stroke-width: 2;
      stroke-miterlimit: 10;
      stroke: #7ac142;
      fill: none;
      animation: strokeCheck 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
    }

    &__check {
      transform-origin: 50% 50%;
      stroke-dasharray: 48;
      stroke-dashoffset: 48;
      animation: strokeCheck 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
    }
  }

  @keyframes strokeCheck {
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes scaleCheck {
    0%,
    100% {
      transform: none;
    }
    50% {
      transform: scale3d(1.1, 1.1, 1);
    }
  }

  @keyframes fillCheckCheck {
    100% {
      box-shadow: inset 0px 0px 0px 30px #7ac142;
    }
  }
`;

export default StyledNewsletterSection;
