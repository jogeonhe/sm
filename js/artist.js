document.addEventListener("DOMContentLoaded", () => {
  artistTitle();
  artistSlide();
  artistCover();
});

function artistTitle() {
  const contentsWrap = document.querySelector("#artist_title");
  const artistT = document.querySelector("#artist_title>p");

  gsap.to(artistT, {
    opacity: 1,
    duration: 1,
    fontSize: 160,
    ease: "power1.out",
    scrollTrigger: {
      trigger: contentsWrap,
      start: "top top",
      end: "bottom top",
      pin: true,
    },
  });
}

function artistSlide() {
  const contentsSlide = document.querySelector("#artist");
  let endX = contentsSlide.offsetWidth - document.documentElement.clientWidth;

  const artist = gsap.timeline({
    scrollTrigger: {
      trigger: "#artist_wrap",
      start: "top 0",
      end: `+=${endX}`, // endX에 추가적인 스크롤을 허용
      toggleActions: "play reverse play reverse",
      pin: true,
      scrub: 1, // 더 빠르게 스크롤과 애니메이션 동기화
    },
  });

  artist
    .to("#artist", {
      x: `-40%`,
      duration: 1,
      ease: "power1.out",
    })
    .to(
      ".artist_element_01",
      {
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      },
      0
    )
    .to(
      ".artist_element",
      {
        opacity: 0,
        duration: 0.5,
        ease: "power1.out",
      },
      0
    );
}

function artistCover() {
  const artistLi = document.querySelectorAll(".artist_ul>li");
  const cover = document.querySelectorAll(".artist_cover");
  const coverImg = document.querySelectorAll(".artist_cover>img");
  const sns = document.querySelectorAll(".artist_sns");

  artistLi.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
      //alert(index)
      active(index);
    });
    item.addEventListener("mouseleave", () => {
      //alert(index)
      reset(index);
    });
  });

  function active(index) {
    // 진행 중인 모든 애니메이션 즉시 완료
    gsap.killTweensOf(cover[index]);

    gsap.set(coverImg, { opacity: 1 });
    gsap.set(cover[index], { opacity: 1, display: "block" });
    gsap.to(cover[index], {
      opacity: 1,
      rotation: -10,
      duration: 0.3,
      ease: "power1.out",
    });
    gsap.set(sns[index], { display: "block" });
  }

  function reset(index) {
    gsap.killTweensOf(cover[index]);

    // 먼저 rotation만 원상태로
    gsap.set(sns[index], { display: "none" });
    gsap.to(cover[index], {
      rotation: 0,
      duration: 0.3,
      ease: "power1.out",
      onComplete: () => {
        // rotation이 끝난 후 opacity 처리
        gsap.to(cover[index], {
          opacity: 0,
          duration: 0.3,
          ease: "power1.out",
          onComplete: () => {
            gsap.set(cover[index], { display: "none" });
          },
        });
      },
    });
  }

  // const animation = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: contentWrap,
  //       start: 'top top',
  //       end: 'bottom bottom',
  //       markers:true

  //     }
  //   });
  //   animation.set()
}
