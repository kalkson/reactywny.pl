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

  height: ${({ isMenuVisible }) => (isMenuVisible ? '160px' : '100px')};

  & .menu-button {
    position: absolute;
    left: ${({ theme }) => theme.paddings.mobile};
    top: ${({ theme }) => theme.paddings.mobile};
  }

  & .header__logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
    width: fit-content;
    margin: 0 auto;

    &__image {
      width: 200px;
      height: 38px;
    }

    &__underline {
      font-size: 1rem;
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
`;

export default StyledPageHeader;
