const track = document.querySelector('.track');
const cards = document.querySelectorAll('.card');

let scrollTimeout = null;

// หา card ที่อยู่กลางจอ
function getCenterCard() {
  const trackRect = track.getBoundingClientRect();
  const centerX = trackRect.left + trackRect.width / 2;

  let closest = null;
  let minDistance = Infinity;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;
    const distance = Math.abs(centerX - cardCenter);

    if (distance < minDistance) {
      minDistance = distance;
      closest = card;
    }
  });

  return closest;
}

// ตั้ง active
function setActiveCard(card) {
  cards.forEach(c => c.classList.remove('active'));
  card.classList.add('active');

  card.scrollIntoView({
    behavior: 'smooth',
    inline: 'center',
    block: 'nearest'
  });
}

// scroll แล้วค่อย focus
track.addEventListener('scroll', () => {
  if (scrollTimeout) clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(() => {
    const centerCard = getCenterCard();
    if (centerCard) setActiveCard(centerCard);
  }, 120);
});

// คลิก = focus + เด้งหน้า
cards.forEach(card => {
  card.addEventListener('click', () => {
    setActiveCard(card);

    const model = card.dataset.model;
    setTimeout(() => {
      window.location.href = `product.html?model=${model}`;
    }, 200);
  });
});
