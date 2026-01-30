const track = document.querySelector('.track');
const cards = document.querySelectorAll('.card');
const prevBtn = document.querySelector('.nav.prev');
const nextBtn = document.querySelector('.nav.next');

const GAP = 24; // ต้องตรงกับ gap ใน CSS

/* ===== ฟังก์ชันโฟกัสการ์ดกลาง ===== */
function updateActiveCard() {
  const trackCenter = track.scrollLeft + track.offsetWidth / 2;

  cards.forEach(card => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const isActive = Math.abs(trackCenter - cardCenter) < card.offsetWidth / 2;
    card.classList.toggle('active', isActive);
  });
}

/* ===== เลื่อนด้วยปุ่ม ===== */
function slide(direction) {
  const cardWidth = cards[0].offsetWidth + GAP;
  track.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });
}

/* ===== event ===== */
prevBtn.addEventListener('click', () => slide(-1));
nextBtn.addEventListener('click', () => slide(1));
track.addEventListener('scroll', () => {
  requestAnimationFrame(updateActiveCard);
});

/* ===== init ===== */
window.addEventListener('load', () => {
  updateActiveCard();
});
