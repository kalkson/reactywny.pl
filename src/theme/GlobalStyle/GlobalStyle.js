import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import "../_components.scss";

    * {
        color: ${({ theme }) => theme.colors.text};
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,Arial,sans-serif;
    }

    html,
    body {
        margin: 0;
        padding: 0;
        background-color: ${({ theme }) => theme.colors.primary};
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        overflow-x: hidden;
    }

    #___gatsby {
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor: pointer;
        padding: 0;
        border: none;
        outline: none;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
    }

    p a {
        color: ${({ theme }) => theme.colors.mainBlue};

        &:hover {
            text-decoration: underline;
        color: ${({ theme }) => theme.colors.mainBlue};
        }
    }

    .consent {
        width: 400px !important;
        background-color: ${({ theme }) => theme.colors.primary} !important;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);

        & a {
            color: ${({ theme }) => theme.colors.mainBlue};

            &:hover {
                color: ${({ theme }) => theme.colors.mainBlue};
                text-decoration: underline;
            }
        }

        @media (max-width: 425px) {
            width: 100% !important;
            bottom: 0 !important;
            left: 0 !important;
        }

        bottom: 20px !important;
        left: 20px !important;
        display: flex !important;

        &__buttons {
            margin-left: auto;
        }

        &__button {
            background-color: #61DAFB !important;
            padding: 10px 15px !important;
        }
    }

    

    .absolute-photo {
        position: relative;
        max-height: 90%;
        max-width: 90%;
        height: 90%;
        width: 90%;
        z-index: 2;
        transition: transform 300ms ease-in;
        cursor: pointer;
        animation: absolute-photo-appear 300ms cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        transform-origin: center;
    }

    .absolute-photo-background {
        background-color: rgba(0,0,0,0.4);
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 1;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    @keyframes absolute-photo-appear {
        0% {
            transform: scale(0.7);
        }
        100% {
            transform: scale(1);
        }
    }
`;

export default GlobalStyle;
