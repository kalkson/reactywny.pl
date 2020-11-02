import styled from 'styled-components';

const StyledPageHeader = styled.header`
  position: fixed;
  height: 100px;
  width: 100vw;
  padding: ${({ theme }) => theme.paddings.mobile};
  background-color: ${({ theme }) => theme.colors.mainFair};
  justify-content: space-between;
  transition: height 300ms ease-out;
  display: flex;
  justify-content: center;
  z-index: 10;

  height: ${({ isMenuVisible, isScrolledDown }) =>
    isScrolledDown && isMenuVisible ? '160px' : null};

  height: ${({ isMenuVisible, isScrolledDown }) =>
    !isScrolledDown && isMenuVisible ? '160px' : null};

  height: ${({ isMenuVisible, isScrolledDown }) =>
    isScrolledDown && !isMenuVisible ? '50px' : null};

  & .menu-button {
    position: absolute;
    left: ${({ theme }) => theme.paddings.mobile};
    top: ${({ theme }) => theme.paddings.mobile};
    transform-origin: center;
    transition: transform 300ms ease-in-out;

    transform: scale(${({ isScrolledDown }) => (isScrolledDown ? 0.7 : 1)});
  }

  & .header__logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
    width: fit-content;
    margin: 0 auto;

    &__image {
      transition: width 200ms linear, height 200ms linear;

      width: 200px;
      height: 38px;

      width: ${({ isScrolledDown }) => (isScrolledDown ? '130px' : null)};
      height: ${({ isScrolledDown }) => (isScrolledDown ? '25px' : null)};
    }

    &__underline {
      font-size: 1rem;

      display: ${({ isScrolledDown }) => (isScrolledDown ? 'none' : 'inherit')};
    }
  }

  & .header__social {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  & .header__image {
    position: absolute;
    height: 30px;
    width: 50px;
    bottom: -15px;
    z-index: 5;
    left: calc(50% - 25px);
    display: ${({ isScrolledDown }) => (isScrolledDown ? 'none' : 'inherit')};
  }

  & .header__nav {
    position: absolute;
    bottom: 50px;
    width: fit-content;
    /* transform: translateY(-20px); */

    display: ${({ isMenuVisible }) => (isMenuVisible ? 'block' : 'none')};
    animation: nav-appear 300ms ease-in;

    @keyframes nav-appear {
      0% {
        opacity: 0;
        transform: translateY(-20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    & > ul {
      padding: 0;
      margin: 0;
    }
  }

  /* Tablet */
  /* _____________________________________________________________________ */

  @media ${({ theme }) => theme.media.tablet} {
    height: 310px;
    padding: ${({ isScrolledDown, theme }) =>
      isScrolledDown ? '0' : theme.paddings.tablet};

    /* height: ${({ isMenuVisible }) => (isMenuVisible ? '450px' : '310px')}; */

    height: ${({ isMenuVisible, isScrolledDown }) =>
      isScrolledDown && isMenuVisible ? '450px' : null};

    height: ${({ isMenuVisible, isScrolledDown }) =>
      !isScrolledDown && isMenuVisible ? '450px' : null};

    height: ${({ isMenuVisible, isScrolledDown }) =>
      isScrolledDown && !isMenuVisible ? '120px' : null};

    & .header__logo {
      transition: top 200ms linear;
      top: ${({ isScrolledDown }) => (isScrolledDown ? '20px' : null)};
      position: relative;
      &__image {
        width: 580px;
        height: 160px;
        position: relative;

        width: ${({ isScrolledDown }) => (isScrolledDown ? '400px' : null)};
        height: ${({ isScrolledDown }) => (isScrolledDown ? '80px' : null)};
      }

      &__underline {
        font-size: 3rem;
      }
    }

    & .menu-button {
      left: ${({ theme }) => theme.paddings.tablet};
      top: ${({ theme }) => theme.paddings.tablet};

      transform: scale(2)
        ${({ isScrolledDown }) => (isScrolledDown ? 'translateY(-5px)' : null)};

      &:after {
        content: 'close';
        text-transform: uppercase;
        font-size: 1.5rem;
        font-style: italic;
        font-weight: ${({ theme }) => theme.fonts.ExtraBold};
        transform-origin: left;
        opacity: 0;
        position: relative;
        right: 5px;

        animation: close-appear 300ms ease-in-out 150ms forwards;

        @keyframes close-appear {
          0% {
            transform: translateX(50px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        display: ${({ isMenuVisible }) => (isMenuVisible ? 'block' : 'none')};
      }
    }

    & .header__social {
      top: ${({ theme }) => theme.paddings.tablet};
      right: ${({ theme }) => theme.paddings.tablet};

      /* top: ${({ isScrolledDown, theme }) =>
        isScrolledDown ? 'calc(50% - 22px)' : theme.paddings.tablet};
      } */

      transform: ${({ isScrolledDown }) =>
        isScrolledDown ? 'translateY(-25px)' : null};

      & svg {
        width: 44px;
        height: 44px;
      }
    }

    & .header__image {
      transform: scale(2);
    }

    & .header__nav {
      bottom: 80px;

      & > ul {
        padding: 0;
        margin: 0;
      }
    }
  }
`;

export default StyledPageHeader;
