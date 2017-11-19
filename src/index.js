// const arrayEqual = require('./array/arrayEqual')

// module.exports = {
//   arrayEqual
// }

import { arrayEqual } from './array/arrayEqual'
import setCookie from './cookie/setCookie'
import getCookie from './cookie/getCookie'
import removeCookie from './cookie/removeCookie'
import { isFunction, isArray } from './type/checkType'
import getKeyName from './keyCode/getKeyName'

export {
  arrayEqual,
  setCookie,
  getCookie,
  removeCookie,
  isFunction,
  isArray,
  getKeyName
} 