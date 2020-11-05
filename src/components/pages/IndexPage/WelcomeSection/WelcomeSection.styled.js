import styled from 'styled-components';

const StyledWelcomeSection = styled.section`
  position: relative;
  padding: 180px ${({ theme }) => theme.paddings.mobile};
  background-color: ${({ theme }) => theme.colors.mainDark};
  color: ${({ theme }) => theme.colors.mainFair};

  background-image: url('background-image.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  /* background-attachment: fixed; */

  & > header {
    z-index: 10;

    &::after {
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

    & header {
      color: ${({ theme }) => theme.colors.mainBlue};
    }

    .welcome-sction__content__paragraph {
      color: ${({ theme }) => theme.colors.mainDark};
      font-size: 1.3rem;
    }
  }

  .welcome-sction__content__image-cont {
    position: absolute;
    top: -85px;
    right: -5px;

    .welcome-sction__content__image-cont__image {
      width: 115px;
      height: 133px;
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    padding: 360px ${({ theme }) => theme.paddings.tablet};

    & .welcome-section__content {
      width: 340px;
      height: 500px;
      margin-right: 213px;

      .welcome-sction__content__paragraph {
        font-size: 1.9rem;
      }
    }

    .welcome-sction__content__image-cont {
      right: -225px;
      .welcome-sction__content__image-cont__image {
        width: 236px;
        height: 272px;
      }
    }
  }

  @media ${({ theme }) => theme.media.laptop} {
    padding: ${({ theme }) => theme.paddings.laptop};
    display: flex;
    align-items: center;
    padding: 360px ${({ theme }) => theme.paddings.laptop} 30px;

    & > header {
      font-size: 93px;
      position: relative;
      height: fit-content;

      &::after {
        height: 176px;
        width: 298px;
      }
    }

    & .welcome-section__content {
      width: 370px;
      height: 500px;
      margin-right: 213px;

      .welcome-sction__content__paragraph {
        font-size: 1.9rem;
      }
    }

    .welcome-sction__content__image-cont {
      right: -225px;
      .welcome-sction__content__image-cont__image {
        width: 236px;
        height: 272px;
      }
    }
  }
`;

export default StyledWelcomeSection;
