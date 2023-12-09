import request from '@/utils/request'

export function uploadFile(formData) {
  console.log('formData', formData)
  return request({
    url: 'v1/upload/image',
    method: 'post',
    headers:{'Content-Type': 'multipart/form-data'},
    data: formData
  })
}

export function getListFile(params) {
  return request({
    url: `v1/upload?page=${params.page}&size=${params.size}&search=${params.search}`,
    method: 'get',
  })
}
