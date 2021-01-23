import requset from '../utils/request.js'

// 获取频道列表

export const getChannels = () => {
  return requset({
    method: 'GET',
    url: '/app/v1_0/channels'
  })
}

// 获取文章列表信息

export const getArticleList = (params) => {
  return requset({
    method: 'GET',
    url: '/app/v1_1/articles',
    params
  })
}
