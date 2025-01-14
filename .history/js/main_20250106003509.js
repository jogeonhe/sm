document.addEventListener('DOMContentLoaded', () => {
  kpop();
});

function kpop() {
  const contentWrap = document.querySelector('#content_wrap'); 
  const popWrap = document.querySelector('#pop_wrap');
  const cultureWrap = document.querySelector('#culture');
  const about = document.querySelector('#about_title');
  const aboutText = document.querySelector('#about_text');
  const globalTitle = document.querySelector('#global_header');
  const globalSub = document.querySelector('#global_sub');
  const globalSecond = document.querySelector('#global_second_sub');
  const mapWrap = document.querySelector('#map_wrap');
  const mapTitle = document.querySelector('#map_header');
  const mapSub = document.querySelector('#map_title_second');
  const firstMapLinePath = document.querySelector('#first_map_line svg path');
  const secondMapLinePath = document.querySelector('#second_map_line svg path');
  const thirdMapLinePath = document.querySelector('#third_map_line svg path');
  const lastMapLinePath = document.querySelector('#last_map_line svg path');

  // GSAP 메인 타임라인 생성
  const mainTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: contentWrap,
      start: 'top top',
      end: '500% top',
      scrub: 1,
      pin: true,
      pinSpacing: true,
      markers: false,
    }
  });

  // 타임라인 1: popWrap, cultureWrap 애니메이션
  mainTimeline
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

  // 타임라인 2: globalTitle 애니메이션
  const secondTimeline = gsap.timeline();
  secondTimeline
    .to(globalTitle, {
      x: 107,
      opacity: 1,
      duration: 30
    })
    .to(globalSub, {
      x: 163,
      opacity: 1,
      duration: 30
    })
    .to(globalSecond, {
      x: 163,
      opacity: 1,
      duration: 30
    });

  // mainTimeline에 secondTimeline 추가 (2초 후)
  mainTimeline.add(secondTimeline, '+=2');

  // 타임라인 3: mapWrap 애니메이션
  const thirdTimeline = gsap.timeline();
  thirdTimeline
    .to(mapWrap, {
      y: 0,
      zIndex: 20,
      duration: 30
    })
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

  // mainTimeline에 thirdTimeline 추가 (5초 후)
  mainTimeline.add(thirdTimeline, '+=5');

  // 타임라인 4: 지도 라인 애니메이션
  const fourthTimeline = gsap.timeline();
  gsap.set([firstMapLinePath, secondMapLinePath, thirdMapLinePath, lastMapLinePath], {
    strokeDasharray: (index, target) => target.getTotalLength(),
    strokeDashoffset: (index, target) => target.getTotalLength(),
    stroke: "#FF90B3",
    strokeWidth: 2,
    opacity: 0
  });

  fourthTimeline
    .to([firstMapLinePath, secondMapLinePath, thirdMapLinePath, lastMapLinePath], {
      strokeDashoffset: 0,  
      duration: 1,  
      opacity: 1,  
      stagger: 0,
      delay: 0.8
    });

  // mainTimeline에 fourthTimeline 추가 (8초 후)
  mainTimeline.add(fourthTimeline, '+=8');

  // 여기에 추가적인 타임라인을 필요에 따라 계속 추가할 수 있습니다.
}
