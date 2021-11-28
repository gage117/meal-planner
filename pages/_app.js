import { useState } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Head from 'next/head';
import theme from '../utils/theme';
import {  makeStyles } from '@mui/styles';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../utils/createEmotionCache';

import MealPlanProvider from '../utils/MealPlanContext';
import NavBar from '../components/navbar';
import {Drawer, drawerWidth} from '../components/drawer';

const clientSideEmotionCache = createEmotionCache();

const useStyles = makeStyles(() => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function MyApp(props) {
  const classes = useStyles();
  // const { isLoading } = useAuth0();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // Drawer open/close state
  const [open, setOpen] = useState(false);

  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }

  return (
    <CacheProvider value={emotionCache}> 
    <UserProvider>
    <MealPlanProvider>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar setOpen={setOpen} open={open} />
        <Box className={classes.root}>
          <Drawer open={open} setOpen={setOpen} drawerWidth={drawerWidth} />
          <Component
            {...pageProps}
            open={open}
            classes={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          />
        </Box>
      </ThemeProvider>
    </MealPlanProvider>
    </UserProvider>
    </CacheProvider>
  )}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};