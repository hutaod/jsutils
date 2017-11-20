/**
 * 判断是否是window
 * @param {*} obj 
 */
export default function isWindow( obj ) {
  return obj != null && obj === obj.window;
}