import styled from 'styled-components';

const StyledNewsletterBenefit = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;

  & > *:not(:first-child) {
    margin-top: 15px;
  }

  .benefit {
    &__illustration {
      height: 52px;
      width: 52px;
    }

    &__headline {
      max-width: 70%;
      font-weight: 500;
    }
  }
`;

export default StyledNewsletterBenefit;
