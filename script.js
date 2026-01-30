const cards = document.querySelectorAll('.card');

/* click เข้า product */
cards.forEach(card => {
  card.addEventListener('click', () => {
    const model = card.dataset.model;
    window.location.href = `product.html?model=${model}`;
  });
});

/* ขีดเส้นใต้เมนู */
const nav = document.querySelector('.main-nav');
const indicator = document.querySelector('.nav-indicator');
const active = nav.querySelector('.active');

function moveIndicator(el) {
  indicator.style.width = el.offsetWidth + 'px';
  indicator.style.left = el.offsetLeft + 'px';
}

moveIndicator(active);

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.querySelector('.active')?.classList.remove('active');
    link.classList.add('active');
    moveIndicator(link);
  });
});
