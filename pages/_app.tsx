import React from "react";
import { Layout } from "../components";
import "../styles/globals.css";
import { useApp } from "../hooks";
import Head from "next/head";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    adsbygoogle: any[];
  }
}

export default function App({ Component, pageProps }) {
  const { title } = useApp();

  return (
    <Layout title={`James Michael Rodgers | ${title}`}>
      <Head>
        <meta name="google-adsense-account" content="ca-pub-6604930058363222" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
