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

  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: ${({ theme }) => theme.colors.mainBlue};
  }

  input:focus + .slider {
    box-shadow: 0 0 1px ${({ theme }) => theme.colors.mainBlue};
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export default StyledPostWrapperOptions;
