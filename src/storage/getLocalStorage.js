export default function getLocalStorage (key) {
    var data = localStorage.getItem(key);
    if(data){
        var dataObj = JSON.parse(data);
        if (new Date().getTime() - dataObj.time>dataObj.exp) {
            localStorage.removeItem(key)
            console.log('信息已过期');
        }else{
            return dataObj.content;
        }
    }
}