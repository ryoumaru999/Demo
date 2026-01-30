const track = document.querySelector('.track');
const cards = document.querySelectorAll('.card');

/* ===============================
   Focus active card
================================ */
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

track.addEventListener('scroll', () => {
  requestAnimationFrame(setActiveCard);
});

/* ===============================
   Click to center
================================ */
cards.forEach(card => {
  card.addEventListener('click', () => {
    track.scrollTo({
      left:
        card.offsetLeft -
        track.offsetWidth / 2 +
        card.offsetWidth / 2,
      behavior: 'smooth'
    });
  });
});

/* ===============================
   Pointer Drag (Mouse + Touch)
================================ */
let isDragging = false;
let startX = 0;
let startScroll = 0;

track.addEventListener('pointerdown', (e) => {
  isDragging = true;
  track.setPointerCapture(e.pointerId);
  startX = e.clientX;
  startScroll = track.scrollLeft;
  track.classList.add('dragging');
});

track.addEventListener('pointermove', (e) => {
  if (!isDragging) return;
  const dx = e.clientX - startX;
  track.scrollLeft = startScroll - dx;
});

track.addEventListener('pointerup', () => {
  isDragging = false;
  track.classList.remove('dragging');
});

track.addEventListener('pointercancel', () => {
  isDragging = false;
  track.classList.remove('dragging');
});

/* ===============================
   Init
================================ */
setActiveCard();
