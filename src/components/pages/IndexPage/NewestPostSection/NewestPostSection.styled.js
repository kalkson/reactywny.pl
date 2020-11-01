import styled from 'styled-components';

const StyledNewestPostSection = styled.section`
  padding: ${({ theme }) => theme.paddings.mobile};
  background-color: ${({ theme }) => theme.colors.mainDark};

  & > header {
    text-align: right;
    color: ${({ theme }) => theme.colors.mainFair};
  }
`;

export default StyledNewestPostSection;
