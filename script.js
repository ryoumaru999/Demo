const track = document.querySelector('.track');
const cards = document.querySelectorAll('.card');

let scrollTimeout = null;

function getCenterCard() {
  const trackRect = track.getBoundingClientRect();
  const centerX = trackRect.left + trackRect.width / 2;

  let closestCard = null;
  let closestDistance = Infinity;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;
    const distance = Math.abs(centerX - cardCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestCard = card;
    }
  });

  return closestCard;
}

function setActiveCard(card) {
  cards.forEach(c => c.classList.remove('active'));
  card.classList.add('active');

  card.scrollIntoView({
    behavior: 'smooth',
    inline: 'center',
    block: 'nearest'
  });
}

// scroll แล้วค่อยเลือก
track.addEventListener('scroll', () => {
  if (scrollTimeout) clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(() => {
    const centerCard = getCenterCard();
    if (centerCard) setActiveCard(centerCard);
  }, 120);
});

// คลิก = เลือกทันที
cards.forEach(card => {
  card.addEventListener('click', () => {
    setActiveCard(card);
  });
});
