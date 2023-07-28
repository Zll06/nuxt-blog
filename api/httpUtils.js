import service from "@/api/request";

export function getWithQuery(url, query = {}) {
  return service.get(url, {
    params: query,
  })
}

export function postJson(url, data = {}) {
  return service.post(url, {
    data
  })
}
