import styled from 'styled-components';

const StyledPageFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .footer__logo {
    width: 125px;
    height: 20px;
    margin-bottom: 5px;

    & #Path_2 {
      fill: ${({ theme }) => theme.colors.mainFair};
    }
  }

  .footer__adnotation {
    color: ${({ theme }) => theme.colors.mainFair};
    font-weight: ${({ theme }) => theme.fonts.semiBold};
    font-size: 1rem;
    text-align: center;
  }

  @media ${({ theme }) => theme.media.mobileXL} {
    padding: 50px 0;

    .footer__logo {
      width: 225px;
      height: 32px;
    }

    .header__social {
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

    .footer__adnotation {
      font-size: 1.5rem;
    }
  }
`;

export default StyledPageFooter;
