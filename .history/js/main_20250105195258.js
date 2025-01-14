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
  .to(popWrap, { y: -100, opacity: 0, duration: 10 })
  .to(cultureWrap, { y: -110, opacity: 1, duration: 10 })
  .to(bgWrap, { maskSize: "150% 150%", duration: 50 });

// 독립적인 애니메이션 (textWrap)
gsap.to(textWrap, {
  y: -400,
  opacity: 0,
  duration: 20,
  scrollTrigger: {
    trigger: contentWrap,
    start: 'top top',        // contentWrap의 top이 뷰포트 top에 도달할 때
    end: '100% 0',       // contentWrap의 bottom이 뷰포트 top에 도달할 때
    // scrub: true,             // 스크롤에 맞춰 애니메이션이 scrubbing 되도록
    markers: false           // 마커를 표시하지 않도록 설정
  }
});

// about 애니메이션
gsap.to(about, {
  x: 100,
  opacity: 1,
  duration: 0.8,
  delay: 1,  // 딜레이를 추가하여 애니메이션 시작 시간 조정
  scrollTrigger: {
    trigger: contentWrap,
    start: 'top 20%',  // 시작 지점 (contentWrap의 상단에서 20% 지점)
    end: 'bottom 80%',  // 끝 지점 (contentWrap의 하단에서 80% 지점)
    scrub: false,  // 스크럽을 제거하여 자동 실행되도록 설정
    toggleActions: 'play none none none'  // 애니메이션 시작, 리버스 동작 없이
  }
});
    // gsap.to(about,{x:100,opacity:1,duration:30,scrollTrigger:{
    //   trigger:contentWrap,
    //   start:'200% 0',
    //   end:'bottom 0',
    //   toggleActions:'play reverse play reverse',

    // }})
   
}
