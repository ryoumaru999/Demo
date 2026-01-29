const track = document.querySelector('.track');
const cards = document.querySelectorAll('.card');

function getCenterCard() {
  const trackRect = track.getBoundingClientRect();
  const trackCenter = trackRect.left + trackRect.width / 2;

  let closestCard = null;
  let closestDistance = Infinity;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;
    const distance = Math.abs(trackCenter - cardCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestCard = card;
    }
  });

  return closestCard;
}

function setActiveCard(card) {
  cards.forEach(c => c.classList.remove('active'));
  if (card) card.classList.add('active');
}

// ✅ ตอนเลื่อน (สำคัญ)
let scrollTimeout;
track.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    setActiveCard(getCenterCard());
  }, 80);
});

// ✅ ตอนโหลดหน้า → โฟกัสใบแรก
window.addEventListener('load', () => {
  setActiveCard(getCenterCard());
});

// ✅ คลิก = เลือกทันที + ไปหน้า product
cards.forEach(card => {
  card.addEventListener('click', () => {
    setActiveCard(card);
    const model = card.dataset.model;
    if (model) {
      window.location.href = `product.html?model=${model}`;
    }
  });
});
