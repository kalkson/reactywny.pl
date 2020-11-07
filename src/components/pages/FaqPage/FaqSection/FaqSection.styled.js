import styled from 'styled-components';

const StyledFaqSection = styled.section`
  padding: 220px 22px 50px;
  background-color: ${({ theme }) => theme.colors.mainFair};

  & > header {
    color: darkgray;
    margin: 0 auto;
    position: relative;
    width: fit-content;
    z-index: 0;

    &:after {
      content: '';
      display: block;
      width: 110px;
      height: 65px;
      left: 64px;
      top: 45px;
      z-index: -1;
      background-color: ${({ theme }) => theme.colors.mainBlue};
      position: absolute;
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    padding-top: 400px;
  }
`;

export default StyledFaqSection;
