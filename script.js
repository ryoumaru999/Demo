const track = document.querySelector('.track');
const cards = document.querySelectorAll('.card');

function updateActiveCard() {
  const trackRect = track.getBoundingClientRect();
  const trackCenter = trackRect.left + trackRect.width / 2;

  let closestCard = null;
  let closestDistance = Infinity;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;
    const distance = Math.abs(trackCenter - cardCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestCard = card;
    }
  });

  cards.forEach(c => c.classList.remove('active'));
  if (closestCard) closestCard.classList.add('active');
}

// ตอนเลื่อน (มือถือ / iPad)
track.addEventListener('scroll', () => {
  window.requestAnimationFrame(updateActiveCard);
});

// ตอนคลิก (เผื่อ desktop)
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.scrollIntoView({
      behavior: 'smooth',
      inline: 'center'
    });
  });
});

// init ครั้งแรก
updateActiveCard();
