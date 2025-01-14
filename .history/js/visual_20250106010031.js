document.addEventListener('DOMContentLoaded', () => {
    visualEffect();
});

function visualEffect() {
    const visualWrap = document.querySelector('#visual_wrap');
    const visualList = document.querySelector('#visual_list');
    const visualLi = document.querySelectorAll('#visual_list > li');
    const changeNum = document.querySelector('#change_num');
    const leftBtn = document.querySelector('#visual_left_btn');
    const rightBtn = document.querySelector('#visual_right_btn');

    let visualWidth = visualList.offsetWidth;
    let currentIndex = 0;
    let nextIndex = 1;
    let visualLength = visualLi.length;

    let isSlide = false;

    init();
    initEvent();

    function init() {
        gsap.set(visualLi, { left: visualWidth, opacity: 0 });
        gsap.set(visualLi[0], { left: 0, opacity: 1 });
        changeNum.innerHTML = currentIndex + 1; // 초기 값 설정
    }

    function initEvent() {
        leftBtn.addEventListener('click', slidePrev);
        rightBtn.addEventListener('click', slideNext);
    }

    function slidePrev() {
        nextIndex = currentIndex - 1;

        if (nextIndex < 0) {
            nextIndex = visualLength - 1; // 첫 번째로 돌아감
        }

        if (isSlide == false) {
            isSlide = true;
            changeNum.innerHTML = nextIndex + 1; // 변경된 번호로 업데이트

            gsap.to(visualLi[currentIndex], { left: visualWidth, opacity: 0, duration: 0.8, ease: 'power1.out' });
            gsap.set(visualLi[nextIndex], { left: -visualWidth, opacity: 0.5 });
            gsap.to(visualLi[nextIndex], { left: 0, opacity: 1, duration: 0.8, ease: 'power1.out', onComplete: () => {
                currentIndex = nextIndex; // currentIndex를 nextIndex로 업데이트
                isSlide = false;
            } });
        }
    }

    function slideNext() {
        nextIndex = currentIndex + 1;

        if (nextIndex >= visualLength) {
            nextIndex = 0; // 첫 번째로 돌아감
        }

        if (isSlide == false) {
            isSlide = true;
            changeNum.innerHTML = nextIndex + 1; // 변경된 번호로 업데이트

            gsap.set(visualLi[nextIndex], { left: visualWidth, opacity: 0 });
            gsap.to(visualLi[currentIndex], { left: -visualWidth, opacity: 0, duration: 0.8, ease: 'power1.out' });
            gsap.to(visualLi[nextIndex], { left: 0, opacity: 1, duration: 0.8, ease: 'power1.out', onComplete: () => {
                currentIndex = nextIndex; // currentIndex를 nextIndex로 업데이트
                isSlide = false;
            } });
        }
    }
    function startAutoSlide() {
        setInterval(() => {
            slideNext(); // 슬라이드를 자동으로 전환
        }, 3000); // 3초마다 슬라이드 전환
    }
}
