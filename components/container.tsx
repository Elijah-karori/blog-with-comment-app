import Script from 'next/script'
import Head from 'next/head'
type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className="container max-w-2xl m-auto px-4">
    <head>
    <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6852634338900661"
     />
    </head>
    {children}</div>;
}
