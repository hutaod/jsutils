import type from './type'

/**
 * 判断是否方法
 * @param {*} obj 
 */
export function isFunction(obj) {
  return type(obj) === "function";
}
/**
 * 判断是否是数组
 * @param {*} obj 
 */
export function isArray (obj) {
  if(Array.isArray){
    return Array.isArray(obj);
  }
  return type(obj) === "array";
}
/**
 * 判断是否是number类型
 * @param {*} obj 
 */
export function isNumber (obj) {
  return type(obj) === "number";
}

/**
 * 判断是否是dom元素
 * @param {*} obj 
 */
export function isElement (obj) {
  return !!(obj && obj.nodeType === 1);
}

/**
 * 判断是否是空对象
 * @param {*} obj 
 */
export function isEmptyObject (obj) {
  var name;
  for(name in obj) {
    return false;
  }
  return true;
}