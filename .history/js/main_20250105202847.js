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
  const circle = document.querySelector('#circle>img');
  const about = document.querySelector('#about_title');
  const aboutText = document.querySelector('#about_text');
  
  // SVG Elements
  const firstCircle = document.querySelector('#fisrt_circle circle');
  const secondCircle = document.querySelector('#second_circle circle');
  const thirdCircle = document.querySelector('#third_circle circle');
  const whiteCircle = document.querySelector('#white_circle circle');
  
  const firstText = document.querySelector('#first_text');
  const secondText = document.querySelector('#second_text');
  const thirdText = document.querySelector('#third_text');
  const whiteText = document.querySelector('#white_text');
  
  const linePath = document.querySelector('#line_svg path');
  const secondLine = document.querySelector('#second_line path');
  const lastLine = document.querySelector('#last_line path');
  
  // SVG 원과 라인의 길이 가져오기
  const firstCircleLength = firstCircle.getTotalLength();
  const secondCircleLength = secondCircle.getTotalLength();
  const thirdCircleLength = thirdCircle.getTotalLength();
  const whiteCircleLength = whiteCircle.getTotalLength();
  
  const linePathLength = linePath.getTotalLength();
  const secondLineLength = secondLine.getTotalLength();
  const lastLineLength = lastLine.getTotalLength();

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

  // 원의 stroke 초기화 (stroke와 strokeDasharray 적용)
  gsap.set([firstCircle, secondCircle, thirdCircle, whiteCircle], {
    stroke: "white",  // stroke 색상 설정
    strokeDasharray: (index, target) => target.getTotalLength(), // 원의 길이를 기준으로 dasharray 설정
    strokeDashoffset: (index, target) => target.getTotalLength(), // 원을 숨기기 위해 Dashoffset을 길이로 설정
    fill: "none" // 원 안 채우지 않도록 설정
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
    .to(textWrap, {
      y: -400,
      opacity: 0,
      duration: 20
    })
    .to(about, {
      x: 100,
      opacity: 1,
      duration: 30
    })
    .TO(aboutText,{
      x:100,
      opacity:1,
      duration:20
    })
    // 첫 번째 선 그리기
    .to(linePath, {
      strokeDasharray: linePathLength,
      strokeDashoffset: 0,
      duration: 3,
      ease: "power1.out",
    })
    // 두 번째 선 그리기
    .to(secondLine, {
      strokeDasharray: secondLineLength,
      strokeDashoffset: 0,
      duration: 3,
      ease: "power1.out",
    }, "-=2") // 첫 번째 선 끝난 후 2초 뒤
    // 세 번째 선 그리기
    .to(lastLine, {
      strokeDasharray: lastLineLength,
      strokeDashoffset: 0,
      duration: 3,
      ease: "power1.out",
    }, "-=2") // 두 번째 선 끝난 후 2초 뒤
    
    // 첫 번째 원 그리기
    .to(firstCircle, {
      strokeDashoffset: 0,
      duration: 3,
      ease: "power1.out",
    })
    // 첫 번째 텍스트 나오기
    .to(firstText, {
      opacity: 1,
      x: 100,
      duration: 1,
      ease: "power1.out",
    }, "-=2") // 첫 번째 원 끝난 후 2초 뒤
    
    // 두 번째 원 그리기
    .to(secondCircle, {
      strokeDashoffset: 0,
      duration: 3,
      ease: "power1.out",
    }, "-=1") // 첫 번째 원 끝난 후 1초 뒤
    // 두 번째 텍스트 나오기
    .to(secondText, {
      opacity: 1,
      x: 100,
      duration: 1,
      ease: "power1.out",
    }, "-=1") // 두 번째 원 끝난 후 1초 뒤

    // 세 번째 원 그리기
    .to(thirdCircle, {
      strokeDashoffset: 0,
      duration: 3,
      ease: "power1.out",
    }, "-=1") // 두 번째 원 끝난 후 1초 뒤
    // 세 번째 텍스트 나오기
    .to(thirdText, {
      opacity: 1,
      x: 100,
      duration: 1,
      ease: "power1.out",
    }, "-=1") // 세 번째 원 끝난 후 1초 뒤
    
    // 네 번째 원 (흰색 원) 그리기
    .to(whiteCircle, {
      strokeDashoffset: 0,
      duration: 3,
      ease: "power1.out",
    }, "-=1") // 세 번째 원 끝난 후 1초 뒤
    // 네 번째 텍스트 나오기
    .to(whiteText, {
      opacity: 1,
      x: 100,
      duration: 1,
      ease: "power1.out",
    }, "-=1") // 흰색 원 끝난 후 1초 뒤
    
    // about 애니메이션
    .to(about, {
      x: 100,
      opacity: 1,
      duration: 30,
    });
}
