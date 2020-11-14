import styled from 'styled-components';

const StyledPrivacyWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.mainFair};

  li {
    margin: 5px 0;
  }

  & h1,
  h2 {
    margin: 20px 0;
  }

  & ol,
  ul {
    padding: 20px;
  }

  & > ol li {
    margin-left: 20px;
  }

  p {
    margin: 20px 0;
    transform: translateX(-20px);
  }

  padding: 400px;
`;

export default StyledPrivacyWrapper;
