import styled from 'styled-components';

const StyledNewsletterBar = styled.div`
  background-color: black;

  padding: 40px;
  color: ${({ theme }) => theme.colors.mainFair};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

  .newsletter {
    &__head {
      font-style: italic;
      font-size: 2.4rem;
      font-weight: 600;
    }

    &__paragraph {
      margin: 5px 0 60px;
    }

    &__input {
      border-radius: 30px;
      font-size: 1.2rem;
      padding: 13px 0;
      text-align: center;
      width: 195px;
    }
  }
`;

export default StyledNewsletterBar;
