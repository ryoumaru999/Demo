const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');

function updateActiveCard() {
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

  cards.forEach(c => c.classList.remove('active'));
  if (closest) closest.classList.add('active');
}

carousel.addEventListener('scroll', () => {
  clearTimeout(carousel._t);
  carousel._t = setTimeout(updateActiveCard, 80);
});

updateActiveCard();
