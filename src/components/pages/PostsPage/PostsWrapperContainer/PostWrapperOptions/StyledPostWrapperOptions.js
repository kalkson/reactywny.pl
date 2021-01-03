import styled from 'styled-components';

const StyledPostWrapperOptions = styled.div`
  width: 100%;
  position: relative;
  padding-left: 45px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.mainFair};
  /* width: 455px; */

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
