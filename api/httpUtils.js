export function getWithQuery($axios, url, query = {}) {
  return $axios.get(url, {
    params: query,
  })
}



// export function postJson(url, data = {}) {
//   return service.post(url, {
//     data
//   })
// }
