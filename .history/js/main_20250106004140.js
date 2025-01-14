document.addEventListener('DOMContentLoaded', () => {
  kpop();
});

function kpop() {
  const popWrap = document.querySelector('#pop_wrap');
  const cultureWrap = document.querySelector('#culture');
  const textWrap = document.querySelector('#kpop_text_wrap');
  const about = document.querySelector('#about_title');
  const aboutText = document.querySelector('#about_text');
  const globalTitle = document.querySelector('#global_header');
  const globalSub = document.querySelector('#global_sub');
  const globalSecond = document.querySelector('#global_second_sub');
  
  // 각 섹션별 ScrollTrigger 설정
  gsap.timeline({
    scrollTrigger: {
      trigger: popWrap,  // 해당 섹션을 트리거로 설정
      start: 'top bottom',  // 화면 하단에 닿을 때 애니메이션 시작
      end: 'top top',  // 화면 상단에 닿을 때 끝
      scrub: true,  // 스크롤에 맞춰 애니메이션 진행
      markers: true,  // 마커로 애니메이션의 범위를 확인
    }
  })
    .to(popWrap, {
      opacity: 0,
      y: -100,
      duration: 3
    });

  gsap.timeline({
    scrollTrigger: {
      trigger: cultureWrap,
      start: 'top bottom',
      end: 'top top',
      scrub: true,
      markers: true,
    }
  })
    .to(cultureWrap, {
      opacity: 1,
      y: 0,
      duration: 3
    });

  gsap.timeline({
    scrollTrigger: {
      trigger: textWrap,
      start: 'top bottom',
      end: 'top top',
      scrub: true,
      markers: true,
    }
  })
    .to(textWrap, {
      opacity: 0,
      y: -400,
      duration: 3
    });

  gsap.timeline({
    scrollTrigger: {
      trigger: about,
      start: 'top bottom',
      end: 'top top',
      scrub: true,
      markers: true,
    }
  })
    .to(about, {
      x: 100,
      opacity: 1,
      duration: 3
    });

  gsap.timeline({
    scrollTrigger: {
      trigger: aboutText,
      start: 'top bottom',
      end: 'top top',
      scrub: true,
      markers: true,
    }
  })
    .to(aboutText, {
      x: -100,
      opacity: 1,
      duration: 3
    });

  gsap.timeline({
    scrollTrigger: {
      trigger: globalTitle,
      start: 'top bottom',
      end: 'top top',
      scrub: true,
      markers: true,
    }
  })
    .to(globalTitle, {
      x: 107,
      opacity: 1,
      duration: 3
    })
    .to(globalSub, {
      x: 163,
      opacity: 1,
      duration: 3
    })
    .to(globalSecond, {
      x: 163,
      opacity: 1,
      duration: 3
    });
}
