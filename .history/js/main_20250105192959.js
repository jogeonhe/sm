document.addEventListener('DOMContentLoaded', () => {
  kpop();
});

function kpop() {
  const sm = document.querySelector('#sm');  
  const popWrap = document.querySelector('#pop_wrap');
  const cultureWrap = document.querySelector('#culture'); 
  const contentWrap = document.querySelector('#content_wrap'); 
  const textWrap=document.querySelector('#kpop_text_wrap')
  /*backimg*/
  const bgWrap=document.querySelector('#circle')
  const circle= document.querySelector('#circle>img')
  /*about*/ 
  const about=document.querySelector('#about_title')
  const aboutText=document.querySelector('#about_text')

  const linePath = document.querySelector('#line_svg path');
  const firstCircle = document.querySelector('#fisrt_circle circle');
  const secondCircle = document.querySelector('#second_circle circle');
  const thirdCircle = document.querySelector('#third_circle circle');
  const whiteCircle = document.querySelector('#white_circle circle');
  const firstText = document.querySelector('#first_text');
  const secondText = document.querySelector('#second_text');
  const thirdText = document.querySelector('#third_text');
  const whiteText = document.querySelector('#white_text');
  const secondLine = document.querySelector('#second_line path');
  const lastLine = document.querySelector('#last_line path');
  const svgWrap=document.querySelector('#svg_wrap')
  /*글로벌*/
  const globalTitle=document.querySelector('#global_header')
  const globalSub=document.querySelector('#global_sub') 
  const globalSecond=document.querySelector('#global_second_sub')
  /*책임*/ 
  const reponTitle=document.querySelector('#responsible_header')
  const reponSub=document.querySelector('#responsible_sub')
  const reponSecond=document.querySelector('#responsible_second_sub')


  // GSAP timeline 생성
  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: contentWrap,
      start: 'top top',
      end: '500% top',
      scrub: true,
      pin: true,
      pinSpacing: true,
      markers: false
    }
  });

  // 애니메이션 설정
  animation
    .to(popWrap, {
      y: -100,
      opacity: 0,
      duration: 10,
    })
    .to(cultureWrap, {
      y: -110,
      opacity: 1,
      duration: 10,
    })
    .to(bgWrap, {
      maskSize: "150% 150%",
      duration: 50,
    })
    // gsap.to(textWrap, {y: -400,opacity:0,duration: 1,ease:'power1.out',scrollTrigger:{
    //   trigger:'contentWrap',
    //   start:'200% 0',
    //   end:'bottom 0',
    //   toggleActions:'play reverse play reverse',
    // }
    // })
    .to(textWrap,{
      y:-400,
      opacity:0,
      duration:20
    })
    .to(about,{
      x:100,
      opacity:1,
      duration:30
    })
   
}
