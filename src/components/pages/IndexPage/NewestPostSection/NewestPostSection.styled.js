import styled from 'styled-components';

const StyledNewestPostSection = styled.section`
  padding-bottom: 40px;

  @media ${({ theme }) => theme.media.tablet} {
    padding-bottom: 100px;
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
