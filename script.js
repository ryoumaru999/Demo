const track = document.querySelector('.track');
const cards = document.querySelectorAll('.card');

/* Focus on center */
function setActiveCard(){
  const center = track.scrollLeft + track.offsetWidth / 2;
  cards.forEach(card => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    card.classList.toggle(
      'active',
      Math.abs(center - cardCenter) < card.offsetWidth/2
    );
  });
}
track.addEventListener('scroll', () => {
  requestAnimationFrame(setActiveCard);
});

/* Wheel support for desktop */
track.addEventListener('wheel', (e) => {
  e.preventDefault();
  track.scrollLeft += e.deltaY;
}, {passive:false});

/* Mouse drag support */
let isDown = false, startX, scrollLeft;
track.addEventListener('pointerdown', (e) => {
  isDown = true;
  startX = e.clientX;
  scrollLeft = track.scrollLeft;
  track.classList.add('dragging');
});
track.addEventListener('pointermove', (e) => {
  if (!isDown) return;
  track.scrollLeft = scrollLeft - (e.clientX - startX);
});
track.addEventListener('pointerup', () => { isDown=false; track.classList.remove('dragging'); });
track.addEventListener('pointerleave', () => { isDown=false; track.classList.remove('dragging'); });

/* click to center */
cards.forEach(card => {
  card.addEventListener('click', () => {
    track.scrollTo({
      left: card.offsetLeft - track.offsetWidth/2 + card.offsetWidth/2,
      behavior:'smooth'
    });
  });
});

/* init */
setActiveCard();
