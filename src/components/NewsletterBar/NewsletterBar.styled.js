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

    &__form {
      display: flex;
      flex-direction: column;

      &__button {
        background-color: transparent;
        border: none;
      }
    }
  }

  @media ${({ theme }) => theme.media.laptop} {
    width: 55vw;
    right: 0;
    top: 70px;
    position: absolute;
  }
`;

export default StyledNewsletterBar;
