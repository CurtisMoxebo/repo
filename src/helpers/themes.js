import { createTheme } from "@mui/material"

export const DEFAULT_THEME = 'default-theme';
export const DARK_THEME = 'dark-theme';

export const defaultTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#06a3b8',
      light: '#64EDFF',
      dark: '#048394'
    },
    action: {
      hover: 'rgba(100, 237, 255, 0.3)'
    }
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#000000',
      light: '#64EDFF',
      dark: '#048394'
    },
    action: {
      hover: 'rgba(100, 237, 255, 0.3)'
    }
  },

  typography: {
    htmlFontSize: 16,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
  }
});

export const getTheme = () => {
  const theme = localStorage.getItem('theme') || DEFAULT_THEME;

  switch (theme) {
    case DARK_THEME :
      return darkTheme;
    default :
      return defaultTheme;
  }
}

export const setTheme = (theme) => {
  localStorage.setItem('theme', theme);
}
