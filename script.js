const track = document.querySelector('.track');
const cards = document.querySelectorAll('.card');

function setActiveCard(){
  const center =
    track.scrollLeft + track.offsetWidth / 2;

  cards.forEach(card => {
    const cardCenter =
      card.offsetLeft + card.offsetWidth / 2;

    const isActive =
      Math.abs(center - cardCenter) < card.offsetWidth / 2;

    card.classList.toggle('active', isActive);
  });
}

// เลื่อน = โฟกัสอัตโนมัติ
track.addEventListener('scroll', () => {
  requestAnimationFrame(setActiveCard);
});

// คลิก = เลื่อนไปกลาง
cards.forEach(card => {
  card.addEventListener('click', () => {
    track.scrollTo({
      left:
        card.offsetLeft -
        track.offsetWidth / 2 +
        card.offsetWidth / 2,
      behavior:'smooth'
    });
  });
});

// initial
setActiveCard();
