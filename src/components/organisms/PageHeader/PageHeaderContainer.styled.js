import styled from 'styled-components';

const StyledPageHeaderContainer = styled.div`
  filter: drop-shadow(0 3px 8px rgba(0, 0, 0, 0.31));
  position: relative;
  z-index: 10;

  .header {
    &__wrapper {
      position: relative;
      z-index: 5;
      background-color: ${({ theme }) => theme.colors.primary};
      width: 100%;
      height: 85px;

      will-change: transform;

      clip-path: url(#my-clip-path-mobile);

      @media ${({ theme }) => theme.media.mobileXL} {
        clip-path: url(#my-clip-path);
        height: 115px;
      }

      transition: height 200ms linear;

      &.active {
        height: 130px;
        clip-path: none;
      }
    }
  }

  .clip-image {
    position: absolute;
    width: 0;
    height: 0;
  }
`;

export default StyledPageHeaderContainer;
