import type { NextPage } from 'next'
import { SEO } from 'components/SEO'
import { BlogList } from 'components/BlogList'
import { getBlogList } from 'service/blog'

export const getStaticProps = async ({ params }: any) => {
  const { page = 1 } = params
  const res = await getBlogList(page)

  return {
    props: {
      blogInfo: res,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await getBlogList(1)
  const { meta = {} } = res
  const { totalPages = -1 } = meta

  const paths = []
  for (let i = 1; i <= totalPages; i++) {
    paths.push({
      params: { page: i.toString() },
    })
  }

  return {
    fallback: false,
    paths,
  }
}

const BlogListPage: NextPage = ({ blogInfo }: any) => {
  return (
    <>
      <SEO title="Blog List" />
      <BlogList blogInfo={blogInfo} />
    </>
  )
}

export default BlogListPage
