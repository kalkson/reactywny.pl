const { default: styled } = require('styled-components');

const StyledSocialLinks = styled.div`
  position: relative;
  height: fit-content;

  & .header__social__link {
    width: 14px;
    height: 14px;
    margin-left: 5px;
  }
`;

export default StyledSocialLinks;
