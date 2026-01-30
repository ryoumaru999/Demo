const cards = document.querySelectorAll('.card');
const track = document.querySelector('.carousel');

function updateActive() {
  const center = window.innerWidth / 2;

  let closest = null;
  let closestDist = Infinity;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;
    const dist = Math.abs(center - cardCenter);

    if (dist < closestDist) {
      closestDist = dist;
      closest = card;
    }
  });

  cards.forEach(c => c.classList.remove('active'));
  if (closest) closest.classList.add('active');
}

track.addEventListener('scroll', () => {
  window.requestAnimationFrame(updateActive);
});

updateActive();

/* กดการ์ดได้จริง */
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.scrollIntoView({
      behavior: 'smooth',
      inline: 'center'
    });
  });
});
