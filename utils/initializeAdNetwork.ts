import { AD_PUBLISHER_ID } from "../constants";

export const initializeAdNetwork = () => {
  if (document.getElementById("ad-script")) return;

  window.adsbygoogle = window.adsbygoogle || [];

  const script = document.createElement("script");
  script.id = "ad-script";
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_PUBLISHER_ID}`;
  script.setAttribute("crossorigin", "anonymous");
  document.head.appendChild(script);
};
