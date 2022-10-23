import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className='bg-black/95'>
        <Main />
        <NextScript />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-078BG1G09L"></Script>
        <Script id='gtag-init'
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-078BG1G09L', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </body>
    </Html>
  )
}
