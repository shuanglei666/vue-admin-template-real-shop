import request from '@/utils/request'

// 获取列表
export function getUsersList(queryInfo) {
  return request({
    url: '/users',
    method: 'get',
    params:{...queryInfo}
  })
}

// 修改用户状态
export function changUserStateRequest(uid, type) {
    return request({
      url: `users/${uid}/state/${type}`,
      method: 'put',
    })
  }