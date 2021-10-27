import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledPageLink = styled(Link)`
  font-weight: ${({ theme }) => theme.fonts.ExtraBold};
  font-style: italic;
  font-size: 1.5rem;
  position: relative;
  z-index: 40;
  color: ${({ theme }) => theme.colors.mainFair};
  text-decoration: underline;

  & .link__icon {
    transform: rotate(-90deg) scaleY(1.2);
    margin-left: 5px;

    & path {
      stroke: ${({ theme }) => theme.colors.mainFair};
    }
  }
`;

export default StyledPageLink;
