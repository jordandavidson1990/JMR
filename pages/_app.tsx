import { Layout } from "../components";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout title="James Michael Rodgers">
      <Component {...pageProps} />
    </Layout>
  );
}
