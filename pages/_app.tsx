import React from "react";
import { Layout } from "../components";
import "../styles/globals.css";
import { useApp } from "../hooks";

// It's best to place this declaration at the top of the file, just after the imports.
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
