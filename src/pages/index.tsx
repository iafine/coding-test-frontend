import type { NextPage } from 'next'
import { SEO } from 'components/SEO'
import { Banner } from 'components/Banner'
import { Footer } from 'components/Footer'

const Intro: NextPage = ({ response = {} }: any) => {
  console.log(response)
  return (
    <>
      <SEO title="Coding Test" />
      <Banner />
      <Footer />
    </>
  )
}

export default Intro
