import 'animate.css/animate.min.css';

import { CacheProvider, EmotionCache } from '@emotion/react';
import { useStore } from '@store/storeConfig';
import createEmotionCache from '@theme/createEmotionCache';
import ThemeConfig from '@theme/ThemeConfig';
import Head from 'next/head';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';

import type { AppProps } from "next/app";
require("@styles/index.css");

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const store = useStore(props.pageProps.initialReduxState);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Carty - Loja Virtual, Catálogo de Produtos, Vendas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeConfig>
        <SnackbarProvider maxSnack={3}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </SnackbarProvider>
      </ThemeConfig>
    </CacheProvider>
  );
}
