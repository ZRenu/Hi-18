/**MY BASIC FUNCTION BY ZRY */

// 获取元素
var getElem=function(selector){
    return document.querySelector(selector)
}
var getAllElem=function(selector){
    return document.querySelectorAll(selector)
}
// 获取元素样式
var getCls=function(element){
    return element.getAttribute('class');
}
// 设置元素样式
var setCls=function(element,cls){
    return element.setAttribute('class',cls)
}
// 为元素添加样式
var addCls=function(element,cls){
    var baseCls=getCls(element);
    if(baseCls.indexOf(cls)===-1){
        setCls(element,baseCls+' '+cls)
    }
}
// 为元素删除样式
var delCls=function(element,cls){
    var baseCls=getCls(element);
    if(baseCls.indexOf(cls)!=-1){
    setCls( element,baseCls.split(cls).join(' ').replace(/\s+/g,' ') );
    }
}
//为元素替换样式(动画特定)
var replaceCls=function(elements,cls,newcls){
    var baseCls=getCls(elements);
    if(baseCls.indexOf(cls)!=-1){
  setCls(elements,baseCls.replace(cls,newcls))
    }
}
// 根据ID获取元素
var getById=function(id){
    return typeof(id)==="string"?document.getElementById(id):id;
}
// 自定义元素标识
var setSign=function(element,sign,value){
    return element.setAttribute(sign,value)
}
var setAllSign=function(element,i,sign,value){
    return element[i].setAttribute(sign,value)
}
// 获取自定义标识
var getSign=function(element,sign){
    return element.getAttribute(sign);
}
var getAllSign=function(element,i,sign){
    return element[i].getAttribute(sign)
}
//设置容器的高度和宽度
var setContentSize=function(id){
    getById(id).style.width=window.innerWidth+'px';
    getById(id).style.height=window.innerHeight+'px';
}
//获取容器的高度和宽度
var getContentSize=function(){
   var sizeNum=[];
   sizeNum.push(window.innerWidth);
   sizeNum.push(window.innerHeight);
   return sizeNum;
}

//容器发生变化调整高度和宽度
window.onresize=function(){}


//判断浏览器
var myBrowser=function(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    }; //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1){
    return "Chrome";
    }
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    }; //判断是否IE浏览器 ie10以下
    if(!!window.ActiveXObject || "ActiveXObject" in window){
        return "IE";   
    }
}

