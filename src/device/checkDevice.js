export function isMobile(){
    if(!!window.navigator.userAgent.match(/AppleWebKit.*Mobile.*/) && !!window.navigator.userAgent.match(/AppleWebKit/)){
        return true;
    }else {
        return false;
    }
}

export function isIos(){
    var ua = navigator.userAgent.toLowerCase();
    if(/(iphone|ipad|ipod|ios)/i.test(ua)) {
        return true;
    } else {
        return false;
    }
}

export function isAndroid(){
    var ua = navigator.userAgent.toLowerCase();
    if(/(android)/i.test(ua)) {
        return true;
    } else {
        return false;
    }
}

export function isIE() {
    if (!!window.ActiveXObject || "ActiveXObject" in window){
        return true;
    }else{
        return false;
    }
}

export function isXp() {
    if (window.navigator.userAgent.indexOf("Windows NT 5.1") > -1 || window.navigator.userAgent.indexOf("Windows XP") > -1){
        return true;
    }else{
        return false;
    }
}