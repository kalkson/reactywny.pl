import styled from 'styled-components';

const StyledSelect = styled.div`
  position: relative;
  /* color: ${({ theme }) => theme.colors.text}; */
  background-color: ${({ theme }) => theme.colors.primary};
  outline: none;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
  color: rgba(0, 0, 0, 0);
  text-shadow: 0 0 0 #000;
  z-index: 20;

  width: 200px;

  .dropdown {
    &__list {
      transition: opacity 100ms ease-in-out, transform 100ms ease-in-out;
      position: absolute;
      border-radius: 0 0 5px 5px;
      left: 0;
      top: 100%;
      padding: 0;
      list-style-type: none;
      display: flex;
      flex-direction: column;
      color: black;
      max-height: 220px;
      overflow: auto;
      transform-origin: top;
      z-index: 10;

      opacity: ${({ collapsed }) => (collapsed ? 1 : 0)};
      visibility: ${({ collapsed }) => (collapsed ? 'visible' : 'hidden')};
      transform: ${({ collapsed }) =>
        collapsed ? 'scaleY(1)' : 'scaleY(0.8)'};
      border: ${({ collapsed, theme }) =>
        collapsed ? `solid 1px ${theme.colors.text}` : 'none'};

      &::-webkit-scrollbar {
        display: none;
      }
    }

    &__current {
      color: ${({ theme }) => theme.colors.text};
      opacity: 0.5;
      width: 100%;
      background-color: rgb(26, 35, 47);
      height: 40px;
      padding-left: 10px;
      display: flex;
      align-items: center;
      outline: none;
      border: none;
      position: relative;
    }

    &__icon {
      position: absolute;
      top: 50%;
      right: 10px;
      transform-origin: center;

      width: 12px;
      height: 8px;

      & path {
        stroke: ${({ theme }) => theme.colors.text} !important;
        opacity: 1;
      }

      transition: transform 150ms linear;

      transform: ${({ collapsed }) =>
        collapsed
          ? 'translateY(-40%) rotate(180deg)'
          : 'translateY(-40%) rotate(0)'};
    }

    &__option-button {
      width: 200px;
      padding: 4px 0 4px 10px;
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.text};
      text-align: unset;

      &:hover,
      &:focus {
        background-color: rgb(26, 35, 47);
      }
    }
  }

  &:focus {
    outline: none;
    border: none;
  }

  ${({ label, theme }) => `& #${label}-label {
    position: absolute;
    content: '${label}';
    margin-bottom: 10px;
    font-size: 1.6rem;
    font-weight: 400;
    top: -70%;
    color: ${theme.colors.text}; }`}
`;

export default StyledSelect;
