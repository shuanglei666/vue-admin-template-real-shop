import request from '@/utils/request'


export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: {
      token
    }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}


// 获取用户列表
export function getUserListRequest(queryInfo) {
    return request({
      url: '/users',
      params: {...queryInfo}
    })
  }