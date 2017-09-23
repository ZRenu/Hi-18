
//取出需要设置动画的元素
var setScreenAnimateEle={
    '.screen-1':[
        '.screen-1-wrap-h2',
        '.screen-1-wrap-p'
    ]
}

//為屏幕设置样式
function setScreenAnimate(screenCls){
    //获取当前屏的元素
    var screen=document.querySelector(screenCls);
    //需要设置动画的元素
    var animateEle=setScreenAnimateEle[screenCls];
    
    //样式初始化标识（是否有初始化子元素的样式）
    var isSetAnimateCls=false;
    //屏幕点击标识 （当前屏幕下所有子元素的状态是done吗）
    var isAnimateDone=false;


    screen.onclick=function(){

      //初始化样式，增加init
     if(isSetAnimateCls===false){
        for(var i=0;i<animateEle.length;i++){
        //获取元素
        var element=getElem(animateEle[i]);
        //获取元素默认的样式
        var Cls=animateEle[i].substr(1)+'_animate_init';
        //为元素添加样式
        addCls(element,Cls);
        }
        isSetAnimateCls=true;
        return;
     }

     //切换所有animateEle的 init -> done
     if(isAnimateDone===false){
        for(var i=0;i<animateEle.length;i++){
            //获取元素
            var element=getElem(animateEle[i]);
          //替换元素样式
          replaceCls(element,'_animate_init','_animate_done')
            }
            isAnimateDone=true;
            return;  
     }

      //切换所有animateEle的 done -> init
      if(isAnimateDone===true){
        for(var i=0;i<animateEle.length;i++){
            //获取元素
            var element=getElem(animateEle[i]);
          //替换元素样式
          replaceCls(element,'_animate_done','_animate_init')
            }
            isAnimateDone=false;
            return;  
     }


    }


}

setScreenAnimate('.screen-1')