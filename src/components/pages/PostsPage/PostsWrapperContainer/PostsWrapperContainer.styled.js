import styled from 'styled-components';

const StyledPostsWrapperContainer = styled.section`
  .posts {
    &__item {
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);

      & a,
      & a > div {
        width: 100% !important;
        max-width: unset !important;
      }
    }

    &__options {
      margin: 0;

      & input {
        margin-right: 20px;
      }

      & .icon-input {
        &:before {
          content: '';
        }
      }
    }
  }
`;

export default StyledPostsWrapperContainer;
