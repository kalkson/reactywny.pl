import styled from 'styled-components';

const StyledPageFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.mainDark};
  padding: 94px 0 52px 28px;
  width: 100%;

  display: flex;
  flex-direction: column;

  .footer__logo {
    width: 125px;
    height: 20px;
    margin-bottom: 5px;

    & #Path_2 {
      fill: ${({ theme }) => theme.colors.mainFair};
    }
  }

  .header__social {
    & svg {
      margin-left: 0;
      margin-right: 10px;
      width: 22px;
      height: 22px;
      margin-bottom: 5px;
    }

    & svg path {
      fill: ${({ theme }) => theme.colors.mainFair};
    }
  }

  .footer__adnotation {
    color: ${({ theme }) => theme.colors.mainFair};
    font-weight: ${({ theme }) => theme.fonts.semiBold};
    font-size: 1rem;
  }
`;

export default StyledPageFooter;
