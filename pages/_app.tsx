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
