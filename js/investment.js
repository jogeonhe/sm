document.addEventListener('DOMContentLoaded',()=>{
  investEvent()
})

function investEvent(){
  const Wrap=document.querySelector('#investment_wrap')
  const investWrap=document.querySelector('#investcate_wrap')
  const stockBox=document.querySelector('#stock_price')
  const dataBox=document.querySelector('#ir_data')
  const middleBox=document.querySelectorAll('#middle_box')

  gsap.to(stockBox, {left:0, top:0, duration:0.2, ease:'power1.out',scrollTrigger:{
    trigger:Wrap,
    start:'top 80%'
  }})
  gsap.to(dataBox, {left:0, top:0, duration:0.2, ease:'power1.out',scrollTrigger:{
    trigger:Wrap,
    start:'top 80%'
  }})
  gsap.to(middleBox,  {top:0, duration:0.2, ease:'power1.out',scrollTrigger:{
    trigger:Wrap,
    start:'top 80%'
  }})

}