import requset from '../utils/request'

// 点击搜索结果跳转至文章页面

export const ArticleInfo = (articleId) => {
  return requset({
    method: 'GET',
    url: `/app/v1_0/articles/${articleId}`
  })
}

// 关注用户

export const Addfollow = (ID) => {
  return requset({
    method: 'POST',
    url: '/app/v1_0/user/followings',
    data: {
      target: ID
    }
  })
}

// 取消关注用户

export const Delfollow = (targetID) => {
  return requset({
    method: 'DELETE',
    url: `/app/v1_0/user/followings/${targetID}`
  })
}
