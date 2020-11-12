import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledNewPostElement = styled(Link)`
  width: 300px;
  /* height: 140px; */
  background-color: ${({ theme }) => theme.colors.mainFair};

  display: flex;
  border-radius: 5px 5px 0 0;
  padding: 30px 40px;
  transition: height 200ms linear;
  transform-origin: top;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 0;

  &:after {
    content: '';
    position: absolute;
    height: 200px;
    width: 200px;
    display: block;
    right: -100px;
    border-radius: 20px;
    top: 50px;
    transform: rotate(45deg);

    @media (max-width: 1024px) {
      z-index: -1;
    }
    background-color: black;
    transition: transform 300ms ease-in-out;
  }

  &:hover {
    height: 170px;

    &:after {
      transform: rotate(0deg);
    }

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
      color: ${({ theme }) => theme.colors.mainDark};
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
