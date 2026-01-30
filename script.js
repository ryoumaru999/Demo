const slider = document.getElementById("slider");
const cards = document.querySelectorAll(".card");

/* ===== DRAG WITH MOUSE ===== */
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", e => {
  isDown = true;
  slider.classList.add("dragging");
  startX = e.pageX;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => isDown = false);
slider.addEventListener("mouseup", () => isDown = false);

slider.addEventListener("mousemove", e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX;
  const walk = (x - startX) * 1.5;
  slider.scrollLeft = scrollLeft - walk;
});

/* ===== AUTO FOCUS ===== */
slider.addEventListener("scroll", () => {
  let center = slider.scrollLeft + slider.offsetWidth / 2;

  cards.forEach(card => {
    const cardCenter =
      card.offsetLeft + card.offsetWidth / 2;

    card.classList.toggle(
      "active",
      Math.abs(center - cardCenter) < card.offsetWidth / 2
    );
  });
});
