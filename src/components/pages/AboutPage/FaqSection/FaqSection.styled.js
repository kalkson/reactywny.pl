import styled from 'styled-components';

const StyledFaqSection = styled.section`
  .faq-section {
    &__wrapper {
      width: 100%;
      padding: 25px;
      color: ${({ theme }) => theme.colors.text};

      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 35px;

      @media ${({ theme }) => theme.media.tablet} {
        grid-template-columns: repeat(2, 1fr);
      }
      @media ${({ theme }) => theme.media.laptop} {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media ${({ theme }) => theme.media.tablet} {
      /* box-shadow: none; */
    }

    &__item {
      display: flex;
      flex-flow: column;
    }

    &__headline {
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
    }

    &__description {
      font-size: 1.6rem;
      font-weight: 300;
      letter-spacing: 0.6px;
    }
  }
`;

export default StyledFaqSection;
