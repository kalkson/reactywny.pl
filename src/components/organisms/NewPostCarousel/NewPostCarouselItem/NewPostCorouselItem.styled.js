import styled from 'styled-components';

const StyledNewPost = styled.div`
  width: 100%;
  /* border: solid 1px black; */
  height: 100%;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.mainFair};
  padding: 10px;
  display: flex;
  flex-direction: column;

  & > * {
    position: relative;
  }

  & > *:not(:last-child):not(:first-child) {
    margin-bottom: 15px;
  }

  & > .top {
    & > .category {
      color: ${({ theme }) => theme.colors.mainBlue};
      font-weight: 800;
    }
  }

  & > .heading {
    font-size: 2.2rem;
  }

  & > .image {
    width: calc(100% + 20px);
    transform: translateX(-10px);
    height: 150px;
  }

  & > .description {
    font-size: 1.4rem;
  }

  & > .linkk {
    margin-top: auto;
    width: fit-content;
    display: block;
    position: ralative;
    color: ${({ theme }) => theme.colors.mainFair};
    font-style: italic;
    font-weight: 900;
    font-size: 2rem;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 5px 15px 5px 0;

    &:before {
      content: '';
      background-color: ${({ theme }) => theme.colors.primary};
      width: 40px;
      position: absolute;
      display: block;
      top: 0;
      height: 100%;
      right: 100%;
      z-index: 1;
    }
    /* bottom: 0; */
  }

  @media ${({ theme }) => theme.media.tablet} {
    & > .description {
      font-size: 1.6rem;
    }
  }

  @media ${({ theme }) => theme.media.desktop} {
    & > .description {
      font-size: 2rem;
    }

    & > .image {
      height: 200px;
    }
  }
`;

export default StyledNewPost;
