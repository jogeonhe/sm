document.addEventListener('DOMContentLoaded',()=>{
    const dot=document.querySelectorAll('#auditiondots_list>li')
    const imgList=document.querySelector('#auditionimg_list')
    const imgLi=document.querySelectorAll('#auditionimg_list>li')
    const img=document.querySelectorAll('#auditionimg_list>li>a>img')
  
    let selectedDot=dot[0]
  
    let imgLength=imgLi.length
    // let imgWidth=img[0].offsetWidth
    let imgListWidth=imgList.offsetWidth
    // alert(imgListWidth)
    let imgLiWidth=imgLi.offsetWidth
  
    
    dot.forEach((item,index)=>{
      item.addEventListener('mouseenter',()=>{
        activatedDot(index)
        slideImg(index)
  
      })
    })
  
    function activatedDot(index){
      if(selectedDot!=dot[index]){
        selectedDot.classList.remove('selected')
        selectedDot=dot[index]
        selectedDot.classList.add('selected')
      }
    }
  
    function slideImg(index){
      gsap.to(imgList,{left:-imgLiWidth,duration:0.5,ease:'power1.out',onComplete:()=>{
        imgList.append(imgList.firstElementChild)
      }})
    }
  
    
  })