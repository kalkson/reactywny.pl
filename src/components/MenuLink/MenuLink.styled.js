import styled from 'styled-components';

const StyledMenuLink = styled.li`
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fonts.ExtraBold};
  font-style: italic;
  font-size: 1.4rem;
  display: inline-block;

  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export default StyledMenuLink;
