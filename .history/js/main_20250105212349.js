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
  const aboutWrap=document.querySelector('#about_wrap')
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
  /*지도*/
  const mapWrap=document.querySelector('#map_wrap')
  const mapTitle=document.querySelector('#map_header')
  const mapSub=document.querySelector('#map_title_second')
  const firstCircleFront=document.querySelector('#first_circle_front')
  const firstCircleBack=document.querySelector('#first_circle_back')
  const secondCircleFront=document.querySelector('#second_circle_front')
  const secondCircleBack=document.querySelector('#second_circle_back')
  const thirdCircleFront=document.querySelector('#third_circle_front')
  const thridCircleBack=document.querySelector('#third_circle_back')
  const lastCircleFront=document.querySelector('#last_circle_front')
  const lastCircleBack=document.querySelector('#last_circle_back')
  const midCircle=document.querySelector('#mid_circle_front')
  const firstMapLine=document.querySelector('#first_map_line')
  const secondMapLine=document.querySelector('#second_map_line')
  const thirdMapLine=document.querySelector('#third_map_line')
  const lastMapLine=document.querySelector('#last_map_line')
       
  
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

  // // 원의 stroke 초기화 (stroke와 strokeDasharray 적용)
  // gsap.set([firstCircle, secondCircle, thirdCircle, whiteCircle], {
  //   stroke: "white",  // stroke 색상 설정
  //   strokeDasharray: (index, target) => target.getTotalLength(), // 원의 길이를 기준으로 dasharray 설정
  //   strokeDashoffset: (index, target) => target.getTotalLength(), // 원을 숨기기 위해 Dashoffset을 길이로 설정
  //   fill: "none" // 원 안 채우지 않도록 설정
  // });

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
    .to(aboutText,{
      x:-100,
      opacity:1,
      duration:20
    })
     const lines = [linePath, secondLine, lastLine];
    lines.forEach((line, index) => {
        const length = line.getTotalLength();
        gsap.set(line, {
            strokeDasharray: length,
            strokeDashoffset: length, // 처음에는 선이 그려지지 않도록 설정
        });
        animation.to(line, {
            strokeDashoffset: 0, // 선이 그려지게
            duration: 2,  // 선 그려지는 시간
            delay: index * 0.5, // 순차적으로 그려지도록
            opacity:1
        });
    });

    // 원 그려지는 애니메이션
    const circles = [firstCircle, secondCircle, thirdCircle, whiteCircle];
    circles.forEach((circle, index) => {
        const length = 2 * Math.PI * circle.getAttribute('r'); // 원의 둘레 계산
        gsap.set(circle, {
            strokeDasharray: length,
            strokeDashoffset: length, // 처음에는 원이 그려지지 않도록 설정
        });
        animation.to(circle, {
            strokeDashoffset: 0, // 원이 그려지게
            duration: 10,  // 원 그려지는 시간
            delay: index * 0.5, // 순차적으로 그려지도록
            opacity:1
        });
    });

    // 텍스트 애니메이션 (원, 선 뒤에 텍스트가 나타나게)
    const texts = [firstText, secondText, thirdText, whiteText];
    texts.forEach((text, index) => {
        animation.to(text, {
            opacity: 1,  // 텍스트 나타나게
            y: 0,        // 원위치로
            duration: 6,
            delay: index * 0.5, // 텍스트 순차적으로 나타나도록
        });
    });
    // 텍스트 이동 애니메이션
    animation.to(textWrap, {
        y: -400,      // 텍스트를 위로 이동
        opacity: 0,   // 텍스트 투명도 0으로 설정
        duration: 3,
    })

    // About 타이틀과 텍스트 애니메이션
   
    .to([svgWrap,aboutText,about],{
      y:-400,
      opacity:0,
      duration:30
    })
    .to(globalTitle,{
      x:107,
      opacity:1,
      duration:30
    })
    .to(globalSub,{
      x:163,
      opacity:1,  
      duration:30
    })
    .to(globalSecond,{
      x:163,
      opacity:1,
      duration:30
    })
    .to([globalTitle,globalSecond,globalSub],{
      y:-400,
      opacity:0,
      duration:30
    })
    .to(reponTitle,{
      x:107,
      opacity:1,
      duration:30
    })
    .to(reponSub,{
      x:163,
      opacity:1,
      duration:50
    })
    .to(reponSecond,{
      x:163,
      opacity:1,
      duration:50,
    })
    const timeline1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#map_wrap',  // 해당 섹션을 트리거로 설정
        start: 'top top',  // 애니메이션 시작 시점
        end: '500% top',  // 애니메이션 종료 시점
        scrub: true,  // 스크롤과 애니메이션 동기화
        pin: true,  // 해당 콘텐츠 고정
        pinSpacing: true,
        markers: false  // 마커를 표시하지 않음
      }
    });
  
    // 각 SVG 선의 초기 상태 설정 (선이 안 보이게 함)
    gsap.set([firstMapLine, secondMapLine, thirdMapLine, lastMapLine], {
      strokeDasharray: (index, target) => target.getTotalLength(),  // 선의 길이를 기준으로 dasharray 설정
      strokeDashoffset: (index, target) => target.getTotalLength(),  // 선을 숨기기 위해 offset을 선의 길이로 설정
      stroke: "#FF90B3",  // 선 색상 설정
      strokeWidth: 2,  // 선의 두께 설정
      opacity: 0  // 선 초기 투명도 설정 (보이지 않게)
    });
  
    // 각 원의 초기 상태 설정 (원 숨기기)
    gsap.set([firstCircleFront, secondCircleFront, thirdCircleFront, lastCircleFront], {
      strokeDasharray: (index, target) => target.getTotalLength(),  // 원의 길이를 기준으로 dasharray 설정
      strokeDashoffset: (index, target) => target.getTotalLength(),  // 원을 숨기기 위해 offset을 원의 길이로 설정
      fill: "none",  // 원을 채우지 않도록 설정
      stroke: "#FF90B3",  // 원의 색상 설정
      strokeWidth: 2,  // 원의 두께 설정
      opacity: 0  // 원 초기 투명도 설정 (보이지 않게)
    });
  
    // 애니메이션: 선들이 순차적으로 그려지는 효과
    timeline1
      .to(firstMapLine, {
        strokeDashoffset: 0,  // 선 그려지게
        duration: 3,  // 애니메이션 시간
        opacity: 1,  // 선을 보이게 함
      })
      .to(secondMapLine, {
        strokeDashoffset: 0,  // 선 그려지게
        duration: 3,
        opacity: 1,
      })
      .to(thirdMapLine, {
        strokeDashoffset: 0,  // 선 그려지게
        duration: 3,
        opacity: 1,
      })
      .to(lastMapLine, {
        strokeDashoffset: 0,  // 선 그려지게
        duration: 3,
        opacity: 1,
      });
  
    // 애니메이션: 원들이 순차적으로 그려지는 효과
    timeline1
      .to(firstCircleFront, {
        strokeDashoffset: 0,  // 원 그려지게
        duration: 3,  // 애니메이션 시간
        opacity: 1,  // 원을 보이게 함
      })
      .to(secondCircleFront, {
        strokeDashoffset: 0,  // 원 그려지게
        duration: 3,
        opacity: 1,
      })
      .to(thirdCircleFront, {
        strokeDashoffset: 0,  // 원 그려지게
        duration: 3,
        opacity: 1,
      })
      .to(lastCircleFront, {
        strokeDashoffset: 0,  // 원 그려지게
        duration: 3,
        opacity: 1,
      });
  
  }