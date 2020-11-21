import styled from 'styled-components';

const StyledNewPostCarousel = styled.div`
  position: relative;
  height: 450px;
  z-index: 5;

  width: 270px;
  transform: translateX(-15px);

  & button {
    position: absolute;
    top: 50%;
  }

  & .carousel__button__prev {
    left: -70px;
    background: transparent;

    & > svg {
      transform: rotate(90deg);
      width: 40px;
      height: 50px;

      & path {
        stroke: ${({ theme }) => theme.colors.mainFair};
      }
    }
  }

  & > div {
    transition: opacity 200ms linear;
  }

  & > div:nth-of-type(1) {
    z-index: 5;
    opacity: 1;
  }
  & > div:nth-of-type(2) {
    z-index: 4;
    opacity: 1;
  }
  & > div:nth-of-type(3) {
    z-index: 3;
    opacity: 0.9;
  }
  & > div:nth-of-type(4) {
    z-index: 2;
    opacity: 0.8;
  }
  & > div:nth-of-type(5) {
    z-index: 1;
    opacity: 0.75;
  }

  @media (min-width: 768px) {
    width: 370px;
  }

  @media ${({ theme }) => theme.media.desktop} {
    width: 470px;
    height: 550px;
  }
`;

export default StyledNewPostCarousel;
