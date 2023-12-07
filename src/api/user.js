import request from '@/utils/request'

// export function login(data) {
//   return request({
//     url: 'v1/auth/login',
//     method: 'post',
//     data
//   })
// }

// export function login(data) {
//   return request({
//     url: '/vue-admin-template/user/login',
//     method: 'post',
//     data
//   })
// }
export function login(data) {
  return request({
    url: 'v1/auth/login',
    method: 'post',
    data
  })
}
export function getInfo() {
  return request({
    url: 'v1/user/get-info',
    method: 'get'
  })
}

// export function logout() {
//   return request({
//     url: '/vue-admin-template/user/logout',
//     method: 'post'
//   })
// }

export function register(params) {
  return request({
    url: `v1/auth/register`,
    method: 'post',
    data: params
  })
}

// xuantruonggroup.com.vn