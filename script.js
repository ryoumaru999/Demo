const track = document.getElementById('track');
const cards = document.querySelectorAll('.card');

let isDragging = false;
let startX = 0;

/* ===== Active card ===== */
function updateActiveCard(){
  const center = track.scrollLeft + track.offsetWidth / 2;

  cards.forEach(card=>{
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const distance = Math.abs(center - cardCenter);

    if(distance < card.offsetWidth / 2){
      card.classList.add('active');
    }else{
      card.classList.remove('active');
    }
  });
}

track.addEventListener('scroll', updateActiveCard);
window.addEventListener('load', updateActiveCard);

/* ===== Detect drag ===== */
track.addEventListener('touchstart', e=>{
  isDragging = false;
  startX = e.touches[0].clientX;
});

track.addEventListener('touchmove', e=>{
  if(Math.abs(e.touches[0].clientX - startX) > 10){
    isDragging = true;
  }
});

/* ===== Click to product ===== */
cards.forEach(card=>{
  card.addEventListener('click', ()=>{
    if(isDragging) return;

    const link = card.dataset.link;
    if(link){
      window.location.href = link;
    }
  });
});
