import styled from 'styled-components';

const StyledNewsletterSection = styled.section`
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
