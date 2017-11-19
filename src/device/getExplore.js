/**
 * @desc 获取浏览器类型和版本
 */
function getExplore() {
  var sys = {},
      nua = navigator.userAgent.toLowerCase(),
      s;
  //判断
  (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1]:
  (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] :
  (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] :
  (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] :
  (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :
  (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] :
  (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;

  if(sys.ie) return ('IE:' + sys.ie);
  if(sys.edge) return ('EDGE:' + sys.edge);
  if(sys.firefox) return ('Firefox:' + sys.firefox);
  if(sys.opera) return ('Chrome:' + sys.opera);
  if(sys.chrome) return ('Opera:' + sys.chrome);
  if(sys.safari) return ('Safari:' + sys.safari);
  
  return 'Unkonwn';
}