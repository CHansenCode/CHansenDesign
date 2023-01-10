import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { Provider } from "react-redux";
import { store } from "../redux/store";

import Layout from "../Layout/Layout";

import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}
