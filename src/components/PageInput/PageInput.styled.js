import styled from 'styled-components';

const StyledPageInput = styled.input`
  border-radius: 30px;
  font-size: 1.2rem;
  padding: 13px 0;
  text-align: center;
  width: 195px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.mainFair};

  &:focus {
    outline: none;
    border: none;
  }
`;

export default StyledPageInput;
