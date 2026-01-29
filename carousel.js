const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    cards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");

    // phase หน้า: redirect ไป product
    // window.location.href = "product.html";
  });
});