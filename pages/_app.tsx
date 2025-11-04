import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Layout } from "../components";
import "../styles/globals.css";

// Extend the Window interface to include dataLayer
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Google Analytics Tracking ID
const GA_TRACKING_ID = "G-1L5BN3WG0B";

// --- GOOGLE ANALYTICS CORE LOGIC ---
const initializeAnalytics = () => {
  if (document.getElementById("gtag-script")) return;

  const script = document.createElement("script");
  script.id = "gtag-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  window.gtag("js", new Date());
  window.gtag("config", GA_TRACKING_ID);

  console.log(`[Analytics] Initialized with ID: ${GA_TRACKING_ID}`);
};

// --- App Component ---
export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    initializeAnalytics();

    const handleRouteChange = (url) => {
      window.gtag("config", GA_TRACKING_ID, { page_path: url });
      console.log(`[Analytics] Page View tracked for route change: ${url}`);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Layout title="James Michael Rodgers">
      <Component {...pageProps} />
    </Layout>
  );
}
