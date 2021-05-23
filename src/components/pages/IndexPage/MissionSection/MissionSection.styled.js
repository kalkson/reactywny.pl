import styled from 'styled-components';

const StyledMissionSection = styled.section`
  min-height: 600px;
  position: relative;

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
      line-height: 4rem;
      font-size: 2.4rem;
      margin-top: 150px;
      font-weight: 300;
    }
  }
`;

export default StyledMissionSection;
