const track = document.querySelector('.track');
const cards = document.querySelectorAll('.card');

/* คลิกเข้า product */
cards.forEach(card => {
  card.addEventListener('click', () => {
    const model = card.dataset.model;
    if (model) {
      window.location.href = `product.html?model=${model}`;
    }
  });
});

/* หา card ตรงกลาง */
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
  });

  cards.forEach(c => c.classList.remove('active'));
  if (closestCard) closestCard.classList.add('active');
}

/* ตอนเลื่อน */
let scrollTimeout;
track.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(updateActiveCard, 80);
});

updateActiveCard();
