const track = document.querySelector('.track');
const cards = document.querySelectorAll('.card');

function setActive(card) {
  cards.forEach(c => c.classList.remove('active'));
  card.classList.add('active');
}

function getCenterCard() {
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

  return closest;
}

// scroll → auto focus
let timer;
track.addEventListener('scroll', () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    const card = getCenterCard();
    if (card) setActive(card);
  }, 120);
});

// click → focus + go product
cards.forEach(card => {
  card.addEventListener('click', () => {
    setActive(card);
    const model = card.dataset.model;
    window.location.href = `product.html?model=${model}`;
  });
});
