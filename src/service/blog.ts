const PREFIX_URL = 'http://127.0.0.1:3000/api'

/**
 * 获取博客列表
 */
export const getBlogList = async (page: number, limit = 5) => {
  const res = await fetch(`${PREFIX_URL}/blog?page=${page}&limit=${limit}`)
  const { data = {} } = await res.json()
  return data
}

/**
 * 创建博客
 */
export const createBlog = async (payload: object) => {
  const res = await fetch(`${PREFIX_URL}/blog`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...payload }),
  })
  const { data = {} } = await res.json()
  return data
}

/**
 * 获取博客详情
 */
export const getBlogDetail = async (id: string) => {
  const res = await fetch(`${PREFIX_URL}/blog/${id}`)
  const { data = {} } = await res.json()
  return data
}

/**
 * 更新博客
 */
export const updateBlog = async (id: string, payload: object) => {
  const res = await fetch(`${PREFIX_URL}/blog/${id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...payload }),
  })
  const { data = {} } = await res.json()
  return data
}

/**
 * 删除博客
 */
export const deleteBlog = async (id: string) => {
  const res = await fetch(`${PREFIX_URL}/blog/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  const { data = {} } = await res.json()
  return data
}
