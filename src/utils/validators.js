import parseMin from 'libphonenumber-js/max'

const isValidPhone = function(phone) {
  const parsedNumber = parseMin(phone)
  return !!(parsedNumber && parsedNumber.isValid())
}

const normalizeDate = function(date) {
  const datePickRegexp = new RegExp(/(\d{2})\/(\d{2})\/(\d{4})/)
  // swap dd and mm for Date.parse format
  const normalizedDate = date.replace(datePickRegexp, '$2/$1/$3')
  return Date.parse(normalizedDate)
}

const isDateValid = function(date) {
  if (date.length !== 10) {
    return false
  }
  const validDate = normalizeDate(date)
  return !isNaN(validDate)
}

const isDateFromFuture = function(date) {
  const validDate = normalizeDate(date)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return isDateValid(date) && validDate >= today
}

const isFlightNumberValid = function(number) {
  const formatRegexp = new RegExp(/^[A-Z\d]{2}[A-Z]?\d{1,4}[A-Z]?$/)
  return formatRegexp.test(number)
}

export { isValidPhone, isDateValid, isFlightNumberValid, isDateFromFuture }
