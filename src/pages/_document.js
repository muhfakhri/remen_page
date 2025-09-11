// filepath: /c:/Users/nurfa/OneDrive/Documents/A_CODING/nextjs/tefa-mp/src/pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="64x64" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Jurusan Menejemen Perkantoran SMKN 1 BANTUL" />
       
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}