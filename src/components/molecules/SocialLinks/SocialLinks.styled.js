const { default: styled } = require('styled-components');

const StyledSocialLinks = styled.div`
  position: relative;
  height: fit-content;
  margin-top: 50px;
  margin-bottom: 10px;
  max-width: 120px;
  display: flex;
  justify-content: space-between;

  .social-group {
    &__icon {
      width: 30px;
      height: 30px;

      & path {
        fill: ${({ theme }) => theme.colors.text};
        stroke: ${({ theme }) => theme.colors.text};
        opacity: 0.8;
      }
    }
  }
`;

export default StyledSocialLinks;
