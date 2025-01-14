document.addEventListener('DOMContentLoaded', () => {
  kpop();
});

function kpop() {
  // DOM 요소
  const sm = document.querySelector('#sm');  
  const popWrap = document.querySelector('#pop_wrap');
  const cultureWrap = document.querySelector('#culture'); 
  const contentWrap = document.querySelector('#content_wrap'); 
  const textWrap = document.querySelector('#kpop_text_wrap');
  const bgWrap = document.querySelector('#circle');
  const aboutWrap = document.querySelector('#about_wrap');
  const about = document.querySelector('#about_title');
  const aboutText = document.querySelector('#about_text');
  const globalTitle = document.querySelector('#global_header');
  const globalSub = document.querySelector('#global_sub');
  const mapWrap = document.querySelector('#map_wrap');
  const mapTitle = document.querySelector('#map_header');
  const mapSub = document.querySelector('#map_title_second');

  // SVG와 길이 설정
  const linePath = document.querySelector('#line_svg path');
  const firstCircle = document.querySelector('#fisrt_circle circle');
  const secondCircle = document.querySelector('#second_circle circle');
  const thirdCircle = document.querySelector('#third_circle circle');
  const whiteCircle = document.querySelector('#white_circle circle');
  
  // 타임라인 1: popWrap과 관련된 애니메이션
  const popTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: contentWrap,
      start: 'top top',
      end: '500% top',
      scrub: 1,
      pin: true,
      pinSpacing: true,
    }
  });
  
  popTimeline
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
    });

  // 타임라인 2: About 관련 애니메이션
  const aboutTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: aboutWrap,
      start: 'top top',
      end: '200% top',
      scrub: 1,
      pin: true,
      pinSpacing: true,
    }
  });

  aboutTimeline
    .to(about, {
      x: 100,
      opacity: 1,
      duration: 30
    })
    .to(aboutText, {
      x: -100,
      opacity: 1,
      duration: 20
    });

  // 타임라인 3: Global 관련 애니메이션
  const globalTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: globalTitle,
      start: 'top top',
      end: '500% top',
      scrub: 1,
      pin: true,
      pinSpacing: true,
    }
  });

  globalTimeline
    .to(globalTitle, {
      x: 107,
      opacity: 1,
      duration: 30
    })
    .to(globalSub, {
      x: 163,
      opacity: 1,
      duration: 30
    });

  // 타임라인 4: Map 관련 애니메이션
  const mapTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: mapWrap,
      start: 'top top',
      end: '500% top',
      scrub: 1,
      pin: true,
      pinSpacing: true,
    }
  });

  mapTimeline
    .to(mapTitle, {
      x: 151,
      opacity: 0.3,
      duration: 1
    })
    .to(mapSub, {
      x: -147,
      opacity: 1,
      duration: 1
    });
}

