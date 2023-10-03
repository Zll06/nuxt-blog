//router 实例
export function getRouter() {
  return window.$nuxt.$router
}

//route 实例
export function getRoute() {
  return window.$nuxt.$route
}

/**
 * 根据传入数据类型，返回对应类型基本的空值
 * @returns {string|{}|*[]|number|*}
 * @param data
 * @param type
 */
export function reasonTypeReturnData(data, type) {
  switch (type) {
    case 'number':
      if (typeof data === 'number' && !isNaN(data)) {
        return data
      } else {
        return 0
      }
    case 'string':
      if (typeof data === 'string') {
        return data
      } else {
        return ''
      }
    case 'object':
      if (data instanceof Object && Object.keys(data).length) {
        return data
      } else {
        return {}
      }
    case 'array':
      if (Array.isArray(data)) {
        return data
      } else {
        return []
      }
    default:
      return null
  }
}

/**
 * 万能判空函数
 * @param data
 * @returns {number|boolean}
 */
export function isEmpty(data) {
  if([undefined, null, ""].includes(data)) {
    return true
  }
  const type = typeof data
  switch (type) {
    case "number":
      return isNaN(data)
    case "string":
      return false
    case "object":
      if(data instanceof Object) {
        return !Boolean(Reflect.ownKeys(data).length)
      } else if(data instanceof Array) {
        return !Boolean(data.length)
      } else {
        return true
      }
  }
}
