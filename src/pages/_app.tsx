import type { AppProps } from 'next/app'
import { Banner } from 'components/Banner'
import { Footer } from 'components/Footer'

import '../styles/tailwind.css'
import '../styles/antd.less'

import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#2d65ff" />
      <Banner />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
