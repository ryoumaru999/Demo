const track = document.querySelector('.track');
const cards = document.querySelectorAll('.card');

/* ===== Focus card ===== */
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

/* ===== Click to center ===== */
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

/* ===== Mouse drag support ===== */
let isDown = false;
let startX;
let scrollLeft;

track.addEventListener('mousedown', (e) => {
  isDown = true;
  track.classList.add('dragging');
  startX = e.pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
});

track.addEventListener('mouseleave', () => {
  isDown = false;
});

track.addEventListener('mouseup', () => {
  isDown = false;
});

track.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();

  const x = e.pageX - track.offsetLeft;
  const walk = (x - startX) * 1.5; // ความเร็วลาก
  track.scrollLeft = scrollLeft - walk;
});

/* ===== initial ===== */
setActiveCard();
