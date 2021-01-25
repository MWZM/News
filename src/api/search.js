import requset from '../utils/request'

// 文章搜索结果接口
export const SearchResult = (p) => {
  return requset({
    method: 'GET',
    url: '/app/v1_0/search',
    params: p
  })
}

// 文章搜索联想结果接口
export const SearchAssociate = (q) => {
  return requset({
    method: 'GET',
    url: '/app/v1_0/suggestion',
    params: {
      q
    }
  })
}
