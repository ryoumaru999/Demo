const track = document.querySelector('.track');
const cards = document.querySelectorAll('.card');

/* =====================
   คลิก → ไปหน้า product
===================== */
cards.forEach(card => {
  card.addEventListener('click', () => {
    const model = card.dataset.model;
    if (model) {
      window.location.href = `product.html?model=${model}`;
    }
  });
});

/* =====================
   หา card ตรงกลาง
===================== */
function updateActiveCard() {
  const center = window.innerWidth / 2;

  let closestCard = null;
  let closestDistance = Infinity;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;
    const distance = Math.abs(center - cardCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestCard = card;
    }

    // เอฟเฟกต์ระหว่างเลื่อน
    const scale = Math.max(0.85, 1 - distance / 800);
    const blur = Math.min(3, distance / 120);

    card.style.transform = `scale(${scale})`;
    card.style.filter = `blur(${blur}px)`;
    card.style.opacity = scale;
  });

  cards.forEach(c => c.classList.remove('active'));
  if (closestCard) {
    closestCard.classList.add('active');
  }
}

/* =====================
   เรียกตอน scroll
===================== */
let scrollTimeout;
track.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(updateActiveCard, 80);
});

/* เรียกครั้งแรก */
updateActiveCard();
