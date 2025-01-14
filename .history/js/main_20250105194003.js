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

  // GSAP timeline 생성 (scrub을 적용한 애니메이션)
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
    .to(textWrap, { y: -400, opacity: 0, duration: 20 })
  
    // `scrub`을 적용하지 않으려면, 아래와 같이 `scrollTrigger`를 별도로 추가하는 방식으로 설정
    .add(() => {
      gsap.to(about, {
        x: 100,
        opacity: 1,
        duration: 30,
        scrollTrigger: {
          trigger: contentWrap,
          start: '200% 0', // 애니메이션 시작 위치
          end: 'bottom 0', // 애니메이션 끝 위치
          toggleActions: 'play reverse play reverse', // 스크롤 방향에 따라 애니메이션이 반대로 실행
          scrub: false // scrub을 설정하지 않음, 스크롤에 맞춰 바로 애니메이션이 실행됩니다.
        }
      });
    });
}
