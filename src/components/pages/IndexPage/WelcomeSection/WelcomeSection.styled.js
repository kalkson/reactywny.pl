import styled from 'styled-components';

const StyledWelcomeSection = styled.div`
  position: relative;
  padding: 180px ${({ theme }) => theme.paddings.mobile} 50px;
  /* background-color: ${({ theme }) => theme.colors.mainDark}; */
  color: ${({ theme }) => theme.colors.mainFair};
  z-index: 1;

  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center left;

  .background-stripe {
    background-color: black;
    width: 500px;
    height: 4500px;
    position: absolute;
    top: -20%;
    left: 32%;
    transform: rotate(-25deg);
    z-index: 1;
    display: none;
  }

  & > h1 {
    z-index: 3;
    font-size: 5.4rem;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      background-color: ${({ theme }) => theme.colors.mainBlue};
      width: 156px;
      height: 92px;
      bottom: -30px;
      left: 65px;
      z-index: -1;
    }
  }

  & .welcome-section__content {
    padding: 15px;
    background-color: ${({ theme }) => theme.colors.mainFair};
    position: relative;
    width: 260px;
    margin-left: auto;
    margin-top: 50px;
    box-shadow: 0px 0px 45px 18px rgba(0, 0, 0, 0.75);

    & header {
      color: ${({ theme }) => theme.colors.mainBlue};
    }

    .welcome-sction__content__paragraph {
      color: ${({ theme }) => theme.colors.mainDark};
      font-size: 1.3rem;
      height: auto;
      z-index: 6;
      position: relative;
    }
  }

  .welcome-sction__content__image-cont {
    position: absolute;
    top: -85px;
    right: -5px;
    z-index: 0;
    z-index: 5;

    & > svg {
      width: 155px;
      height: 133px;
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    padding: 360px ${({ theme }) => theme.paddings.tablet};

    .background-stripe {
      display: block;
      width: 400px;
    }

    & .welcome-section__content {
      width: 340px;
      margin-right: 213px;

      .welcome-sction__content__paragraph {
        font-size: 1.9rem;
      }
    }

    .welcome-sction__content__image-cont {
      right: -225px;
      & > svg {
        transform: translateX(40px);
        width: 275px;
        height: 250px;
      }
    }
  }

  @media ${({ theme }) => theme.media.laptop} {
    display: flex;
    align-items: center;
    padding: 360px ${({ theme }) => theme.paddings.laptop} 30px;

    .background-stripe {
      width: 500px;
    }

    & > h1 {
      font-size: 93px;
      position: relative;
      height: fit-content;

      &:after {
        height: 176px;
        width: 298px;
      }
    }

    & .welcome-section__content {
      width: 370px;
      margin-right: 213px;

      .welcome-sction__content__paragraph {
        font-size: 1.9rem;
      }
    }

    .welcome-sction__content__image-cont {
      right: -225px;

      & > svg {
        width: 330px;
        height: 272px;
        transform: translateX(40px);
      }
    }
  }

  @media ${({ theme }) => theme.media.desktop} {
    display: flex;
    align-items: center;
    padding: 420px ${({ theme }) => theme.paddings.laptop} 160px;

    & > h1 {
      font-size: 93px;
      position: relative;
      height: fit-content;

      &:after {
        height: 176px;
        width: 298px;
      }
    }

    & .welcome-section__content {
      width: 500px;
      height: 453px;
      margin-right: 454px;
      padding: 30px 70px 30px 50px;

      .welcome-sction__content__paragraph {
        font-size: 1.9rem;
      }
    }

    .welcome-sction__content__image-cont {
      right: -466px;
      top: -100px;
      z-index: 2;

      & > svg {
        width: 630px;
        height: 572px;
        transform: translateX(40px);
      }
    }
  }
`;

export default StyledWelcomeSection;
