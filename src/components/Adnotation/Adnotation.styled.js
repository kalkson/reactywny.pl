import styled from 'styled-components';

const StyledAdnotation = styled.div`
  background-color: ${({ theme }) => theme.colors.mainFair};
  display: flex;
  padding: 14px;
  position: relative;
  width: 80%;
  margin-left: auto;
  margin-top: 100px;
  margin-bottom: 0;
  transform: translateX(17px);
  border-radius: 50px 0 0 50px;

  .adnotation {
    &__image {
      border-radius: 100px;
      border: solid 4px ${({ theme }) => theme.colors.mainDark};
      display: block;
      width: 84px;
      height: 84px;
      position: relative;
      z-index: 1;
      /* height: 84px;
      width: 200px; */
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
        font-size: 1.5rem;
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
        font-size: 0.9rem;
        font-weight: 400;
      }
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    padding: 30px;
    border-radius: 100px 0 0 100px;

    background: transparent;
    background: linear-gradient(
      270deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(241, 234, 234, 1) 100%
    );
    position: relative;
    transform: translateX(300px);
    width: 100%;

    .adnotation {
      &__image {
        height: 150px;
        width: 150px;
      }

      &__description {
        width: 200px;
        &__name {
          font-size: 2rem;

          &:before {
            width: 92px;
            left: -92px;
          }
        }

        &__paragraph {
          font-size: 1.4rem;
        }
      }
    }
  }
`;

export default StyledAdnotation;
