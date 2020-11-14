import styled from 'styled-components';

const StyledPrivacyWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.mainFair};
  width: 100%;
  margin: 0 auto;
  font-size: 1.2rem;

  & > svg {
    width: 90%;
  }

  ul,
  ol {
    padding: 0;
  }

  & > ol {
    & > li {
      & > ul,
      ol {
        padding: 0 0 0 10px;

        & > li {
          margin: 10px 0;

          & li {
            margin: 2px 0 2px 20px;
          }
        }
      }
    }
  }

  & h2,
  h3 {
    margin: 10px 0;
  }

  padding: 200px 30px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 1000px;
    padding: 400px 0;

    font-size: 1.5rem;

    li {
      margin: 5px 0 5px;
    }

    & ol,
    ul {
      padding: 20px 0 20px 0;
    }

    & > ol li {
      margin-left: 20px;
    }

    p {
      margin: 20px 0;
      transform: translateX(-20px);
    }
  }
`;

export default StyledPrivacyWrapper;
