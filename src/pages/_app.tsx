import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/Layout/Layout";
import { Provider } from "react-redux";
import { store } from "../store";
import { CookiesProvider } from "react-cookie";
import { GetStaticProps } from "next";
import { ClientOnly } from "../components";
import client from "../../contentful";
import { IHomeFields, IServicesFields } from "../types/contentful";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CookiesProvider>
        <Provider store={store}>
          <ClientOnly>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ClientOnly>
        </Provider>
      </CookiesProvider>
    </>
  );
}

export default MyApp;
