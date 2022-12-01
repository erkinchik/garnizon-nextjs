import "../src/assets/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "components/layout/Layout";
import { Provider } from "react-redux";
import { store } from "store/index";
import { CookiesProvider } from "react-cookie";
import { ClientOnly } from "components/layout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Гаринзон</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <CookiesProvider>
        <Provider store={store}>
          <ClientOnly>
            <Component {...pageProps} />
          </ClientOnly>
        </Provider>
      </CookiesProvider>
    </>
  );
}

export default MyApp;
