import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {AppProvider} from 'context'
import { theme } from 'theme';
import {
  Alert,
  Header,
  Layout
} from 'components'

export default function NextJs({ Component, pageProps }) {

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Next.js Starter App</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <AppProvider>
            <CssBaseline />
            <Layout>
              <Header />
              <Alert />
              <Component {...pageProps} />
            </Layout>
          </AppProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </React.Fragment>
  );
}

NextJs.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
