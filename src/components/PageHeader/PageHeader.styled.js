import styled from 'styled-components';

const StyledPageHeader = styled.header`
  position: fixed;
  height: 130px;
  width: 100%;
  padding: ${({ theme }) => theme.paddings.mobile};
  background-color: ${({ theme }) => theme.colors.mainFair};
  justify-content: space-between;
  transition: height 300ms ease-in-out 200ms;
  display: flex;
  justify-content: center;
  z-index: 10;
  box-shadow: 0px 30px 75px 0px rgba(0, 0, 0, 0.5);

  transform: translate3d(0, 0, 0);

  height: ${({ isMenuVisible, isScrolledDown }) =>
    isScrolledDown && isMenuVisible ? '130px' : null};

  height: ${({ isMenuVisible, isScrolledDown }) =>
    !isScrolledDown && isMenuVisible ? '170px' : null};

  height: ${({ isMenuVisible, isScrolledDown }) =>
    isScrolledDown && !isMenuVisible ? '50px' : null};

  & .menu-button {
    position: absolute;
    left: ${({ theme }) => theme.paddings.mobile};
    top: ${({ theme }) => theme.paddings.mobile};
    transform-origin: center;
    transition: transform 300ms ease-in-out;
    background: none;

    /* transform: scale(${({ isScrolledDown }) =>
      isScrolledDown ? 0.7 : 1}); */
  }

  & .header__logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
    width: fit-content;
    margin: 0 auto;

    transition: transform 300ms ease-in;

    /* transform: translateY(
      ${({ isScrolledDown }) => (isScrolledDown ? '10px' : null)}
    ); */

    &__image {
      transition: width 300ms linear 200ms, height 300ms linear 200ms;

      width: 200px;
      height: 38px;
      min-height: 25px;

      width: ${({ isScrolledDown }) => (isScrolledDown ? '130px' : null)};
      height: ${({ isScrolledDown }) => (isScrolledDown ? '25px' : null)};
    }

    &__underline {
      font-size: 1.5rem;
      display: none;
      animation: underline-appear 300ms ease-in forwards 1s;
      opacity: 0;

      display: ${({ isScrolledDown }) => (!isScrolledDown ? 'block' : null)};
      display: ${({ isMenuVisible }) => (isMenuVisible ? 'block' : null)};

      @keyframes underline-appear {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
  }

  & .header__social {
    position: absolute;
    top: 10px;
    right: 10px;

    transition: transform 300ms ease-in;
  }

  & .header__image {
    position: absolute;
    height: 30px;
    width: 50px;
    bottom: -15px;
    z-index: 5;
    left: calc(50% - 25px);
    display: none;
    animation: image-appear 200ms linear;

    display: ${({ isScrolledDown }) => (!isScrolledDown ? 'block' : null)};

    display: ${({ isMenuVisible }) => (isMenuVisible ? 'block' : null)};

    @keyframes image-appear {
      0% {
        opacity: 0;
        transform: translate(100px, 200px);
      }
      100% {
        opacity: 1;
        transform: translate(0);
      }
    }
  }

  & .header__nav {
    position: absolute;
    bottom: 20px;
    width: fit-content;

    display: ${({ isMenuVisible }) => (isMenuVisible ? 'block' : 'none')};
    animation: nav-appear 300ms ease-in forwards 620ms;
    opacity: 0;

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

      & > li {
        position: relative;
        transition: transform 200ms ease-in-out;
        letter-spacing: 2px;
        font-weight: ${({ theme }) => theme.fonts.Black};

        &:before {
          content: '';
          position: absolute;
          top: -8px;
          left: calc(50%);
          width: 6px;
          height: 6px;

          display: ${({ isMenuVisible }) => (isMenuVisible ? 'block' : 'none')};

          border-radius: 5px;
          background-color: ${({ theme }) => theme.colors.mainDark};
          border: solid 2px ${({ theme }) => theme.colors.mainDark};

          transition: transform 200ms ease-in-out,
            background-color 200ms ease-in-out;

          @media ${({ theme }) => theme.media.tablet} {
            height: 8px;
            width: 8px;
            border: solid 3px ${({ theme }) => theme.colors.mainDark};
          }

          opacity: 0;
          animation-name: menu-link-appear;
          animation-duration: 500ms;
          animation-fill-mode: forwards;
          animation-timing-function: ease-in-out;
          animation-iteration-count: 1;
        }

        &:hover {
          transform: translateY(-10px);
          /* background-color: ${({ theme }) => theme.colors.mainDark}; */
        }
      }

      .header__nav__link-1:before {
        animation-delay: 500ms;
      }
      .header__nav__link-2:before {
        animation-delay: 600ms;
      }
      .header__nav__link-3:before {
        animation-delay: 700ms;
      }
      .header__nav__link-4:before {
        animation-delay: 800ms;
      }

      @keyframes menu-link-appear {
        0% {
          transform: translateY(-30px);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }

      @media ${({ theme }) => theme.media.tablet} {
        @keyframes menu-link-appear {
          0% {
            transform: translateY(-80px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      }
    }
  }

  /* Tablet */
  /* _____________________________________________________________________ */

  @media ${({ theme }) => theme.media.tablet} {
    height: 310px;

    padding: 0;

    /* height: ${({ isMenuVisible }) => (isMenuVisible ? '450px' : '310px')}; */

    height: ${({ isMenuVisible, isScrolledDown }) =>
      isScrolledDown && isMenuVisible ? '350px' : null};

    height: ${({ isMenuVisible, isScrolledDown }) =>
      !isScrolledDown && isMenuVisible ? '450px' : null};

    height: ${({ isMenuVisible, isScrolledDown }) =>
      isScrolledDown && !isMenuVisible ? '75px' : null};

    & .header__logo {
      transition: top 300ms linear, transform 300ms linear;
      top: ${({ isScrolledDown }) => (isScrolledDown ? '0' : null)};
      position: relative;

      transform: translateY(10px);

      /* transform: ${({ isScrolledDown }) =>
        isScrolledDown ? 'translateY(10px)' : null}; */

      &__image {
        min-height: 60px;
        width: 580px;
        height: 160px;
        position: relative;

        width: ${({ isScrolledDown }) => (isScrolledDown ? '300px' : null)};
        height: ${({ isScrolledDown }) => (isScrolledDown ? '60px' : null)};
      }

      &__underline {
        font-size: 3rem;
      }
    }

    & .menu-button {
      left: 30px;
      top: 30px;

      transform: scale(1.2)
        ${({ isScrolledDown }) => (isScrolledDown ? 'translateY(-5px)' : null)};

      &:after {
        content: 'close';
        text-transform: uppercase;
        font-size: 1.5rem;
        font-style: italic;
        font-weight: ${({ theme }) => theme.fonts.ExtraBold};
        transform-origin: left;
        opacity: 0;
        position: absolute;
        left: -5px;

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
      top: 30px;
      right: 30px;

      /* top: ${({ isScrolledDown, theme }) =>
        isScrolledDown ? 'calc(50% - 22px)' : theme.paddings.tablet};
      } */

      transform: ${({ isScrolledDown }) =>
        isScrolledDown ? 'translateY(-15px)' : null};

      & svg {
        width: 30px;
        height: 30px;
      }
    }

    & .header__image {
      width: 100px;
      height: 60px;
      bottom: -30px;
      left: calc(50% - 50px);
    }

    & .header__nav {
      bottom: 40px;

      & > ul {
        padding: 0;
        margin: 0;
      }
    }
  }
`;

export default StyledPageHeader;
