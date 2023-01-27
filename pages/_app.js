import Header from "@/components/Header";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Header />
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
