import styled from 'styled-components';

const Styled404Layout = styled.main`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary}
    url('https://images.unsplash.com/gifs/weird/weird-9.gif') no-repeat center
    border-box;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 100000;

  .logo {
    width: 300px;
    height: 60px;
    #Path_1,
    #Path_3 {
      fill: ${({ theme }) => theme.colors.mainFair};
    }

    #Path_2 {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  .link {
    font-weight: 700;
  }

  .heading {
    font-size: 10rem;
    color: ${({ theme }) => theme.colors.mainFair};
  }

  @media ${({ theme }) => theme.media.tablet} {
    padding: 100px;

    .logo {
      width: 600px;
      height: 60px;
    }

    .heading {
      align-self: center;
      font-size: 18rem;
    }
  }
`;

export default Styled404Layout;
