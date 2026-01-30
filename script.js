const slider = document.getElementById("slider");
const cards = document.querySelectorAll(".card");

/* ===== mouse drag ===== */
let isDown = false;
let startX, scrollLeft;

slider.addEventListener("mousedown", e => {
  isDown = true;
  startX = e.pageX;
  scrollLeft = slider.scrollLeft;
});

window.addEventListener("mouseup", () => isDown = false);

slider.addEventListener("mousemove", e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX;
  slider.scrollLeft = scrollLeft - (x - startX);
});

/* ===== wheel support (สำคัญมาก) ===== */
slider.addEventListener("wheel", e => {
  e.preventDefault();
  slider.scrollLeft += e.deltaY;
}, { passive: false });

/* ===== auto focus ===== */
slider.addEventListener("scroll", () => {
  const center = slider.scrollLeft + slider.offsetWidth / 2;

  cards.forEach(card => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    card.classList.toggle(
      "active",
      Math.abs(center - cardCenter) < card.offsetWidth / 2
    );
  });
});
