import styled from 'styled-components';

const StyledPostWrapperOptions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;

  @media ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
  }

  .options {
    &__input {
      margin-bottom: 50px;
      @media ${({ theme }) => theme.media.tablet} {
        margin-right: 40px;
        margin-bottom: unset;
      }
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
  }
`;

export default StyledPostWrapperOptions;
