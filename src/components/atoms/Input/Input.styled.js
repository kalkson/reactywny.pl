import styled from 'styled-components';

const StyledInput = styled.div`
  position: relative;

  .input {
    &__element {
      height: 40px;
      width: 300px;
      color: ${({ theme }) => theme.colors.text};

      padding-left: 50px;
      padding-right: 10px;
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);

      outline: none;
      border: none;

      background-color: rgb(26, 35, 47);

      &::placeholder {
        color: ${({ theme }) => theme.colors.text};
        opacity: 0.5;
      }
    }

    &__box {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 40px;
      background-color: ${({ theme }) => theme.colors.primary};
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__icon {
      width: 18px;
      height: 18px;

      fill: ${({ theme }) => theme.colors.text};
      opacity: 0.75;
    }
  }
`;

export default StyledInput;
