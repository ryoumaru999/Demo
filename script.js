const track = document.querySelector('.track');
const cards = document.querySelectorAll('.card');

let scrollTimeout;

/* หา card ที่อยู่กลางจอ */
function getCenterCard() {
  const center = window.innerWidth / 2;
  let closest = null;
  let minDistance = Infinity;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;
    const distance = Math.abs(center - cardCenter);

    if (distance < minDistance) {
      minDistance = distance;
      closest = card;
    }
  });

  return closest;
}

/* ตั้ง active */
function setActiveCard(card) {
  if (!card) return;
  cards.forEach(c => c.classList.remove('is-active'));
if (closestCard) {
  closestCard.classList.add('is-active');
}
}
 function setActiveNav(filter) {
  navLinks.forEach(link => {
    link.classList.toggle(
      'active',
      link.dataset.filter === filter
    );
  });
}

/* click เข้า product */
cards.forEach(card => {
  card.addEventListener('click', () => {
    const model = card.dataset.model;
    if (model) {
      window.location.href = `product.html?model=${model}`;
    }
  });
});

let isScrolling;
let rafId = null;

track.addEventListener('scroll', () => {
  // ระหว่างเลื่อน: ยกเลิก snap
  if (rafId) cancelAnimationFrame(rafId);

  // แค่ดูว่ากลางคือใคร (ไม่ใส่ active)
  rafId = requestAnimationFrame(() => {
    previewCenterCard();
  });

  // หลังหยุดเลื่อน
  clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {
    snapToCenter();
  }, 120); // 👈 จุดสำคัญ
});
/* โหลดครั้งแรก */
setActiveCard(getCenterCard());

