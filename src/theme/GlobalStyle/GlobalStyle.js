import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import "../_components.scss";

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
        overflow-x: hidden;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        overflow-y: hidden;
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

    .consent {
        width: 400px !important;

        @media (max-width: 425px) {
            width: 100% !important;
        bottom: 0 !important;
        left: 0 !important;
        }

        bottom: 20px !important;
        left: 20px !important;
        display: flex !important;

        a {
            text-decoration: underline;
        }

        &__buttons {
            margin-left: auto;
        }

        &__button {
            background-color: #61DAFB !important;
            padding: 10px 15px !important;
        }
    }
`;

export default GlobalStyle;
