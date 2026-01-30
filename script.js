const track = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');

let timer;

function focusCenterCard() {
  const center = window.innerWidth / 2;
  let closest = null;
  let minDist = Infinity;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;
    const dist = Math.abs(center - cardCenter);

    if (dist < minDist) {
      minDist = dist;
      closest = card;
    }
  });

  cards.forEach(c => c.classList.remove('active'));
  if (closest) closest.classList.add('active');
}

track.addEventListener('scroll', () => {
  clearTimeout(timer);
  timer = setTimeout(focusCenterCard, 80);
});

// initial
focusCenterCard();
