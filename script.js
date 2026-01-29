/* ===== CAROUSEL ===== */
const track = document.querySelector('.track');
const cards = document.querySelectorAll('.card');

let scrollTimer = null;
let rafId = null;

/* หา card ที่อยู่กลางจอ */
function getCenterCard() {
  const center = window.innerWidth / 2;
  let closest = null;
  let min = Infinity;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;
    const distance = Math.abs(center - cardCenter);

    if (distance < min) {
      min = distance;
      closest = card;
    }
  });

  return closest;
}

/* preview ระหว่างลาก */
function previewCards() {
  const center = window.innerWidth / 2;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const distance = Math.abs(center - (rect.left + rect.width / 2));

    const scale = Math.max(0.92, 1 - distance / 900);
    card.style.transform = `scale(${scale})`;
    card.style.opacity = scale;
  });
}

/* snap + set active */
function snapToCenter() {
  const card = getCenterCard();
  if (!card) return;

  const trackRect = track.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();

  const trackCenter = track.scrollLeft + trackRect.width / 2;
  const cardCenter = card.offsetLeft + cardRect.width / 2;
  const offset = cardCenter - trackCenter;

  track.scrollTo({
    left: track.scrollLeft + offset,
    behavior: 'smooth'
  });

  setTimeout(() => {
    cards.forEach(c => c.classList.remove('is-active'));
    card.classList.add('is-active');
  }, 160);
}

/* scroll handler */
track.addEventListener('scroll', () => {
  if (rafId) cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(previewCards);

  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => {
    snapToCenter();
  }, 120);
});

/* initial */
snapToCenter();

/* click เข้า product (เฉพาะการ์ดที่โฟกัส) */
cards.forEach(card => {
  card.addEventListener('click', () => {
    if (!card.classList.contains('is-active')) return;

    const model = card.dataset.model;
    if (model) {
      window.location.href = `product.html?model=${model}`;
    }
  });
});


/* ===== TOP NAV UNDERLINE ===== */
const navLinks = document.querySelectorAll('.main-nav a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
