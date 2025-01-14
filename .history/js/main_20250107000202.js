document.addEventListener('DOMContentLoaded', () => {
  kpop();
  about();
});

function kpop() {
  const sm = document.querySelector('#sm');  
  const popWrap = document.querySelector('#pop_wrap');
  const cultureWrap = document.querySelector('#culture'); 
  const contentWrap = document.querySelector('#content_wrap'); 
  const textWrap=document.querySelector('#kpop_text_wrap')
  const bgWrap=document.querySelector('#circle')

  // 애니메이션 초기 상태 설정
  gsap.set([popWrap, cultureWrap, textWrap, bgWrap], {
    opacity: 0,  // 애니메이션이 시작되기 전에 숨겨놓기
    y: 100,      // 아래로 숨겨놓기 (또는 다른 위치)
    backgroundColor: 'transparent', // 배경을 투명하게 설정
  });

  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: contentWrap,
      start: 'top top',
      end: 'bottom top',
      scrub: 6,
      pin: true,
      pinSpacing: false,  // 고정 후 빈 공간을 생성하지 않음
      markers: false
    }
  });

  // 애니메이션 설정
  animation
    .to(popWrap, { y: -100, opacity: 1, duration: 0.8 })
    .to(cultureWrap, { y: -110, opacity: 1, duration: 0.8 })
    .to(bgWrap, { maskSize: "150% 150%", duration: 5 })
    .to(textWrap, { y: -400, opacity: 0, duration: 1 });
}

function about() {
  const contentWrap = document.querySelector('#content_wrap');
  const about = document.querySelector('#about_title');
  const aboutText = document.querySelector('#about_text');
  
  const animationAbout = gsap.timeline({
    scrollTrigger: {
      trigger: contentWrap,
      start: 'top top',
      end: '200% top',
      scrub: 3,
      pin: true,
      pinSpacing: true,
      markers: false
    }
  });

  animationAbout
    .to(about, { x: 100, opacity: 1, duration: 1 })
    .to(aboutText, { x: -100, opacity: 1, duration: 1 });
}
