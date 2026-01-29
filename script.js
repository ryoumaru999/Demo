const track = document.querySelector('.track');
const cards = document.querySelectorAll('.card');

/* click ต้องทำงาน */
cards.forEach(card => {
  card.addEventListener('click', () => {
    alert(card.dataset.model);
  });
});

/* focus card กลาง */
function updateActive() {
  const center = window.innerWidth / 2;
  let closest = null;
  let min = Infinity;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const dist = Math.abs(center - (rect.left + rect.width / 2));
    if (dist < min) {
      min = dist;
      closest = card;
    }
  });

  cards.forEach(c => c.classList.remove('is-active'));
  if (closest) closest.classList.add('is-active');
}

track.addEventListener('scroll', updateActive);
updateActive();
