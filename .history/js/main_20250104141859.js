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
         
   
    // GSAP timeline 생성
    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: contentWrap,  
        start: 'top top',  
        end: '500% top' ,  
        scrub: true, 
        pin: true,
        pinSpacing: true, 
        markers:false
      }
    });
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
    /*텍스트 올라가는 효과*/ 
    // animation.set(circle, { bottom:-500 })  
    // bgWrap 애니메이션: 배경 마스크 크기 변화
    .to(bgWrap, {maskSize: "150% 150%",
      duration:50
    })
    .to(textWrap, {
      y: -400,      // 텍스트를 위로 이동
    opacity: 0,   // 텍스트 투명도 0으로 설정
    duration:30
  })
  .to(aboutWrap,{
    y:0,
    duration:30,
    // toggleActions:'play reverse play reverse',  
  })
  
  // animation.to(about,{
  //   x:86,
  //   opacity:1,
  //   duration:10
  // })
  // animation.to(aboutText,{
  //   x:-100,
  //   opacity:1,
  //   duration:10
  // })

  gsap.to(about, {
    x: 100,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: aboutWrap,
      start: '90% 0',
      toggleActions:'play reverse play reverse',
    }
  })
  gsap.to(aboutText,{x:-100,opacity:1,duration:1,scrollTrigger:{
    trigger:aboutWrap,
    start:'90% 0',
    toggleActions:'play reverse play reverse'
  }})
 
  
 
  const lines = [linePath, secondLine, lastLine];
  const circles = [firstCircle, secondCircle, thirdCircle];
  const texts = [firstText, secondText, thirdText];

// 선 그려지는 애니메이션
lines.forEach((line, index) => {
    const length = line.getTotalLength();
    gsap.set(line, {
        strokeDasharray: length,
        strokeDashoffset: length, // 처음에는 선이 그려지지 않도록 설정
    });
    animation.to(line, {
        strokeDashoffset: 0, // 선이 그려지게
        duration: 5,  // 선 그려지는 시간
        delay: index * 12, // 선들은 12초 간격으로 그려지도록 설정
        opacity: 1
    });
});
// 원 그려지는 애니메이션과 텍스트
circles.forEach((circle, index) => {
    const length = 2 * Math.PI * circle.getAttribute('r'); // 원의 둘레 계산
      gsap.set(circle, {
        strokeDasharray: length,
        strokeDashoffset: length, // 처음에는 원이 그려지지 않도록 설정
    });
    // 원 그려지는 애니메이션
    animation.to(circle, {
        strokeDashoffset: 0, // 원이 그려지게
        duration: 30,  // 원 그려지는 시간
        delay: (index * 12)+1, // 원들은 선 그려지고 2초 후에 그려지도록 설정
        opacity: 1
    });
    // 텍스트 나타나는 애니메이션
    animation.to(texts[index], {
        opacity: 1,     // 텍스트 나타나게
        y: 0,           // 원위치로
        duration: 30,  // 텍스트가 나타나는 시간
        delay: (index * 12) + 2, // 원과 동시에 텍스트가 나옵니다
    });
});
// 흰색 원과 텍스트가 나타나는 애니메이션
      animation.to(whiteCircle, {
          opacity: 1,
          duration: 10,
      });

      animation.to(whiteText, {
          opacity: 1,
          duration: 10,
          // 흰색 원이 나타난 후 텍스트가 나타나도록 설정
      })

// 마지막 선 그려지는 애니메이션
    .to(lastLine, {
        strokeDashoffset: 0, // 마지막 선 그려지기
        duration: 2,
        delay: 50, // 마지막 선은 모든 애니메이션이 끝난 후 그려지도록 설정
        opacity: 1
    })
  
  
    .to([svgWrap,aboutText,about],{
      y:-400,
      opacity:0,
      duration:30
    })

    animation.to(globalTitle,{
      x:107,
      opacity:1,
      duration:30
    })
    animation.to(globalSub,{
      x:163,
      opacity:1,  
      duration:30
    })
    animation.to(globalSecond,{
      x:163,
      opacity:1,
      duration:30
    })
    animation.to([globalTitle,globalSecond,globalSub],{
      y:-400,
      opacity:0,
      duration:30
    })
    animation.to(reponTitle,{
      x:107,
      opacity:1,
      duration:30
    })
    animation.to(reponSub,{
      x:163,
      opacity:1,
      duration:50
    })
    animation.to(reponSecond,{
      x:163,
      opacity:1,
      duration:50,
    })
    // animation.to(mapWrap,{
    //   opacity:1,
    //   duration:50,
    // })
  }
  



 