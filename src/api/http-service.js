/**
 * Service return instance of http library (e.g. fetch, axios,...)
 * and implements methods for handling response data and http errors
 */
const http = {
  request(query, method = 'POST') {
    return fetch('https://desolate-river-23256.herokuapp.com/graphql', {
      headers: { 'content-type': 'application/json' },
      method: method,
      body: JSON.stringify(query),
    })
  },
  async responseHandler(action, defaultValue) {
    try {
      return await action.then(res => res.json())
    } catch (error) {
      if (defaultValue) {
        return defaultValue
      } else {
        console.error(error)
      }
    }
  },
}

export default http
