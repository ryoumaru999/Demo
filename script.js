const track = document.querySelector('.track');
const cards = document.querySelectorAll('.card');

let scrollTimeout;

/* หา card ที่อยู่กลางจอ */
function getCenterCard() {
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

  return closest;
}

/* ตั้ง active */
function setActiveCard(card) {
  if (!card) return;
  cards.forEach(c => c.classList.remove('active'));
  card.classList.add('active');
}
 function setActiveNav(filter) {
  navLinks.forEach(link => {
    link.classList.toggle(
      'active',
      link.dataset.filter === filter
    );
  });
}

/* click เข้า product */
cards.forEach(card => {
  card.addEventListener('click', () => {
    const model = card.dataset.model;
    if (model) {
      window.location.href = `product.html?model=${model}`;
    }
  });
});

let scrollTimeout;

track.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(() => {
    const centerCard = getCenterCard();
    setActiveCard(centerCard);
  }, 80); // 👈 สำคัญ
});

/* โหลดครั้งแรก */
setActiveCard(getCenterCard());

