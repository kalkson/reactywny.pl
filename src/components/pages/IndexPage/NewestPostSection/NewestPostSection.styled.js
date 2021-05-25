import styled from 'styled-components';

const StyledNewestPostSection = styled.section`
  position: relative;

  & .desktop-all-anchor {
    display: block;
    margin-top: 20px;
  }

  .swipe-tip {
    z-index: 20;
    position: absolute;
    top: 20%;
    right: 0;
    padding: 5px 10px;
    text-align: left;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
    border-radius: 3px 0 0 3px;
    border-bottom: solid 2px ${({ theme }) => theme.colors.mainBlue};

    @media ${({ theme }) => theme.media.tablet} {
      display: none;
    }

    animation: shock 6s linear infinite;
    transform-origin: center;

    @keyframes shock {
      0% {
        transform: rotate(0);
      }
      1% {
        transform: rotate(15deg);
      }
      3% {
        transform: rotate(-15deg);
      }
      5% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(0);
      }
    }
  }

  padding-left: 0;
  padding-right: 0;

  @media ${({ theme }) => theme.media.tablet} {
    padding-bottom: 100px;
    padding-bottom: 40px;
    padding-left: initial;
    padding-right: initial;
  }

  .newest-static-container {
    display: none;

    @media ${({ theme }) => theme.media.tablet} {
      display: block;
    }
  }

  .newest-slider-container {
    display: block;

    @media ${({ theme }) => theme.media.tablet} {
      display: none;
    }

    &__anchor {
      display: block;
      text-align: center;
    }
  }

  .newest-post {
    color: ${({ theme }) => theme.colors.text};
    margin-top: 28px;

    &__headline {
      font-size: 3.2rem;
      margin-bottom: 12px;
    }

    &__description {
      line-height: 2.1rem;
      margin-bottom: 16px;
      font-size: 1.6rem;
    }

    &__button {
      max-width: 100%;
    }

    &-2,
    &-3 {
      .newest-post__headline {
        font-size: 2.4rem;
      }

      .newest-post__button {
        margin-top: 15px;
      }

      .newest-post__description {
        margin: 0;
      }
    }
  }
`;

export default StyledNewestPostSection;
