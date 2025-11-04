import React from "react";
import { Layout } from "../components";
import "../styles/globals.css";
import { useApp } from "../hooks";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function App({ Component, pageProps }) {
  useApp();

  return (
    <Layout title="James Michael Rodgers">
      <Component {...pageProps} />
    </Layout>
  );
}
