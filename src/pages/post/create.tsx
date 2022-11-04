import type { NextPage } from 'next'
import { useState } from 'react'
import { SEO } from 'components/SEO'
import { Banner } from 'components/Banner'
import { Footer } from 'components/Footer'
import { Row, Col, Form, Input, Button } from 'antd'
import { useRouter } from 'next/router'

import { createBlog } from 'service/blog'

const CreateBlogPage: NextPage = ({}: any) => {
  const { useForm } = Form
  const [form] = useForm()
  const router = useRouter()
  const [submitLoading, setSubmitLoading] = useState(false)

  const initialValues = {
    title: '',
    content: '',
  }

  const onFormFinish = async (values: any) => {
    setSubmitLoading(true)
    await createBlog(values)
    setSubmitLoading(false)
    router.push('/post/1')
  }

  return (
    <>
      <SEO title="Create Blog" />
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
              Create
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Footer />
    </>
  )
}

export default CreateBlogPage
