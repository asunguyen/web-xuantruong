import request from '@/utils/request'

export function uploadFile(data) {
  return request({
    url: 'v1/upload/image',
    method: 'post',
  })
}

export function getListFile(params) {
  return request({
    url: `v1/upload?page=${params.page}&size=${params.size}&search=${params.search}`,
    method: 'get',
  })
}
