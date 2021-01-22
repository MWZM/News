import requset from '../utils/request.js'

// 登陆接口
export const login = (data) => {
  return requset({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data: data
  })
}

// 发送短信验证码接口
export const SMScode = (mobile) => {
  return requset({
    method: 'GET',
    url: `/app/v1_0/sms/codes/${mobile}`
  })
}
// 用户登录后获取用户信息

export const getUserInfo = () => {
  return requset({
    method: 'GET',
    url: '/app/v1_0/user'
  })
}
