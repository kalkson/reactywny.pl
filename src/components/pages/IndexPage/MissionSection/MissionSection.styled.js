import styled from 'styled-components';

const StyledMissionSection = styled.section`
  min-height: 500px;
  position: relative;

  @media ${({ theme }) => theme.media.tablet} {
    min-height: 600px;
  }

  .mission {
    &__illustration {
      position: absolute;
      left: 0;
      top: 0;

      @media ${({ theme }) => theme.media.tablet} {
        left: -100px;
      }
    }

    &__paragraph {
      color: ${({ theme }) => theme.colors.text};
      line-height: 2;
      font-size: 1.6rem;
      margin-top: 150px;
      font-weight: 300;
      text-align: justify;

      @media ${({ theme }) => theme.media.tablet} {
        margin-top: 250px;
        font-size: 1.8rem;
      }
    }
  }
`;

export default StyledMissionSection;
