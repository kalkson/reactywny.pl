import styled from 'styled-components';

const StyledMissionSection = styled.section`
  height: 600px;

  .mission {
    &__illustration {
      position: absolute;
      left: 0;
      top: 0;

      @media ${({ theme }) => theme.media.tablet} {
        left: -100px;
      }
    }
  }
`;

export default StyledMissionSection;
