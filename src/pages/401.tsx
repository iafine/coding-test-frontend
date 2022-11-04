import type { NextPage } from 'next'
import { SEO } from 'components/SEO'

export const getStaticProps = () => {
  return {
    props: {
      protected: true,
    },
  }
}

const Custom401: NextPage = () => {
  return (
    <>
      <SEO title="401" />
      <h1>404 - Page Not Found</h1>
    </>
  )
}

export default Custom401
