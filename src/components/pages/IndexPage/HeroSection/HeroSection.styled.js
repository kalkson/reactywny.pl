import styled from 'styled-components';

const StyledHeroSection = styled.section`
  position: relative;
  display: flex;
  /* flex-flow: row nowrap; */
  height: auto;
  align-items: flex-start;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 40px;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
    align-items: center;
    height: 600px;
    padding: 0;
    justify-content: space-between;
  }

  &:before,
  &:after {
    display: none;
  }

  .hero {
    &__text-container {
      @media ${({ theme }) => theme.media.tablet} {
      }
    }

    &__illustration-container {
      position: relative;
    }

    &__illustration {
      position: relative;
      right: 0;
      width: 100%;
      height: 250px;
      align-self: center;

      @media ${({ theme }) => theme.media.mobileXL} {
        align-self: center;
        width: 400px;
      }

      @media ${({ theme }) => theme.media.tablet} {
        /* margin-top: 100px; */
        width: auto;
        height: auto;
      }
      /* top: 78px; */
    }
  }
`;

export default StyledHeroSection;
