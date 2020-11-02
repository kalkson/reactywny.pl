import styled from 'styled-components';

const StyledPageFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.mainDark};
  padding: 94px 0 52px 28px;
  width: 100%;

  display: flex;
  flex-direction: column;

  .footer__logo {
    width: 255px;
    height: 35px;
    margin-bottom: 5px;

    & #Path_2 {
      fill: ${({ theme }) => theme.colors.mainFair};
    }
  }

  .header__social {
    & svg {
      margin-left: 0;
      margin-right: 10px;
      width: 27px;
      height: 27px;
      margin-bottom: 5px;
    }

    & svg path {
      fill: ${({ theme }) => theme.colors.mainFair};
    }
  }

  .footer__adnotation {
    color: ${({ theme }) => theme.colors.mainFair};
    font-weight: ${({ theme }) => theme.fonts.semiBold};
  }
`;

export default StyledPageFooter;
