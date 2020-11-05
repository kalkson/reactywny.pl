import styled from 'styled-components';

const StyledMissionSection = styled.section`
  background-color: ${({ theme }) => theme.colors.mainFair};

  padding: 125px ${({ theme }) => theme.paddings.mobile} 75px;

  & > header {
    width: fit-content;
    z-index: 0;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.mainFair};

    &:before,
    &:after {
      content: '';
      position: absolute;
    }

    &:before {
      background-color: ${({ theme }) => theme.colors.mainDark};
      width: 300px;
      height: 300px;
      border-radius: 150px;
      top: -170px;
      left: -100px;
      z-index: -1;
    }

    &:after {
      background-color: ${({ theme }) => theme.colors.mainBlue};
      width: 160px;
      height: 94px;
      top: 20px;
      right: -70px;
      z-index: -1;
    }
  }

  .mission-section__paragraph {
    font-size: 2rem;
    padding: 0 10px;
    margin-top: 150px;
    position: relative;
    z-index: 0;

    &__icon {
      position: absolute;
      top: -20px;
      right: 0;
      z-index: -1;
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    padding: 125px 200px;
  }

  @media ${({ theme }) => theme.media.laptop} {
    position: relative;
    padding: 0;

    &:before {
      content: '';
      width: 526px;
      height: 530px;
      background-color: ${({ theme }) => theme.colors.mainDark};
      top: 0;
      left: 0;
      position: absolute;
      display: block;
    }

    & > header {
      position: absolute;
      bottom: 150px;
      font-size: 9.3rem;
      left: 200px;

      &:before,
      &:after {
      }

      &:before {
        top: 30px;
        left: 70px;
      }

      &:after {
        top: 60px;
        left: 130px;
      }
    }

    .mission-section__paragraph {
      padding: 120px 80px 150px 610px;
      margin: 0;
      font-size: 2.9rem;
      box-sizing: border-box;

      &__icon {
        top: 120px;
        right: 80px;
      }
    }
  }
`;

export default StyledMissionSection;
