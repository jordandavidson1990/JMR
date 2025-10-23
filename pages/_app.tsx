import Head from "next/head";
import "../styles/globals.css";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout title="James Michael Rodgers">
      <Component {...pageProps} />
    </Layout>
  );
}
