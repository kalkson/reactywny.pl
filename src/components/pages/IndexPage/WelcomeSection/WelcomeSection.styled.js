import styled from 'styled-components';

const StyledWelcomeSection = styled.section`
  position: relative;
  padding: 60px ${({ theme }) => theme.paddings.mobile};
  background-color: ${({ theme }) => theme.colors.mainDark};
  color: ${({ theme }) => theme.colors.mainFair};

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
`;

export default StyledWelcomeSection;
