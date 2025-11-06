import { useRouter } from "next/router";
import { useEffect } from "react";
import { initializeAdNetwork, initializeAnalytics } from "../utils";
import { GA_TRACKING_ID } from "../constants";

export const useApp = () => {
  const router = useRouter();
  const url = router.asPath;

  useEffect(() => {
    initializeAnalytics();
    // initializeAdNetwork();

    const handleRouteChange = (url) => {
      window.gtag("config", GA_TRACKING_ID, { page_path: url });
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const initialTitle = url.replace("/", "") || "Home";
  const title = initialTitle.charAt(0).toUpperCase() + initialTitle.slice(1);

  return { title };
};
