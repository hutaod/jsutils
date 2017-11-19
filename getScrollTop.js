/**
 * @desc 获取滚动条距离顶部的距离
 */

 export default function getScrollTop() {
   return (document.documentElement && document.documentElement.getScrollTop) ||  document.body.scrollTop;
 }