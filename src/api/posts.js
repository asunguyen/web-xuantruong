import request from "@/utils/request";

export function getListAllPosts(params) {
  return request({
    url: `v1/posts?page=${params.page}&size=${params.size}`,
    method: "get",
  });
}

export function getListAllPostsByCategory(params) {
  return request({
    url: `v1/posts/by-category?categoryID=${params.category}&page=${params.page}&size=${params.size}`,
    method: "get",
  });
}

export function getPostsDetail(id) {
  return request({
    url: `v1/posts/detail?id=${id}`,
    method: "get",
  });
}

export function getListPostsByUser(params) {
  return request({
    url: `v1/posts/by-user?page=${params.page}&size=${params.size}`,
    method: "get",
  });
}

export function getListPostsByCategory(params) {
  return request({
    url: `v1/posts/by-category?categoryID=${params.categoryID}&page=${params.page}&size=${params.size}`,
    method: "get",
  });
}

export function createPosts(data) {
  return request({
    url: "v1/posts/create",
    method: "post",
    data,
  });
}

export function updatePosts(data) {
  return request({
    url: "v1/posts/update",
    method: "post",
    data,
  });
}

export function deletePosts(data) {
  return request({
    url: "v1/posts/delete",
    method: "post",
    data,
  });
}
