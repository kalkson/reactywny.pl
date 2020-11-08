import styled from 'styled-components';

const StyledNewsletterBar = styled.div`
  background-color: black;
  padding: 40px;
  color: ${({ theme }) => theme.colors.mainFair};
  flex-direction: column;
  align-items: center;
  text-align: center;
  display: flex;
  box-shadow: 0px 0px 43px 1px rgba(0, 0, 0, 0.75);

  transition: transform 300ms ease-in-out 200ms;

  ${({ isNewsletterVisible }) =>
    isNewsletterVisible
      ? isNewsletterVisible &&
        `
    position: fixed !important;
    top: auto !important;
    bottom: 100px;
    right: 0;
    transform: translateX(0);
    `
      : !isNewsletterVisible &&
        `
        position: fixed !important;
        top: auto !important;
      bottom: 100px;
      right: 0;
    transform: translateX(100%);
    `}

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
