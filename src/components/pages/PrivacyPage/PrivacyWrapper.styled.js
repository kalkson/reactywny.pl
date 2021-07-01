import styled from 'styled-components';

const StyledPrivacyWrapper = styled.article`
  & > .headline {
    margin-bottom: 60px;
  }

  & > svg {
    width: 90%;
  }

  ol ol {
    list-style-type: lower-alpha;
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

  & a {
    text-decoration: underline;
  }

  & h2 {
    margin: 10px 0;
  }

  & h3 {
    margin-top: 40px;
  }

  @media ${({ theme }) => theme.media.tablet} {
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
