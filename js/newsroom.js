document.addEventListener('DOMContentLoaded', () => {
  const newsCardList = document.querySelector('#newscard_list');
  const newsCard = document.querySelectorAll('#newscard_list>li');
  const leftBtn = document.querySelector('.news_leftbtn');
  const rightBtn = document.querySelector('.news_rightbtn');

  const newsTitleList = document.querySelector('#newstitle_list');
  const newsTitle = document.querySelectorAll('#newstitle_list>li');

  let selectedCard = newsCard[0];
  let cardNum = 0;
  let cardLength = newsCard.length;

  let selectedTitle = newsTitle[0];
  let isSlide=false;

  rightBtn.addEventListener('click', selectNextCard);
  leftBtn.addEventListener('click', selectPrevCard);

  function selectNextCard() {
    if(isSlide==false){
      isSlide=true;
      gsap.to(newsCardList, {
        left: -newsCard[0].offsetWidth,
        duration: 0.3,
        ease: 'power1.out',
        onComplete: () => {
          newsCardList.append(newsCardList.firstElementChild);
          gsap.set(newsCardList, { left: 0 });
          newsCardList.firstElementChild.classList.add('selected');
          newsCardList.lastElementChild.classList.remove('selected');
          isSlide=false;
        }
      });
      cardNum++;
      if (cardNum > cardLength - 1) {
        cardNum = 0;
      }
      changeSelectTitle(cardNum);
      
    }
  }
  function selectPrevCard() {
    if(isSlide==false){
      isSlide=true;
      newsCardList.children[0].classList.remove('selected');
      gsap.to(newsCardList, {
        left: newsCard[0].offsetWidth,
        duration: 0.3,
        delay:0.3,
        ease: 'power1.out',
        onComplete: () => {
          newsCardList.prepend(newsCardList.lastElementChild);
          gsap.set(newsCardList, { left: 0 });
          newsCardList.firstElementChild.classList.add('selected');
          isSlide=false;
        }
      });
      cardNum--;
      if (cardNum < 0) {
        cardNum = cardLength - 1;
      }
      changeSelectTitle(cardNum);
    }
  }

  newsTitle.forEach((item, index) => {
    changeSelect(index);
  });

  function changeSelectTitle(cardNum) {
    if (selectedTitle != newsTitle[cardNum]) {
      selectedTitle.classList.remove('selected');
      selectedTitle = newsTitle[cardNum];
      newsTitle[cardNum].classList.add('selected');
    }
  }
});
