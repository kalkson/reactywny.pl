import styled from 'styled-components';

const StyledFaqItem = styled.div`
  padding: 20px 0;

  & > span {
    font-size: 2.8rem;
    font-weight: 600;
  }

  & > p {
    font-size: 1.2rem;
  }

  @media (min-width: 768px) {
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.primary};

    & > span {
      font-size: 4rem;
    }

    & > p {
      font-size: 1.5rem;
    }
  }
`;

export default StyledFaqItem;
