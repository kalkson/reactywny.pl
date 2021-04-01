import styled from 'styled-components';

const StyledAdnotation = styled.div`
  background-color: ${({ theme }) => theme.colors.mainFair};
  display: flex;
  padding: 14px;
  position: relative;
  margin-left: auto;
  margin-top: 100px;
  margin-bottom: 0;
  transform: translateX(17px);
  width: 100%;

  .adnotation {
    &__image-container {
      border-radius: 100px;
      border: solid 4px ${({ theme }) => theme.colors.mainDark};
      display: block;
      width: 100px;
      height: 100px;
      position: relative;
      z-index: 1;
      overflow: hidden;
    }

    &__description {
      color: ${({ theme }) => theme.colors.mainDark};
      width: 120px;
      margin-left: 10px;

      &__name {
        margin-bottom: 7px;
        background-color: ${({ theme }) => theme.colors.mainDark};
        color: ${({ theme }) => theme.colors.mainFair};
        font-style: italic;
        font-weight: 900;
        font-size: 1.4rem;
        position: relative;
        z-index: 0;

        &:before {
          content: '';
          background-color: ${({ theme }) => theme.colors.mainDark};
          height: 100%;
          left: -52px;
          width: 52px;
          top: 0;
          display: block;
          z-index: -1;
          position: absolute;
        }
      }

      &__paragraph {
        font-size: 1.1rem;
        font-weight: 400;
      }
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    position: relative;
    width: fit-content;
    padding: 14px 0 14px 14px;

    .adnotation {
      &__image {
        height: 150px;
        width: 150px;
      }

      &__image-container {
        height: 150px;
        width: 150px;
      }

      &__description {
        width: 200px;
        &__name {
          font-size: 2.3rem;

          &:before {
            width: 92px;
            left: -92px;
          }
        }

        &__paragraph {
          font-size: 1.8rem;
        }
      }
    }
  }
`;

export default StyledAdnotation;
