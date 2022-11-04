import type { AppProps } from 'next/app'

import '../styles/tailwind.css'
import '../styles/antd.less'

import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#2d65ff" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
