import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { store } from "@/src/app/store";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Layout>
          <Header />
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </Provider>
  );
}
