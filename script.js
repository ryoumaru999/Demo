/* ===== CARD CLICK ===== */
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const model = card.dataset.model;
    window.location.href = `product.html?model=${model}`;
  });
});

/* ===== NAV UNDERLINE ===== */
const links = document.querySelectorAll('.nav-link');
const indicator = document.querySelector('.nav-indicator');

function moveIndicator(el) {
  indicator.style.width = el.offsetWidth + 'px';
  indicator.style.left = el.offsetLeft + 'px';
}

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    moveIndicator(link);
  });
});

window.addEventListener('load', () => {
  const active = document.querySelector('.nav-link.active');
  moveIndicator(active);
});
