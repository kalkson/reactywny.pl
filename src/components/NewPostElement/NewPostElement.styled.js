import styled from 'styled-components';

const StyledNewPostElement = styled.div`
  width: 300px;
  height: 140px;
  background-color: ${({ theme }) => theme.colors.mainFair};
  display: flex;
  border-radius: 56px;
  margin: 25px auto;
  padding: 30px 40px;
  transition: height 200ms linear;
  transform-origin: top;
  cursor: pointer;

  &:hover {
    height: 170px;

    .newest-post__wrapper__left__description {
      opacity: 1;
      visibility: visible;
    }

    .newest-post__wrapper__left__icon {
      transform: rotate(-90deg);
      transform-origin: center;
    }
  }

  & .newest-post__wrapper__left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__icon {
      margin-right: 10px;
      transition: transform 200ms ease-in;
    }

    &__date {
      font-size: 1.3rem;
      color: ${({ theme }) => theme.colors.mainBlue};
    }

    &__description {
      font-size: 1.5rem;
      visibility: hidden;
      opacity: 0;
      transition: opacity 200ms ease-in;
    }
  }
`;

export default StyledNewPostElement;
