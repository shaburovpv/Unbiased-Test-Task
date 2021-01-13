import httpService from './http-service'
import hireTaxiService from './hire-taxi-service'

/**
 * Collection of global objects for work with http api.
 * Each object collects a few methods for make http request.
 * e.g. Posts/News/Comments -> { create, update, get, getAll, ... }
 */
export default {
  hireTaxiService: hireTaxiService(httpService),
}
