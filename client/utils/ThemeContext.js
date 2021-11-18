import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({ spacing: 8 });

export default function Container({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}