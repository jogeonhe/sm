document.addEventListener('DOMContentLoaded', () => {
  kpop();
});

function kpop() {
  const sm = document.querySelector('#sm');
  const popWrap = document.querySelector('#pop_wrap');
  const cultureWrap = document.querySelector('#culture');
  const contentWrap = document.querySelector('#content_wrap');
  const textWrap = document.querySelector('#kpop_text_wrap');
  /*backimg*/
  const bgWrap = document.querySelector('#circle');
  const circle = document.querySelector('#circle>img');
  /*about*/
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
  /*글로벌*/
  const globalTitle = document.querySelector('#global_header');
  const globalSub = document.querySelector('#global_sub');
  const globalSecond = document.querySelector('#global_second_sub');
  /*책임*/
  const reponTitle = document.querySelector('#responsible_header');
  const reponSub = document.querySelector('#responsible_sub');
  const reponSecond = document.querySelector('#responsible_second_sub');
  /*지도*/
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
  
  // 애니메이션 세부 설정
  gsap.to(popWrap, {
    y: -100,
    opacity: 0,
    duration: 10,
    scrollTrigger: {
      trigger: contentWrap,
      start: 'top top',
      end: '20% top',
      scrub: false,
      markers: true,
    }
  });
  gsap.to(cultureWrap, {
    y: -110,
    opacity: 1,
    duration: 10,
    scrollTrigger: {
      trigger: contentWrap,
      start: '20% top',
      end: '40% top',
      scrub: false,
      markers: true,
    }
  });

  // background 마스크 크기 변화
  gsap.to(bgWrap, {
    maskSize: "150% 150%",
    duration: 50,
    scrollTrigger: {
      trigger: contentWrap,
      start: '40% top',
      end: '60% top',
      scrub: false,
      markers: true,
    }
  });

  // 텍스트가 올라가는 애니메이션
  gsap.to(textWrap, {
    y: -400,
    opacity: 0,
    duration: 30,
    scrollTrigger: {
      trigger: contentWrap,
      start: '60% top',
      end: '80% top',
      scrub: false,
      markers: true,
    }
  });

  // about 애니메이션
  gsap.to(aboutWrap, {
    y: 0,
    duration: 30,
    scrollTrigger: {
      trigger: contentWrap,
      start: '80% top',
      end: '100% top',
      scrub: false,
      markers: true,
    }
  });

  gsap.to(about, {
    x: 100,
    opacity: 1,
    duration: 3,
    scrollTrigger: {
      trigger: aboutWrap,
      start: '90% 0',
      markers: true,
    }
  });
  gsap.to(aboutText, {
    x: -100,
    opacity: 1,
    duration: 3,
    scrollTrigger: {
      trigger: aboutWrap,
      start: '90% 0',
      markers: true,
    }
  });

  // 선 그려지는 애니메이션
  const lines = [linePath, secondLine, lastLine];
  lines.forEach((line, index) => {
    const length = line.getTotalLength();
    gsap.set(line, {
      strokeDasharray: length,
      strokeDashoffset: length, // 처음에는 선이 그려지지 않도록 설정
    });
    gsap.to(line, {
      strokeDashoffset: 0, // 선이 그려지게
      duration: 5,
      delay: index * 12, // 선들은 12초 간격으로 그려지도록 설정
      opacity: 1,
      scrollTrigger: {
        trigger: line,
        start: 'top bottom',
        end: 'top top',
        scrub: false,
        markers: true,
      }
    });
  });

  // 원 그려지는 애니메이션
  const circles = [firstCircle, secondCircle, thirdCircle];
  const texts = [firstText, secondText, thirdText];
  circles.forEach((circle, index) => {
    const length = 2 * Math.PI * circle.getAttribute('r'); // 원의 둘레 계산
    gsap.set(circle, {
      strokeDasharray: length,
      strokeDashoffset: length, // 처음에는 원이 그려지지 않도록 설정
    });
    gsap.to(circle, {
      strokeDashoffset: 0, // 원이 그려지게
      duration: 30,
      delay: (index * 12) + 1, // 원들은 선 그려지고 2초 후에 그려지도록 설정
      opacity: 1,
      scrollTrigger: {
        trigger: circle,
        start: 'top bottom',
        end: 'top top',
        scrub: false,
        markers: true,
      }
    });

    gsap.to(texts[index], {
      opacity: 1,
      y: 0,
      duration: 30,
      delay: (index * 12) + 2, // 원과 동시에 텍스트가 나옵니다
      scrollTrigger: {
        trigger: texts[index],
        start: 'top bottom',
        end: 'top top',
        scrub: false,
        markers: true,
      }
    });
  });
  
  // 이후의 애니메이션들에도 scrollTrigger를 각각 설정해 줍니다.
}
