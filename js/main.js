document.addEventListener("DOMContentLoaded", () => {
  kpop();
});

function kpop() {
  const sm = document.querySelector("#sm");
  const popWrap = document.querySelector("#pop_wrap");
  const cultureWrap = document.querySelector("#culture");
  const contentWrap = document.querySelector("#content_wrap");
  const textWrap = document.querySelector("#kpop_text_wrap");
  /*backimg*/
  const bgWrap = document.querySelector("#circle");
  const circle = document.querySelector("#circle>img");
  /*about*/
  const aboutWrap = document.querySelector("#about_wrap");
  const about = document.querySelector("#about_title");
  const aboutText = document.querySelector("#about_text");

  const linePath = document.querySelector("#line_svg path");
  const firstCircle = document.querySelector("#fisrt_circle circle");
  const secondCircle = document.querySelector("#second_circle circle");
  const thirdCircle = document.querySelector("#third_circle circle");
  const whiteCircle = document.querySelector("#white_circle circle");
  const firstText = document.querySelector("#first_text");
  const secondText = document.querySelector("#second_text");
  const thirdText = document.querySelector("#third_text");
  const whiteText = document.querySelector("#white_text");
  const secondLine = document.querySelector("#second_line path");
  const lastLine = document.querySelector("#last_line path");
  const svgWrap = document.querySelector("#svg_wrap");
  /*글로벌*/
  const globalTitle = document.querySelector("#global_header");
  const globalSub = document.querySelector("#global_sub");
  const globalSecond = document.querySelector("#global_second_sub");
  /*책임*/
  const reponTitle = document.querySelector("#responsible_header");
  const reponSub = document.querySelector("#responsible_sub");
  const reponSecond = document.querySelector("#responsible_second_sub");
  /*지도*/
  const mapWrap = document.querySelector("#map_wrap");
  const mapTitle = document.querySelector("#map_header");
  const mapSub = document.querySelector("#map_title_second");
  const subTitle = document.querySelector("#map_subtitle_wrap");
  const firstCircleFront = document.querySelector("#first_circle_front");
  const firstCircleBack = document.querySelector("#first_circle_back");
  const secondCircleFront = document.querySelector("#second_circle_front");
  const secondCircleBack = document.querySelector("#second_circle_back");
  const thirdCircleFront = document.querySelector("#third_circle_front");
  const thridCircleBack = document.querySelector("#third_circle_back");
  const lastCircleFront = document.querySelector("#last_circle_front");
  const lastCircleBack = document.querySelector("#last_circle_back");
  const midCircle = document.querySelector("#mid_circle_front");
  const firstMapLine = document.querySelector("#first_map_line");
  const secondMapLine = document.querySelector("#second_map_line");
  const thirdMapLine = document.querySelector("#third_map_line");
  const lastMapLine = document.querySelector("#last_map_line");

  // SVG 원과 라인의 길이 가져오기
  const firstCircleLength = firstCircle.getTotalLength();
  const secondCircleLength = secondCircle.getTotalLength();
  const thirdCircleLength = thirdCircle.getTotalLength();
  const whiteCircleLength = whiteCircle.getTotalLength();

  const linePathLength = linePath.getTotalLength();
  const secondLineLength = secondLine.getTotalLength();
  const lastLineLength = lastLine.getTotalLength();

  window.scrollTo({
    top: 500, // 원하는 위치
    behavior: "smooth", // 부드럽게 스크롤
  });

  // GSAP timeline 생성
  const animation = gsap.timeline({
    scrollTrigger: {
      trigger: contentWrap,
      start: "top top",
      end: "600% 0",
      scrub: 6,
      pin: true,
      pinSpacing: true,
      markers: true,
    },
  });

  // 애니메이션 설정
  animation
    .to(popWrap, {
      y: -100,
      opacity: 0,
      duration: 3,
    })
    .to(cultureWrap, {
      y: -110,
      opacity: 1,
      duration: 6,
    })
    .to(bgWrap, {
      maskSize: "150% 150%",
      duration: 10,
    })

    .to(textWrap, {
      y: -400,
      opacity: 0,
      duration: 6,
    })

    .to(about, {
      x: 100,
      opacity: 1,
      duration: 6,
    })
    .to(aboutText, {
      x: -100,
      opacity: 1,
      duration: 6,
    });
  const lines = [linePath, secondLine, lastLine];
  lines.forEach((line, index) => {
    const length = line.getTotalLength();
    gsap.set(line, {
      strokeDasharray: length,
      strokeDashoffset: length, // 처음에는 선이 그려지지 않도록 설정
    });
    animation.to(line, {
      strokeDashoffset: 0, // 선이 그려지게
      duration: 3, // 선 그려지는 시간
      // delay: index * 0.5, // 순차적으로 그려지도록
      opacity: 1,
    });
  });

  // 원 그려지는 애니메이션
  const circles = [firstCircle, secondCircle, thirdCircle, whiteCircle];
  circles.forEach((circle, index) => {
    const length = 2 * Math.PI * circle.getAttribute("r"); // 원의 둘레 계산
    gsap.set(circle, {
      strokeDasharray: length,
      strokeDashoffset: length, // 처음에는 원이 그려지지 않도록 설정
    });
    animation.to(circle, {
      strokeDashoffset: 0, // 원이 그려지게
      duration: 5, // 원 그려지는 시간
      delay: index * 0.5,
      opacity: 1,
    });
  });

  // 텍스트 애니메이션 (원, 선 뒤에 텍스트가 나타나게)
  const texts = [firstText, secondText, thirdText, whiteText];
  texts.forEach((text, index) => {
    animation.to(text, {
      opacity: 1, // 텍스트 나타나게
      y: 0, // 원위치로
      duration: 3,
      // delay: index * 0.5, // 텍스트 순차적으로 나타나도록
    });
  });
  // 텍스트 이동 애니메이션
  animation
    .to(textWrap, {
      y: -400, // 텍스트를 위로 이동
      opacity: 0, // 텍스트 투명도 0으로 설정
      duration: 3,
    })

    // About 타이틀과 텍스트 애니메이션

    .to([svgWrap, aboutText, about], {
      y: -400,
      opacity: 0,
      duration: 6,
    })

    .to(globalTitle, {
      x: 107,
      opacity: 1,
      duration: 6,
    })
    .to(globalSub, {
      x: 163,
      opacity: 1,
      duration: 6,
    })
    .to(globalSecond, {
      x: 163,
      opacity: 1,
      duration: 6,
    })
    .to([globalTitle, globalSecond, globalSub], {
      y: -400,
      opacity: 0,
      duration: 6,
    })
    .to(reponTitle, {
      x: 107,
      opacity: 1,
      duration: 6,
    })
    .to(reponSub, {
      x: 163,
      opacity: 1,
      duration: 6,
    })
    .to(reponSecond, {
      x: 163,
      opacity: 1,
      duration: 6,
    })

    .to(mapWrap, {
      y: 0, // mapWrap을 위로 이동 (위치 조정)
      duration: 1, // 애니메이션 지속 시간
      opacity: 1,
      zIndex: 10, // zIndex 조정하여 앞쪽으로 이동
    });
  const timeline1 = gsap.timeline({
    scrollTrigger: {
      trigger: mapWrap,
      start: "top top",
      end: "300% 0",
      pin: true,
      pinSpacing: true,
    },
  });
  timeline1
    .to(mapTitle, {
      x: 151,
      opacity: 0.3,
      duration: 1,
    })
    .to(
      subTitle,
      {
        x: 195,
        opacity: 1,
        duration: 1,
      },
      "<0.5"
    )
    .to(
      mapSub,
      {
        x: -147,
        opacity: 1,
        duration: 1,
      },
      "<0.7"
    )
    .to(
      [
        firstCircleFront,
        secondCircleFront,
        thirdCircleFront,
        lastCircleFront,
        midCircle,
      ],
      {
        opacity: 1,
        duration: 1,
      }
    );
  // SVG 경로 요소들 선택
  const firstMapLinePath = document.querySelector("#first_map_line svg path");
  const secondMapLinePath = document.querySelector("#second_map_line svg path");
  const thirdMapLinePath = document.querySelector("#third_map_line svg path");
  const lastMapLinePath = document.querySelector("#last_map_line svg path");

  gsap.set(
    [firstMapLinePath, secondMapLinePath, thirdMapLinePath, lastMapLinePath],
    {
      strokeDasharray: (index, target) => target.getTotalLength(),
      strokeDashoffset: (index, target) => target.getTotalLength(),
      stroke: "#FF90B3",
      strokeWidth: 2,
      opacity: 0,
    }
  );

  timeline1
    .to(
      [firstMapLinePath, secondMapLinePath, thirdMapLinePath, lastMapLinePath],
      {
        strokeDashoffset: 0,
        duration: 0.7,
        opacity: 1,
        stagger: 0,
      }
    )
    .to([firstCircleBack, secondCircleBack, thridCircleBack, lastCircleBack], {
      opacity: 0.4,
      duration: 0.7,
      repeat: -1,
      yoyo: true,
      ease: "power1.out",
      repeatDelay: 0.3,
    });
}

//스크럽해결해야함
//맵부분은 다함
