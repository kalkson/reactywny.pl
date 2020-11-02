const theme = {
  breakpoints: {
    desktop: '1920px',
    laptop: '1366px',
    tablet: '1024px',
    mobile: '375px',
  },

  paddings: {
    desktop: '60px',
    laptop: '60px',
    tablet: '60px',
    mobile: '10px',
  },

  fonts: {
    regular: 400,
    semiBold: 600,
    Bold: 700,
    ExtraBold: 800,
    Black: 900,
  },

  colors: {
    mainBlue: '#61DAFB',
    mainFair: '#F1EAEA',
    mainDark: '#372f2f',
  },

  media: {
    desktop: `(min-width: 1920px)`,
    laptop: `(min-width: 1366px)`,
    tablet: `(min-width: 1024px)`,
    phone: `(min-width: 375px)`,
  },
};

export default theme;
