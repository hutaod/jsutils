import type from './type'

/**
 * 判断是否方法
 * @param {*} obj 
 */
export function isFunction(obj) {
  return type(obj) === "function";
}

export function isArray (obj) {
  if(Array.isArray){
    return Array.isArray(obj);
  }
  return type(obj) === "array";
}