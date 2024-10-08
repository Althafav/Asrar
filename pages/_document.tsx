// _document.tsx
import HeaderComponent from "@/components/HeaderComponent";

import Globals from "@/modules/Globals";

import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { Analytics } from '@vercel/analytics/react';
export default function Document() {
  return (
    <Html lang="en" translate="no">
      <Head>

        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

        <HeaderComponent />
        <link rel="preconnect" href="https://deliver.kontent.ai" crossOrigin="anonymous" />
        <Script
          src={`${Globals.BASE_URL}assets/js/bootstrap.bundle.min.js`}
          strategy="afterInteractive"
        />

      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          src={`${Globals.BASE_URL}assets/js/jquery-3.5.1.min.js`}
          strategy="beforeInteractive"
        />
        <Script src={`${Globals.BASE_URL}assets/js/gtag.js`} strategy="beforeInteractive" />

        <Script src={`${Globals.BASE_URL}assets/js/gtagManager.js`} strategy="beforeInteractive" />

        <Script
          type="text/javascript"
          src={`/assets/js/main.js`}
          strategy="beforeInteractive"
        ></Script>

        <Script
          type="text/javascript"
          strategy="beforeInteractive"
          src={`${Globals.BASE_URL}assets/js/pixel.js`}
        ></Script>

        <noscript><img height="1" width="1" style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=510789561580817&ev=PageView&noscript=1" /></noscript>

        <Analytics />
      </body>
    </Html>
  );
}
