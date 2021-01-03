import styled from 'styled-components';

const StyledPostWrapperOptions = styled.div`
  position: relative;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.mainFair};
  margin: 0 auto;
  width: 300px;
  margin-bottom: 30px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 100%;
    padding-left: 45px;
  }

  .inputsContainer {
    display: flex;
    flex-direction: column;

    @media ${({ theme }) => theme.media.laptop} {
      justify-content: initial;
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .searchInput {
    font-size: 2rem;
    padding: 6px;
    border: solid 2px ${({ theme }) => theme.colors.mainBlue};
    outline: none;
    border-radius: 10px;
  }

  .category {
    font-size: 2rem;
    padding: 6px;
    border: solid 2px ${({ theme }) => theme.colors.mainBlue};
    outline: none;
    border-radius: 10px;
    width: 100px;
    margin-left: auto;
    position: relative;
    width: 150px;
  }

  .categoryLabel {
    position: relative;
    margin-top: 40px;

    @media ${({ theme }) => theme.media.laptop} {
      margin-top: 0;
    }
  }

  .categoryLabel:before {
    content: 'Kategoria';
    left: 0;
    bottom: calc(100% + 5px);
    position: absolute;
    display: inline;
  }

  .category:hover {
    background-color: none;
    outline: none;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch:after {
    content: 'Ukryj obrazy';
    display: inline;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.mainFair};
    text-align: right;
    position: absolute;
    top: calc(50% - 1rem);
    left: calc(100% + 10px);
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
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
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: ${({ theme }) => theme.colors.mainBlue};
  }

  input:focus + .slider {
    box-shadow: 0 0 1px ${({ theme }) => theme.colors.mainBlue};
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
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
