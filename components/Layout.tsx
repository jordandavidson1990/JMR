import Head from "next/head";
import React from "react";

const Layout = ({ children, title = "HELLO" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/images/guitar.png"></link>
      </Head>
      {children}
    </div>
  );
};

export default Layout;
