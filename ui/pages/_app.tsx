import * as React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { ToggleColorMode } from "../styles/theme/ToggleColorMode";
import createEmotionCache from "../lib/utils/createEmotionCache";
import PrimaryLayout from "../components/layouts/primaryLayout";
import { Provider } from "jotai";
import "../styles/globals.css";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const myColorMode = ToggleColorMode();

  return (
    <>
      <Head>
        <title>Designo</title>
        <meta
          name="description"
          content="The Designo web studio. We have an amazing portfolio and hunderds of happy clients. Looking forward to meeting you."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={myColorMode.theme}>
          <CssBaseline />
          <PrimaryLayout>
            <Provider>
              <Component {...pageProps} />
            </Provider>
          </PrimaryLayout>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default MyApp;
