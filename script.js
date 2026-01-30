const cards = document.querySelectorAll('.card');
const navLinks = document.querySelectorAll('.nav-link');

/* ===== card click ===== */
cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');

    const model = card.dataset.model;
    if (model) {
      window.location.href = `product.html?model=${model}`;
    }
  });
});

/* ===== nav underline ===== */
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
