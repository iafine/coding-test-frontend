import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { SEO } from 'components/SEO'
import { Banner } from 'components/Banner'
import { Footer } from 'components/Footer'
import { Row, Col, Form, Input, Button } from 'antd'
import { updateBlog, getBlogDetail, deleteBlog } from 'service/blog'
import { useRouter } from 'next/router'

const UpdateBlogPage: NextPage = () => {
  const { useForm } = Form
  const [form] = useForm()
  const router = useRouter()

  console.log(router)
  const { id } = router.query || {}
  console.log(id)
  const [blogInfo, setBlogInfo] = useState({}) as any

  const onGetBlogDetail = async () => {
    const res = await getBlogDetail(id as string)
    setBlogInfo(res)
  }
  useEffect(() => {
    onGetBlogDetail()
  }, [id])

  useEffect(() => {
    form.resetFields()
  }, [blogInfo])

  const [submitLoading, setSubmitLoading] = useState(false)

  const { title = '', content = '' } = blogInfo || {}

  const initialValues = {
    title,
    content,
  }

  const onFormFinish = async (values: any) => {
    setSubmitLoading(true)
    await updateBlog(id as string, values)
    setSubmitLoading(false)

    router.push('/post/1')
  }

  const onDeleteBlog = async () => {
    setSubmitLoading(true)
    await deleteBlog(id as string)
    setSubmitLoading(false)
    router.push('/post/1')
  }

  return (
    <>
      <SEO title="Update Blog" />
      <Banner />
      <div className="p-5 mb-5 bg-white rounded">
        <span className="text-sm font-medium">Create Blog</span>
        <div
          className="mt-4 mb-6"
          style={{ borderTop: '2px dashed #d1d0d1' }}
        ></div>
        <Form
          form={form}
          onFinish={onFormFinish}
          layout="vertical"
          initialValues={initialValues}
          size="middle"
        >
          <Row>
            <Col span={12}>
              <Form.Item
                name="title"
                label="Title"
                rules={[{ required: true, message: 'Please Input Title' }]}
              >
                <Input placeholder="" />
              </Form.Item>
              <Form.Item
                name="content"
                label="Content"
                rules={[{ required: true, message: 'Please Input Content' }]}
              >
                <Input.TextArea rows={4} placeholder="" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={submitLoading}>
              Update
            </Button>
          </Form.Item>
        </Form>
        <Button
          type="primary"
          loading={submitLoading}
          onClick={() => {
            onDeleteBlog()
          }}
        >
          Delete
        </Button>
      </div>
      <Footer />
    </>
  )
}

export default UpdateBlogPage
