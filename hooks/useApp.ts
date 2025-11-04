import { useRouter } from "next/router";
import { useEffect } from "react";
import { initializeAnalytics } from "../utils";
import { GA_TRACKING_ID } from "../constants";

export const useApp = () => {
  const router = useRouter();

  useEffect(() => {
    initializeAnalytics();

    const handleRouteChange = (url) => {
      window.gtag("config", GA_TRACKING_ID, { page_path: url });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
};
