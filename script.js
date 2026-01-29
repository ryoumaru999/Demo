const track = document.querySelector('.track');
const cards = Array.from(document.querySelectorAll('.card'));

let scrollTimeout = null;

function getCenterCard() {
  const trackRect = track.getBoundingClientRect();
  const centerX = trackRect.left + trackRect.width / 2;

  let closest = null;
  let minDistance = Infinity;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;
    const distance = Math.abs(centerX - cardCenter);

    if (distance < minDistance) {
      minDistance = distance;
      closest = card;
    }
  });

  return closest;
}

function setActiveCard(card) {
  cards.forEach(c => c.classList.remove('active'));
  if (!card) return;

  card.classList.add('active');

  // ดึงให้การ์ดมาอยู่กลางจริง ๆ
  card.scrollIntoView({
    behavior: 'smooth',
    inline: 'center',
    block: 'nearest'
  });
}
  function goProduct(model){
  window.location.href = "product.html?model=" + model;
}

// 🔑 รอ scroll หยุดจริง (debounce)
track.addEventListener('scroll', () => {
  if (scrollTimeout) clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(() => {
    const centerCard = getCenterCard();
    setActiveCard(centerCard);
  }, 120); // ปรับได้ 100–150
});

// คลิก = เลือกทันที
cards.forEach(card => {
  card.addEventListener('click', () => {
    setActiveCard(card);
  });
});

// init ครั้งแรก
setActiveCard(getCenterCard());
