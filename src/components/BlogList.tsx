import { Button } from 'antd'
import { useRouter } from 'next/router'
import { Pagination } from 'antd'

export const BlogList = ({ blogInfo }: any) => {
  const { items = [], meta = {} } = blogInfo || {}
  const { currentPage = 1, totalItems = 0, itemsPerPage = 5 } = meta
  const router = useRouter()

  const goUpdatePage = (id: string) => {
    router.push(`/post/update/${id}`)
  }

  const goCreatePage = () => {
    router.push('/post/create')
  }

  const onPageChanged = (page: number) => {
    router.push(`/post/${page}`)
  }

  return (
    <>
      <section className="mt-12 mx-auto px-4 max-w-screen-xl lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl text-gray-800 font-semibold">Blog List</h1>
          <p className="text-gray-500 max-w-lg mx-auto text-lg">
            React | Vue | NodeJS | App
          </p>
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => goCreatePage()}
          >
            Create
          </Button>
        </div>
        <div className="mt-12 w-full">
          {(items || []).map((item: any) => (
            <article
              className="mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
              key={item.id}
            >
              <a onClick={() => goUpdatePage(item.id)}>
                <div className="w-full h-48 rounded-t-md bg-indigo-600" />
                <div className="pt-3 ml-4 mr-2 mt-2">
                  <h3 className="text-xl text-gray-900">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.content}</p>
                </div>
                <div className="flex items-center pt-3 mr-2 mb-3">
                  <div className="ml-3">
                    <span className="block text-gray-400 text-sm">
                      {item.updatedAt}
                    </span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
        <div className="text-center mt-6">
          <Pagination
            simple
            current={currentPage}
            pageSize={itemsPerPage}
            total={totalItems}
            onChange={onPageChanged}
          />
        </div>
      </section>
    </>
  )
}
