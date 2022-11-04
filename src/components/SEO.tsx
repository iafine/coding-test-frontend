import Head from 'next/head'

export const SEO = ({
  description = 'Coding Test',
  keywords = 'Coding Test',
  title = 'Coding',
}) => {
  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <title>{title}</title>
    </Head>
  )
}
