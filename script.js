const track = document.querySelector('.track');
const cards = document.querySelectorAll('.card');

function setActiveCard() {
  const center = track.scrollLeft + track.offsetWidth / 2;

  cards.forEach(card => {
    const cardCenter =
      card.offsetLeft + card.offsetWidth / 2;

    card.classList.toggle(
      'active',
      Math.abs(center - cardCenter) < card.offsetWidth / 2
    );
  });
}

track.addEventListener('scroll', () => {
  window.requestAnimationFrame(setActiveCard);
});

// initial
setActiveCard();
