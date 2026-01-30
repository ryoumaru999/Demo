const track = document.querySelector('.carousel');
const cards = [...document.querySelectorAll('.card')];

function updateActiveCard() {
  const center = track.scrollLeft + track.offsetWidth / 2;

  let closestCard = null;
  let closestDistance = Infinity;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardCenter =
      rect.left + rect.width / 2 + track.scrollLeft;

    const distance = Math.abs(center - cardCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestCard = card;
    }
  });

  cards.forEach(c => c.classList.remove('active'));
  if (closestCard) closestCard.classList.add('active');
}

let scrollTimeout;
track.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(updateActiveCard, 80);
});

// เรียกครั้งแรก
updateActiveCard();
