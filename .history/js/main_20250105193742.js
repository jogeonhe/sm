document.addEventListener('DOMContentLoaded', () => {
  kpop();
});

function kpop() {
  const sm = document.querySelector('#sm');  
  const popWrap = document.querySelector('#pop_wrap');
  const cultureWrap = document.querySelector('#culture'); 
  const contentWrap = document.querySelector('#content_wrap'); 
  const textWrap = document.querySelector('#kpop_text_wrap');
  const bgWrap = document.querySelector('#circle');
  const about = document.querySelector('#about_title');

  // GSAP timeline 생성
  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: contentWrap,
      start: 'top top',
      end: '500% top',
      scrub: true,  // 스크롤에 맞춰 애니메이션이 동기화
      pin: true,
      pinSpacing: true,
      markers: false
    }
  });

  // 타임라인 내 애니메이션 순서대로 설정
  animation
    .to(popWrap, { y: -100, opacity: 0, duration: 10 })
    .to(cultureWrap, { y: -110, opacity: 1, duration: 10 })
    .to(bgWrap, { maskSize: "150% 150%", duration: 50 })
    .to(textWrap, { y: -400, opacity: 0, duration: 20 });

  // 타임라인 외에서 별도로 scrollTrigger를 적용할 애니메이션 (about)
  gsap.to(about, {
    x: 100,
    opacity: 1,
    duration: 30,
    scrollTrigger: {
      trigger: contentWrap,
      start: '200% 0', // 스크롤 위치에 맞춰 애니메이션을 시작
      end: 'bottom 0', // 끝나는 위치
      toggleActions: 'play reverse play reverse', // 스크롤 방향에 따라 애니메이션이 반대로 실행
    }
  });
}