const track = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');

function updateActiveCard() {
  const center = window.innerWidth / 2;
  let closest = null;
  let min = Infinity;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;
    const dist = Math.abs(center - cardCenter);

    if (dist < min) {
      min = dist;
      closest = card;
    }
  });

  cards.forEach(c => c.classList.remove('active'));
  if (closest) closest.classList.add('active');
}

let scrollTimeout;
track.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(updateActiveCard, 80);
});

updateActiveCard();

/* click */
cards.forEach(card => {
  card.addEventListener('click', () => {
    alert(card.dataset.model);
  });
});
