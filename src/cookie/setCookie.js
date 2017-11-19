/**
 * @desc 设置cookie
 * @param {string} name 
 * @param {string} value 
 * @param {Number} days 
 */
export default function setCookie(name, value, days) {
  if(days && typeof days === 'number') {
      var date = new Date();
      date.setDate(date.getDate() + days);
      document.cookie = name + '=' + value + ';expires=' + date;
      return;
  }
  document.cookie = name + '=' + value;
}