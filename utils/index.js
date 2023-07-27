//router 实例
export function getRouter () {
  return window.$nuxt.$router
}

//route 实例
export function getRoute () {
  return window.$nuxt.$route
}

/**
 * 根据传入数据类型，返回对应类型基本的空值
 * @param data: 传入数据
 * @param type: 数据类型
 * @returns {string|{}|*[]|number|*}
 */
export function reasonTypeReturnData(data, type) {
  switch (type) {
    case "number":
      if(typeof data === "number" && !isNaN(data)) {
        return data
      } else {
        return 0
      }
    case "string":
      if(typeof data === "string") {
        return data
      } else {
        return ""
      }
    case "object":
      if(data instanceof Object && Object.keys(data).length) {
        return data
      } else {
        return {}
      }
    case "array":
      if(Array.isArray(data)) {
        return data
      } else {
        return []
      }
    default:
      return null
  }
}
