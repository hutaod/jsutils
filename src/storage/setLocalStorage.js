export default function setLocalStorage (key,value,exp) {
    var curTime = new Date().getTime();
    var expTime = exp || 7*24*60*60*1000;
    localStorage.setItem(key,JSON.stringify({content:value,time:curTime,exp:expTime}));
}