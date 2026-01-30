const track = document.querySelector('.track');
const cards = document.querySelectorAll('.card');
const navLinks = document.querySelectorAll('.nav-link');
const indicator = document.querySelector('.nav-indicator');

/* ===== CARD CLICK ===== */
cards.forEach(card => {
  card.addEventListener('click', () => {
    const model = card.dataset.model;
    window.location.href = `product.html?model=${model}`;
  });
});

/* ===== AUTO ACTIVE CARD ===== */
function updateActiveCard() {
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

  cards.forEach(c => c.classList.remove('active'));
  if (closest) closest.classList.add('active');
}

track.addEventListener('scroll', () => {
  clearTimeout(track._t);
  track._t = setTimeout(updateActiveCard, 80);
});

updateActiveCard();

/* ===== NAV UNDERLINE ===== */
function moveIndicator(el) {
  indicator.style.width = el.offsetWidth + 'px';
  indicator.style.left = el.offsetLeft + 'px';
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    moveIndicator(link);
  });
});

moveIndicator(document.querySelector('.nav-link.active'));
