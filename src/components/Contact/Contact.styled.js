import styled from 'styled-components';

const StyledContact = styled.div`
  background-color: ${({ theme }) => theme.colors.mainDark};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 40px;

  color: ${({ theme }) => theme.colors.mainFair};

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

  & > header {
    color: ${({ theme }) => theme.colors.mainFair};
    position: relative;
    z-index: 0;

    &:after {
      content: '';
      display: block;
      width: 110px;
      height: 65px;
      left: 64px;
      top: 45px;
      z-index: -1;
      background-color: ${({ theme }) => theme.colors.mainBlue};
      position: absolute;
    }
  }

  .contact {
    &__paragraph {
      margin-top: 50px;
      text-align: center;
    }

    &__form {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;

      &__input {
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
      }

      &__textarea {
        border-radius: 20px;
        width: 80vw;
        height: 200px;
        padding: 15px;
        font-size: 1.5rem;
        background-color: ${({ theme }) => theme.colors.mainFair};

        &:focus {
          border: none;
          outline: none;
        }
      }

      &__button {
        background-color: transparent;
        border: none;
        margin-top: 20px;
      }
    }
  }
`;

export default StyledContact;
