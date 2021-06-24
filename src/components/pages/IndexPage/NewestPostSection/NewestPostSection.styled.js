import styled from 'styled-components';

const StyledNewestPostSection = styled.section`
  position: relative !important;

  padding: 0 5px;

  @media ${({ theme }) => theme.media.mobile} {
    padding: 0 30px;
  }

  @media ${({ theme }) => theme.media.mobileXL} {
    padding: 0 10px;
  }

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

  @media ${({ theme }) => theme.media.tablet} {
    padding-bottom: 100px;
    padding-bottom: 40px;
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
      margin-top: 20px;
    }
  }

  .post-item {
    padding: 0 10px;

    @media ${({ theme }) => theme.media.mobileXL} {
      padding: 40px;
    }

    color: ${({ theme }) => theme.colors.text};
    margin-top: 28px;

    &__meta-group {
      margin-top: 10px;
      display: flex;
    }

    &__date {
      margin-right: 12px;
    }

    &__category {
      color: ${({ theme }) => theme.colors.mainBlue};
    }

    &__headline {
      font-size: 3.2rem;
      margin-bottom: 12px;
    }

    &__description {
      line-height: 2.1rem;
      margin-bottom: 24px;
      font-size: 1.6rem;
    }

    &__button {
      max-width: 100%;
    }

    &-2,
    &-3 {
      .post-item__headline {
        font-size: 2.4rem;
      }

      .post-item__button {
        margin-top: 15px;
      }

      .post-item__description {
        margin: 0;
      }
    }

    &-0,
    &-1,
    &-2,
    &-3 {
      .post-item__button {
        margin-top: 15px;
        max-width: 190px;
      }
    }
  }
`;

export default StyledNewestPostSection;
