var navTip=getElem('.header__nav-tip'),       //滑动标识
    navItems=getAllElem('.header_nav_item'),  //导航条item
    screens=getAllElem('.screen'),            //屏标识
    heightSize=getContentSize()[1],           //容器高度
    index=0,                                  //选中状态标识
   setScreenAnimateEle={
  '.screen-1':[
      '.screen-1-wrap-h2',
      '.screen-1-wrap-p'
    ],
    '.screen-2':[
      '.screen-2-wrap-p',
      '.screen-2-wrap-span'
    ],
    '.screen-4':[
     '.screen4-wrap-1',
     '.screen4-wrap-2',
     '.screen4-wrap-3',
     '.screen4-wrap-4',
     '.screen4-wrap-5',
     '.screen4-wrap-6',
 
    ],
    '.screen-5':[
      '.screen-5-right',
      '.screen-5-article-left'
    ],
    '.screen-6':[
      '.screen6-wrap-fllow',
      '.title'
    ]

    };                                      //取出需要设置动画的元素


  var setScreenAnimate=function(screenCls){

     //获取当前屏的元素
     var screen=document.querySelector(screenCls);
     //需要设置动画的元素
     var animateEle=setScreenAnimateEle[screenCls];
     for(var i=0;i<animateEle.length;i++){
      //获取元素
      var element=getElem(animateEle[i]);
      //获取元素默认的样式
      var Cls=animateEle[i].substr(1)+'_animate_init';
      //为元素添加样式
      addCls(element,Cls);
      }
  }


window.onload=function(){
  //初始化所有screen高度
    for(var i=0;i<navItems.length;i++){
      screens[i].style.height=heightSize+'px';
  }
  //初始化所有元素动画 设置init
  for(k in setScreenAnimateEle){
    setScreenAnimate(k);
  }
}

//容器发生变化调整重新获取高度
window.onresize=function(){
  for(var i=0;i<navItems.length;i++){
    screens[i].style.height=getContentSize()[1]+'px';
}
}

//滚动设置 播放动画 inint ->done
var playScreenAnimateDone=function(screenCls){

     //获取当前屏的元素
     var screen=document.querySelector(screenCls);
     //需要设置动画的元素
     var animateEle=setScreenAnimateEle[screenCls];
  for(var i=0;i<animateEle.length;i++){
    //获取元素
    var element=getElem(animateEle[i]);
  //替换元素样式
  replaceCls(element,'_animate_init','_animate_done')
    }
}
//onscroll scrollTop发生变化
window.onscroll=function(){
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    //初始化第一屏动画
    if(scrollTop<1){
      index=0;
      navTip.style.left=(index*120+60)+'px';
      switchNavItensActive();
    }
    //导航条反向
    if( scrollTop > 1 ){
        addCls( getElem('.header'),'header_black' );
    }else{
        delCls( getElem('.header'),'header_black' );
    }

    //导航条反向动画

  if(scrollTop>heightSize*1-80){
    playScreenAnimateDone('.screen-2');
    index=1;
    navTip.style.left=(index*120+60)+'px';
    switchNavItensActive();
   
  }
  if(scrollTop>heightSize*2-80){
    index=2;
    navTip.style.left=(index*120+60)+'px';
    switchNavItensActive();
   
  }
  if(scrollTop>heightSize*3-80){
    playScreenAnimateDone('.screen-4');
    index=3;
    navTip.style.left=(index*120+60)+'px';
    switchNavItensActive();
    
  }
  if(scrollTop>heightSize*4-80){
    playScreenAnimateDone('.screen-5');
    index=4;
    navTip.style.left=(index*120+60)+'px';
    switchNavItensActive();
  }
  if(scrollTop>heightSize*5-80){
    playScreenAnimateDone('.screen-6');
    index=5;
    navTip.style.left=(index*120+60)+'px';
    switchNavItensActive();
  }
}


var setNavJump=function(i,lib){
    var item=lib[i];
    item.onclick=function(){
    //选中状态切换
    index=this.id;
    switchNavItensActive();

    var mb = myBrowser();
  
    if("Chrome"==mb){
    document.body.scrollTop=i*heightSize;
    }
  
    document.documentElement.scrollTop=i*heightSize;
   
   
    
    }
}

for(var i=0;i<navItems.length;i++){
    navItems[i].id=i;
   setNavJump(i,navItems);
}



//切换菜单选中状态
var switchNavItensActive=function(){
//清空所有元素选中状态 再添加选中状态
for(var i=0;i<navItems.length;i++){
delCls(navItems[i],'header_nav_item_active');
}
addCls(navItems[index],'header_nav_item_active');
}


//滑动门
var setTip=function(idx,lib){
lib[idx].onmouseover=function(){
navTip.style.left = ( idx * 120+60 )+'px';
}
//鼠标离开 回到以选中的状态
var activeIdx=0;
lib[idx].onmouseout=function(){
for(var i=0;i<lib.length;i++){
if(getCls(lib[i]).indexOf('header_nav_item_active')>-1)
    {
        activeIdx=i;
        break;
    }
}
navTip.style.left = ( activeIdx * 120+60 )+'px';
}
}

for(var i=0;i<navItems.length;i++){
setTip(i,navItems);
}

//弹出简历
var me=getElem('.screen-5-txt-a');
me.onclick=function(){
  console.log('简历')
}
