const carousel = document.querySelector('.carousel');
const cards = [...document.querySelectorAll('.card')];

let scrollTimer = null;

function focusCenterCard() {
  const center = carousel.scrollLeft + carousel.offsetWidth / 2;

  let closest = null;
  let minDistance = Infinity;

  cards.forEach(card => {
    const cardCenter =
      card.offsetLeft + card.offsetWidth / 2;

    const distance = Math.abs(center - cardCenter);

    if (distance < minDistance) {
      minDistance = distance;
      closest = card;
    }
  });

  cards.forEach(c => c.classList.remove('active'));
  if (closest) closest.classList.add('active');
}

carousel.addEventListener('scroll', () => {
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(focusCenterCard, 120);
});

// เรียกครั้งแรก
focusCenterCard();
