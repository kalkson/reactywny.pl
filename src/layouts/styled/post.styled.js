import styled from 'styled-components';

const StyledPostLayout = styled.article`
  $bottom: 45px;

  position: relative;

  /* & aside {
    display: none;

    @media ${({ theme }) => theme.media.laptop} {
      display: block;
    }
  } */

  .post {
    &__grid {
      display: block;

      @media ${({ theme }) => theme.media.laptop} {
        display: grid;
        grid-template-columns: minmax(0, 700px) 1fr;
      }

      &:before,
      &:after {
        display: none;
      }
    }

    &__main-info-group {
      position: relative;
      width: 100%;
    }

    &__category {
      padding: 2px 12px;
      border-radius: 3px;
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 700;
      background-color: ${({ theme }) => theme.colors.mainBlue};
    }

    &__meta-info-group {
      display: flex;
      margin-bottom: 14px;
      align-items: center;

      & > * {
        font-size: 1.4rem;

        &:not(:first-child) {
          margin-left: 20px;
        }
      }

      @media ${({ theme }) => theme.media.mobileXL} {
        justify-content: flex-start;
        margin-bottom: 20px;

        & > * {
          font-size: 1.6rem;

          &:not(:first-child) {
            margin-left: 30px;
          }
        }
      }
    }

    /* @media ${({ theme }) => theme.media.tablet} {
    } */

    &__headline-wrapper {
      position: absolute;
      bottom: 45px;
      z-index: 20;
      margin: 0 auto;

      @media ${({ theme }) => theme.media.tablet} {
        left: 50%;
        transform: translateX(-50%);
      }
    }

    &__headline-container {
      max-width: 700px;
    }

    &__headline {
      font-size: 2.4rem;
      /* text-align: center;
      margin-bottom: 40px; */

      @media ${({ theme }) => theme.media.mobileXL} {
        font-size: 3.2rem;
        text-align: left;
      }

      @media ${({ theme }) => theme.media.laptop} {
        font-size: 4.8rem;
      }
    }

    &__featuredImage {
      width: 100%;
      max-height: 500px;
      position: relative;
      height: 100%;
      bottom: 45px;

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        bottom: 0;
        display: block;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, #000 120%);
        z-index: 2;
      }
    }

    &__nav {
      position: relative;
      margin-bottom: 20px;
      bottom: 20px;
      font-size: 1.4rem;
    }

    &__nav-link {
      text-decoration: underline;

      & > svg {
        margin-right: 6px;
        width: 20px;
        height: 20px;
        position: relative;
        top: 5px;
        fill: ${({ theme }) => theme.colors.text};
      }
    }

    &__random-post {
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
      margin-top: 20px !important;
    }

    &__content {
      max-width: 700px;

      @media ${({ theme }) => theme.media.laptop} {
        padding-right: 40px;
      }
    }

    &__description {
      font-size: 1.8rem;
      font-weight: 500;

      @media ${({ theme }) => theme.media.tablet} {
        font-size: 2.4rem;
      }
    }

    &__headings-navigation {
      position: relative;
      padding-left: 30px;
      border-left: solid 3px ${({ theme }) => theme.colors.text};
      margin: 50px 0;

      & > h2 {
        /* margin-top: 30px; */
        margin-bottom: 30px;
      }
    }

    &__headings-item,
    &__sources-item {
      text-decoration: underline;
      font-style: italic;
      font-size: 2rem;

      & > a {
        color: ${({ theme }) => theme.colors.mainBlue};
      }

      & > a:hover {
        color: ${({ theme }) => theme.colors.text};
      }
    }

    &__sources-item {
      font-size: 1.6rem;

      & > a {
        line-break: strict;
      }
    }

    &__paragraph {
      margin: 40px 0 20px;
      font-size: 1.6rem;
      line-height: 1.5;
      letter-spacing: 0.3px;

      @media ${({ theme }) => theme.media.tablet} {
        font-size: 1.8rem;
      }

      & .tag {
        padding: 0 4px 3px;
        border-radius: 3px;
        background-color: ${({ theme }) => theme.colors.mainBlue}40;
      }
    }

    &__heading {
      margin: 80px 0 -15px;
    }

    &__photo {
      cursor: pointer;
      max-height: 400px;
      max-width: 600px;
    }

    &__photo-wrapper {
      margin: 80px 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
    }

    &__photo-caption {
      color: rgb(190, 190, 190);
      margin-top: 20px;
      text-align: center;
      font-weight: 300;
      font-style: italic;
    }

    &__code-container,
    &__cli-container {
      position: relative;
    }

    &__language-note,
    &__cli-note {
      position: absolute;
      top: -10px;
      text-transform: uppercase;
      right: -10px;
      font-weight: 900;
      color: ${({ theme }) => theme.colors.mainBlue};
      transform: rotate(7deg);
      opacity: 0.7;

      font-size: 1.8rem;

      @media ${({ theme }) => theme.media.tablet} {
        font-size: 2.4rem;
      }
    }

    &__code {
      outline: none;
      border: none !important;
      background: #1b2129 !important;
      color: unset;
      max-width: 100%;

      & span {
        font-family: Fira Code, monospace;
        color: inherit;
        font-weight: 500;

        font-size: 1.4rem;

        @media ${({ theme }) => theme.media.tablet} {
          font-size: unset;
        }
      }
    }

    &__quote {
      border-left: solid 5px ${({ theme }) => theme.colors.mainBlue};
      padding: 15px 0 15px 20px;
      font-style: italic;
      font-size: 1.8rem;
      font-weight: 300;
      margin: 30px 0 50px;
      display: block;
      background-color: #1b2129;

      @media ${({ theme }) => theme.media.tablet} {
        font-size: 2.4rem;
      }
    }

    &__cli-note {
      color: #48b;
      opacity: 1;
    }

    &__code,
    &__cli {
      &::-webkit-scrollbar {
        height: 12px;
      }

      &::-webkit-scrollbar-track {
        background-color: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.text};
        border-bottom: 8px transparent solid;
        border-right: 8px transparent solid;
        border-left: 8px transparent solid;
        background-clip: padding-box;
      }
    }

    &__cli {
      & > code,
      & span {
        font-family: Fira Code, monospace;
        color: black !important;

        font-size: 1.6rem !important;
      }

      &::-webkit-scrollbar {
        height: 10px;
      }

      &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.primary};
        border-bottom: 6px transparent solid;
        border-right: 8px transparent solid;
        border-left: 8px transparent solid;
        background-clip: padding-box;
      }
    }

    &__sources {
      margin-bottom: 80px;
    }

    &__sources-heading {
      margin-bottom: 20px;
    }
  }

  .newsletter {
    margin: 40px 0 80px;
  }
`;

export default StyledPostLayout;
