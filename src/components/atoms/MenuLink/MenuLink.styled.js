import styled from 'styled-components';

const StyledMenuLink = styled.li`
  font-weight: 500;
  font-size: 1.8rem;
  display: inline-block;

  color: ${({ theme }) => theme.colors.text};

  &:not(:first-child) {
    margin-left: 7.2rem;
  }
`;

export default StyledMenuLink;
