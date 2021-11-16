import PropTypes from 'prop-types';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../utils/createEmotionCache';

import NavBar from '../components/navbar';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return <CacheProvider value={emotionCache}> 
    <Head>
      <title>My page</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <>
      <CssBaseline />
      <NavBar />
      <Component {...pageProps} />
    </>
  </CacheProvider>
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};