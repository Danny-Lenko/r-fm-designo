import * as React from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ToggleColorMode } from '../styles/theme/ToggleColorMode';
import createEmotionCache from '../utility/createEmotionCache';
import '../styles/globals.css';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const myColorMode = ToggleColorMode()

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={myColorMode.theme}>
        <CssBaseline />
        <PrimaryLayout>
          <Component {...pageProps} />
        </PrimaryLayout>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
