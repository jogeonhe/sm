window.addEventListener('load', () => {
  const contents = document.querySelectorAll('.contents');
  let currentIndex = 0;
  let isScrolling = false;

  // ScrollTrigger 새로고침
  function refreshScrollTrigger() {
      ScrollTrigger.refresh();
  }

  // 초기 상태 설정
  contents.forEach((section, index) => {
      if (index !== 0) {
          section.style.transform = `translateY(100vh)`;
      }
      // 각 섹션에 z-index 설정
      section.style.zIndex = contents.length - index;
  });

  // body와 pinspacer 숨기기
  document.body.style.overflow = 'hidden';
  const pinSpacers = document.querySelectorAll('.pin-spacer');
  pinSpacers.forEach(spacer => {
      spacer.style.display = 'none';
  });

  // 휠 이벤트 핸들러
  window.addEventListener('wheel', (e) => {
      e.preventDefault();
      
      if (isScrolling) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextIndex = currentIndex + direction;

      if (nextIndex >= 0 && nextIndex < contents.length) {
          isScrolling = true;
          currentIndex = nextIndex;

          // 모든 섹션의 위치 업데이트
          contents.forEach((section, index) => {
              section.style.transition = 'transform 1s ease';
              const offset = index - currentIndex;
              section.style.transform = `translateY(${offset * 100}vh)`;
          });

          // ScrollTrigger 업데이트
          setTimeout(() => {
              isScrolling = false;
              refreshScrollTrigger();
          }, 1000);
      }
  }, { passive: false });
});