document.addEventListener('DOMContentLoaded',()=>{
visualEffect();
})

function visualEffect(){
    const visualWrap=document.querySelector('#visual_wrap')
    const visualList=document.querySelector('#visual_list')
    const visualLi=document.querySelectorAll('#visual_list>li')
    const changeNum=document.querySelector('#change_num')
    const leftBtn= document.querySelector('#left_btn')
    const rightBtn= document.querySelector('#right_btn')


    let visualWidth=visualList.offsetWidth
    let currentX=0
    let nextIndex=1;
    let visualLength= visualLi.length


    init();
    initEvent();

   function init(){
    gsap.set(visualLi, {left:visualWidth, opacity:0})
    gsap.set(visualLi[0], {left:0, opacity:1})
   }
    
   function initEvent(){
    leftBtn.addEventListener('click',slidePrev)
    rightBtn.addEventListener('click',slideNext)
   }

   function slideNext(){
    alert(test)






   }

}