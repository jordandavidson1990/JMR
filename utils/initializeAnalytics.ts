import { GA_TRACKING_ID } from "../constants";

export const initializeAnalytics = () => {
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
};
