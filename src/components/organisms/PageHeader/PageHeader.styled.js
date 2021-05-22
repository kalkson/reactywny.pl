import styled from 'styled-components';

const StyledPageHeader = styled.header`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  height: 100%;

  &::before,
  &::after {
    display: none;
  }

  .header-elements {
    &__mobile-menu {
      position: absolute;
      top: 0;
      left: 0;
      display: none;
      background-color: ${({ theme }) => theme.colors.primary};
      width: 100%;
      height: 500px;

      &.active {
        display: block;
      }
    }

    &__button {
      position: absolute;
      z-index: 6;
      display: block;
      margin-top: 20px;

      @media ${({ theme }) => theme.media.mobileXL} {
        display: none;
      }
    }

    &__logo {
      position: absolute;
      z-index: 6;
      top: 0;
      right: 15px;
      height: 82px;

      @media ${({ theme }) => theme.media.mobileXL} {
        top: 20px;
        right: 15px;
      }
    }

    &__image {
      width: 182px;

      height: ${({ isMenuVisible }) => (isMenuVisible ? '83px' : null)};

      @media ${({ theme }) => theme.media.mobileXL} {
        width: 300px;
      }

      & #Path_2,
      & #Icon_awesome-react {
        fill: ${({ theme }) => theme.colors.text};
      }
      #Rectangle_32 {
        fill: ${({ theme }) => theme.colors.primary};
      }
    }

    &__nav {
      margin-top: 30px;
      position: relative;
      width: fit-content;
      display: none;
      opacity: 0;

      ${({ isMenuVisible }) =>
        isMenuVisible &&
        `
        display: block;
        position: absolute;
        bottom: 15px;
        left: 20px;
      `};

      @media ${({ theme }) => theme.media.mobileXL} {
        display: block;
      }

      animation: nav-appear 0.2s forwards 0.1s ease-in-out;
    }

    @keyframes nav-appear {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    &__link {
      color: inherit;
    }

    &__list {
      margin: 0;
      flex-flow: row nowrap;
      justify-content: space-between;
      padding: 0;

      & > li {
        font-weight: 500;
        font-size: 1.8rem;
        display: inline-block;

        color: ${({ theme }) => theme.colors.text};

        &:not(:first-child) {
          margin-left: 2.2rem;

          @media ${({ theme }) => theme.media.laptop} {
            margin-left: 3.2rem;
          }

          @media ${({ theme }) => theme.media.desktop} {
            margin-left: 5.2rem;
          }
        }
      }
    }
  }
`;

export default StyledPageHeader;
