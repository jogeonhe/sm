document.addEventListener('DOMContentLoaded', () => {
    const dot = document.querySelectorAll('#auditiondots_list>li');
    const imgList = document.querySelector('#auditionimg_list');
    const imgLi = document.querySelectorAll('#auditionimg_list>li');
    const img = document.querySelectorAll('#auditionimg_list>li>a>img');
  
    let selectedDot = dot[0];
  
    let imgLength = imgLi.length;
    let imgListWidth = imgList.offsetWidth;
    let imgLiWidth = imgLi[0].offsetWidth;  // 첫 번째 이미지의 너비를 가져옵니다.
    
    let currentIndex = 0;  // 현재 이미지 인덱스를 0으로 초기화
  
    dot.forEach((item, index) => {
      item.addEventListener('mouseenter', () => {
        activatedDot(index);
        slideImg(index);
      });
    });
  
    // 점 활성화 함수
    function activatedDot(index) {
      if (selectedDot !== dot[index]) {
        selectedDot.classList.remove('selected');
        selectedDot = dot[index];
        selectedDot.classList.add('selected');
      }
    }
  
    // 이미지 슬라이드 함수
    function slideImg(index) {
      if (index === currentIndex) return;  // 이미 선택된 인덱스라면 슬라이드를 하지 않음
  
      gsap.to(imgList, {
        left: -imgLiWidth,  // 이미지 리스트를 왼쪽으로 이동
        duration: 0.5, 
        ease: 'power1.out',
        onComplete: () => {
          // 애니메이션 완료 후 첫 번째 이미지를 마지막으로 이동
          imgList.append(imgList.firstElementChild);
          
          // 현재 인덱스 업데이트
          currentIndex = (currentIndex + 1) % imgLength;  // 순환되는 인덱스
          activatedDot(currentIndex);  // 점 업데이트
        }
      });
    }
  });
  