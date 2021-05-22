import styled from 'styled-components';

const StyledHeroSection = styled.section`
  position: relative;
  display: flex;
  /* flex-flow: row nowrap; */
  height: auto;
  align-items: flex-start;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 40px;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
    align-items: center;
    height: 600px;
    padding: 0;
    justify-content: space-between;
  }

  &:before,
  &:after {
    display: none;
  }

  .hero {
    /* &__text-container {
      @media ${({ theme }) => theme.media.tablet} {
      }
    } */

    &__button {
      margin-top: 30px;
    }

    &__secondary-text {
      color: ${({ theme }) => theme.colors.text};
      line-height: 2.1rem;
    }

    &__illustration-container {
      position: relative;
    }

    &__illustration {
      position: relative;
      right: 0;
      width: 100%;
      height: 250px;
      align-self: center;

      @media ${({ theme }) => theme.media.mobileXL} {
        align-self: center;
        width: 400px;
      }

      @media ${({ theme }) => theme.media.tablet} {
        /* margin-top: 100px; */
        width: auto;
        height: auto;
      }
      /* top: 78px; */

      & #Group_61 {
        transform: translate(488px, 162px);
        animation: svg-float 6s infinite 0.1s;

        & #Group_47 {
          display: none;
        }
      }

      & #Group_120 {
        animation: svg-float 9s infinite 0.4s;
      }

      #Group_171 {
        animation: svg-float 4s infinite 0.2s;
      }

      #Group_140 {
        animation: svg-float 15s infinite;
      }

      @keyframes svg-float {
        0% {
          transform: translate(488px, 162px);
        }
        50% {
          transform: translate(488px, 172px);
        }
        100% {
          transform: translate(488px, 162px);
        }
      }
    }
  }
`;

export default StyledHeroSection;
