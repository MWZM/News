// 获取本地存储的token值
export const getItem = (token) => {
  const data = window.localStorage.getItem(token)
  try {
    return JSON.parse(data)
  } catch {
    return data
  }
}

// 创建本地存储值
export const setItem = (token, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(token, value)
}

// 移出本地存储值

export const removeItem = (token) => {
  window.localStorage.removeItem(token)
}
