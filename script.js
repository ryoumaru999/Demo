const track = document.querySelector('.track');
const cards = document.querySelectorAll('.card');

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

    // smooth blur/scale ตามระยะ (สมูทมาก)
    const scale = Math.max(0.85, 1 - distance / 800);
    const blur = Math.min(3, distance / 120);

    card.style.transform = `scale(${scale})`;
    card.style.filter = `blur(${blur}px)`;
    card.style.opacity = scale;
  });

  cards.forEach(c => c.classList.remove('active'));
  if (closestCard) closestCard.classList.add('active');
}

/* สมูทแบบ real-time */
track.addEventListener('scroll', () => {
  requestAnimationFrame(updateActiveCard);
});

/* คลิกไป product */
cards.forEach(card => {
  card.addEventListener('click', () => {
    const model = card.dataset.model;
    window.location.href = `product.html?model=${model}`;
  });
});

/* เริ่มต้น */
updateActiveCard();
cards[0].scrollTimeout = setTimeout(() => {
  setActiveCard(getCenterCard());
}, 0);
