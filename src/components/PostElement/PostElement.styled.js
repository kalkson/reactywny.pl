import styled from 'styled-components';

const StyledPostElement = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 40px 40px;
  padding: 40px 0 40px 40px;
  color: ${({ theme }) => theme.colors.mainFair};
  width: 300px;
  margin: 0 auto;
  border-left: solid 5px ${({ theme }) => theme.colors.mainFair};
  position: relative;

  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 25px;
    height: 25px;
    background-color: ${({ theme }) => theme.colors.mainFair};
    border-radius: 25px;
    left: -15px;
    top: calc(50% - 12.5px);
  }

  .post {
    &__top {
      font-size: 1.2rem;

      &__date {
        text-transform: uppercase;
        margin-right: 7px;
      }

      &__category {
        color: ${({ theme }) => theme.colors.mainBlue};
      }
    }

    &__image {
      width: 255px;
      height: 140px;
    }

    &__picture {
      animation-name: image-appear;
      animation-duration: 400ms;
      animation-fill-mode: forwards;
    }

    @keyframes image-appear {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    &__title {
      font-size: 2.2rem;
      font-weight: ${({ theme }) => theme.fonts.semiBold};
    }

    &__description {
      font-size: 1.4rem;
    }

    &__button {
      color: ${({ theme }) => theme.colors.mainBlue};
      font-size: 1.2rem;
      font-weight: ${({ theme }) => theme.fonts.semiBold};
    }
  }

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }

  @media ${({ theme }) => theme.media.laptop} {
    width: 500px;
    .post {
      &__top {
        font-size: 2.5rem;
      }

      &__image {
        width: 478px;
      }

      &__title {
        font-size: 3.6rem;
        font-weight: ${({ theme }) => theme.fonts.semiBold};
      }

      &__description {
        font-size: 2.5rem;
      }

      &__button {
        color: ${({ theme }) => theme.colors.mainBlue};
        font-size: 2rem;
        font-weight: ${({ theme }) => theme.fonts.semiBold};
      }
    }
  }
`;

export default StyledPostElement;
