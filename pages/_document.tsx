import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="follow, index" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="google-adsense-account" content="ca-pub-6852634338900661">
      </Head>
      <body className="bg-white text-gray-700 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
