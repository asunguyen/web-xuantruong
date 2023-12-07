import request from "@/utils/request";

export function getListCategory(params = { page: 0, size: 10000 }) {
  return request({
    url: `v1/category?page=${params.page}&size=${params.size}`,
    method: "get",
  });
}
export function getCategoryDetail(id) {
  return request({
    url: `v1/category/${id}`,
    method: "get",
  });
}
export function createCategory(data) {
  return request({
    url: "v1/category/create",
    method: "post",
    data,
  });
}
export function updateCategory(data) {
  return request({
    url: "v1/category/update",
    method: "post",
    data,
  });
}
export function deleteCategory(data) {
  return request({
    url: "v1/category/delete",
    method: "post",
    data,
  });
}
