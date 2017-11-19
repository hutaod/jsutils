import setCookie from './setCookie'

/**
 * @desc 移除cookie
 * @param {string} name 
 */
export default function removeCookie (name) {
  setCookie(name,"1",-1);
}