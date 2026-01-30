const track = document.querySelector('.track');
const cards = document.querySelectorAll('.card');

/* focus card กลาง */
function setActiveCard(){
  const center = track.scrollLeft + track.offsetWidth / 2;

  cards.forEach(card => {
    const cardCenter =
      card.offsetLeft + card.offsetWidth / 2;

    card.classList.toggle(
      'active',
      Math.abs(center - cardCenter) < card.offsetWidth / 2
    );
  });
}

/* scroll = update focus */
track.addEventListener('scroll', () => {
  requestAnimationFrame(setActiveCard);
});

/* 🖱️ DESKTOP FIX: ล้อเมาส์ = เลื่อนแนวนอน */
track.addEventListener('wheel', (e) => {
  e.preventDefault();
  track.scrollLeft += e.deltaY;
}, { passive:false });

/* init */
setActiveCard();
