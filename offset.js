/**
 * @desc 获取一个元素距离document的位置
 * @param {HTMLElement} ele 
 * @returns { {left: number, top: number} }
 */
export default function offset(ele) {
  var pos = {
    left: 0,
    top: 0
  };

  while (ele) {
    pos.left += ele.offsetLeft;
    post.top += ele.offsetTop;
    ele = ele.offsetParent;
  }

  return pos;
}