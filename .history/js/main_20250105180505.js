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
  const aboutWrap = document.querySelector('#about_wrap');
  const about = document.querySelector('#about_title');
  const aboutText = document.querySelector('#about_text');
  const linePath = document.querySelector('#line_svg path');
  const secondLine = document.querySelector('#second_line path');
  const lastLine = document.querySelector('#last_line path');
  const svgWrap = document.querySelector('#svg_wrap');
  const globalTitle = document.querySelector('#global_header');
  const globalSub = document.querySelector('#global_sub');
  const globalSecond = document.querySelector('#global_second_sub');
  const reponTitle = document.querySelector('#responsible_header');
  const reponSub = document.querySelector('#responsible_sub');
  const reponSecond = document.querySelector('#responsible_second_sub');

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

  // 애니메이션 설정
  animation
    .to(popWrap, {
      y: 0,
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
      duration: 30,
    })
    .to(aboutWrap, {
      y: 0,
      // duration: 30,
      // delay: 5,  // 5`초 후에 aboutWrap 애니메이션 실행
      opacity:1
    })
    .to(about, {
      x: 100,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: aboutWrap,
        start: '80% 0',
        end: '900% 0',
        toggleActions: 'play reverse play reverse',
        onEnter: () => {
          gsap.to(about, { opacity: 1 });
        },
        onLeave: () => {
          gsap.to(about, { opacity: 0 });
        },
        onEnterBack: () => {
          gsap.to(about, { opacity: 1 });
        },
        onLeaveBack: () => {
          gsap.to(about, { opacity: 0 });
        }
      }
    })
    .to(aboutText, {
      x: -100,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: aboutWrap,
        start: '80% 0',
        end: '900% 0',
        toggleActions: 'play reverse play reverse',
        onEnter: () => {
          gsap.to(aboutText, { opacity: 1 });
        },
        onLeave: () => {
          gsap.to(aboutText, { opacity: 0 });
        },
        onEnterBack: () => {
          gsap.to(aboutText, { opacity: 1 });
        },
        onLeaveBack: () => {
          gsap.to(aboutText, { opacity: 0 });
        }
      }
    })
    .to([svgWrap, aboutText, about], {
      y: -400,
      opacity: 0,
      duration: 30,
    })
    .to(globalTitle, {
      x: 107,
      opacity: 1,
      duration: 30,
    })
    .to(globalSub, {
      x: 163,
      opacity: 1,
      duration: 30,
    })
    .to(globalSecond, {
      x: 163,
      opacity: 1,
      duration: 30,
    })
    .to([globalTitle, globalSecond, globalSub], {
      y: -400,
      opacity: 0,
      duration: 30,
    })
    .to(reponTitle, {
      x: 107,
      opacity: 1,
      duration: 30,
    })
    .to(reponSub, {
      x: 163,
      opacity: 1,
      duration: 50,
    })
    .to(reponSecond, {
      x: 163,
      opacity: 1,
      duration: 50,
    });
}
