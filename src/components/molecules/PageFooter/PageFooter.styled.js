import styled from 'styled-components';

const StyledPageFooter = styled.footer`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px 0 50px;

  .footer {
    &__logo {
      width: 125px;
      height: 20px;
      margin-bottom: 5px;

      & #Path_2 {
        fill: ${({ theme }) => theme.colors.mainFair};
      }
    }

    &__socials {
      width: 90px;
      margin-top: 15px;

      @media ${({ theme }) => theme.media.mobileXL} {
        width: 100%;
      }

      & svg {
        height: 20px;
        width: 20px;

        @media ${({ theme }) => theme.media.mobileXL} {
          height: 30px;
          width: 30px;
        }
      }
    }

    &__adnotation {
      color: ${({ theme }) => theme.colors.mainFair};
      font-weight: ${({ theme }) => theme.fonts.semiBold};
      font-size: 1rem;
      text-align: center;
    }

    @media ${({ theme }) => theme.media.mobileXL} {
      padding: 120px 0 60px;

      &__logo {
        width: 225px;
        height: 32px;
      }

      &__social {
        align-self: flex-end;
        transform: translateY(72px);
        position: relative;
        z-index: 3;

        & svg {
          height: 32px;
          width: 32px;
        }

        & svg path {
          fill: ${({ theme }) => theme.colors.mainFair};
        }
      }

      &__adnotation {
        font-size: 1.5rem;
      }
    }
  }
`;

export default StyledPageFooter;
