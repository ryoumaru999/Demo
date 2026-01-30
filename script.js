const track = document.querySelector('.track');
const cards = document.querySelectorAll('.card');

let scrollTimeout;

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

function setActiveCard(card) {
  cards.forEach(c => c.classList.remove('active'));
  card.classList.add('active');

  // scroll ให้การ์ดเด้งเข้ากลาง (สมูท)
  card.scrollIntoView({
    behavior: 'smooth',
    inline: 'center',
    block: 'nearest'
  });
}

track.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    const centerCard = getCenterCard();
    if (centerCard) setActiveCard(centerCard);
  }, 120); // 👈 delay สำคัญมาก
});
