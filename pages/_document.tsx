import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="follow, index" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6852634338900661"
     crossorigin="anonymous"></script>
      </Head>
      <body className="bg-white text-gray-700 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
