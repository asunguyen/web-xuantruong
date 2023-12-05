import request from "@/utils/request";

export function getListSlider() {
  return request({
    url: `v1/slider/get-all`,
    method: "get",
  });
}

export function createSlider(data) {
  return request({
    url: "v1/slider/create",
    method: "post",
    data,
  });
}

export function updateSlider(data) {
  return request({
    url: "v1/slider/update",
    method: "post",
    data,
  });
}

export function deleteSlider(data) {
  return request({
    url: "v1/slider/delete",
    method: "post",
    data,
  });
}
