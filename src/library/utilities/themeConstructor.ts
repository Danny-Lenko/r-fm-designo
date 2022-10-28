const assembleThemeObj = (mode: any) => ({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Nunito Sans"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
    ].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 600,
    fontWeightMedium: 700,
    fontWeightBold: 800
  },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          text: {
            primary: 'hsl(200, 15%, 8%)',
            secondary: 'hsl(0, 0%, 52%)',
          },
          background: {
            default: 'hsl(0, 0%, 98%)',
            paper: 'hsl(0, 0%, 100%)'
          }
        }
      : {
          text: {
            primary: 'hsl(0, 0%, 100%)'
          },
          background: {
            default: 'hsl(207, 26%, 17%)',
            paper: 'hsl(209, 23%, 22%)',
          }
        }),
    blueCustom: {
      main: 'hsl(238, 40%, 52%)',
      light: 'hsl(239, 57%, 85%)',
      dark: 'hsl(212, 24%, 26%)',
      contrastText: '#fff',
    },
    redCustom: {
      main: 'hsl(358, 79%, 66%)',
      light: 'hsl(357, 100%, 86%)',
      contrastText: '#fff'
    },
    greyCustom: {
      main: 'hsl(223, 19%, 93%)',
      light: 'hsl(228, 33%, 97%)',
      dark: 'hsl(211, 10%, 45%)',
      contrastText: '#000'
    },
  },
})

export { assembleThemeObj }

