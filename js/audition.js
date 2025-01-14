document.addEventListener('DOMContentLoaded',()=>{
  auditionEvent()
})

function auditionEvent(){
  const swiper = new Swiper('.auditionSwiper', {
    watchSlidesProgress: true,
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    loop: true,
    spaceBetween: 69,
    pagination: {
      el: '.custom-pagination',
      clickable: true
    }
  });
}