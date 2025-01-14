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
  const aboutWrap = document.querySelector('#about_wrap');
  const about = document.querySelector('#about_title');
  const aboutText = document.querySelector('#about_text');
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
  const svgWrap = document.querySelector('#svg_wrap');
  const globalTitle = document.querySelector('#global_header');
  const globalSub = document.querySelector('#global_sub'); 
  const globalSecond = document.querySelector('#global_second_sub');
  const reponTitle = document.querySelector('#responsible_header');
  const reponSub = document.querySelector('#responsible_sub');
  const reponSecond = document.querySelector('#responsible_second_sub');
  const mapWrap = document.querySelector('#map_wrap');
  const mapTitle = document.querySelector('#map_header');
  const mapSub = document.querySelector('#map_title_second');
  const firstCircleFront = document.querySelector('#first_circle_front');
  const firstCircleBack = document.querySelector('#first_circle_back');
  const secondCircleFront = document.querySelector('#second_circle_front');
  const secondCircleBack = document.querySelector('#second_circle_back');
  const thirdCircleFront = document.querySelector('#third_circle_front');
  const thridCircleBack = document.querySelector('#third_circle_back');
  const lastCircleFront = document.querySelector('#last_circle_front');
  const lastCircleBack = document.querySelector('#last_circle_back');
  const midCircle = document.querySelector('#mid_circle_front');
  const firstMapLine = document.querySelector('#first_map_line');
  const secondMapLine = document.querySelector('#second_map_line');
  const thirdMapLine = document.querySelector('#third_map_line');
  const lastMapLine = document.querySelector('#last_map_line');
 
  // GSAP timeline 생성
  const animation = gsap.timeline();
  
  // 애니메이션 진행
  animation.to(popWrap, {
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
    duration: 50
  })
  .to(textWrap, {
    y: -400,
    opacity: 0,
    duration: 30
  })
  .to(aboutWrap, {
    y: 0,
    duration: 30
  })
  
  gsap.to(about, {
    x: 100,
    opacity: 1,
    duration: 1
  });

  gsap.to(aboutText, {
    x: -100,
    opacity: 1,
    duration: 1
  });

  const lines = [linePath, secondLine, lastLine];
  const circles = [firstCircle, secondCircle, thirdCircle];
  const texts = [firstText, secondText, thirdText];

  // 선 그려지는 애니메이션
  lines.forEach((line, index) => {
    const length = line.getTotalLength();
    gsap.set(line, {
        strokeDasharray: length,
        strokeDashoffset: length,  // 처음에는 선이 그려지지 않도록 설정
    });
    animation.to(line, {
        strokeDashoffset: 0,  // 선이 그려지게
        duration: 2,  // 선 그려지는 시간
        delay: index * 0.5,  // 선들은 0.5초 간격으로 그려지도록 설정
        opacity: 1,
    });
  });

  // 원 그려지는 애니메이션과 텍스트
  circles.forEach((circle, index) => {
    const length = 2 * Math.PI * circle.getAttribute('r');  // 원의 둘레 계산
    gsap.set(circle, {
        strokeDasharray: length,
        strokeDashoffset: length,  // 처음에는 원이 그려지지 않도록 설정
    });

    // 원 그려지는 애니메이션
    animation.to(circle, {
        strokeDashoffset: 0,  // 원이 그려지게
        duration: 3,  // 원 그려지는 시간
        delay: index * 0.5,  // 원들은 선 그려지고 0.5초 후에 그려지도록 설정
        opacity: 1,
    });

    // 텍스트 나타나는 애니메이션
    animation.to(texts[index], {
        opacity: 1,  // 텍스트 나타나게
        y: 0,  // 원위치로
        duration: 3,  // 텍스트가 나타나는 시간
        delay: index * 0.5 + 1,  // 원과 동시에 텍스트가 나옵니다
    });
  });

  // 마지막 흰색 원과 텍스트 애니메이션
  animation.to('#white_circle circle', {
    strokeDashoffset: 0,
    duration: 3,
    opacity: 1,
  });
  animation.to('#white_text', {
    opacity: 1,
    duration: 3,
  });

  animation.to([svgWrap, aboutText, about], {
    y: -400,
    opacity: 0,
    duration: 30
  });

  animation.to(globalTitle, {
    x: 107,
    opacity: 1,
    duration: 30
  });

  animation.to(globalSub, {
    x: 163,
    opacity: 1,  
    duration: 30
  });

  animation.to(globalSecond, {
    x: 163,
    opacity: 1,
    duration: 30
  });

  animation.to([globalTitle, globalSecond, globalSub], {
    y: -400,
    opacity: 0,
    duration: 30
  });

  animation.to(reponTitle, {
    x: 107,
    opacity: 1,
    duration: 30
  });

  animation.to(reponSub, {
    x: 163,
    opacity: 1,
    duration: 50
  });

  animation.to(reponSecond, {
    x: 163,
    opacity: 1,
    duration: 50,
  });
}
