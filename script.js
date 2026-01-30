const track = document.getElementById('track');
const cards = document.querySelectorAll('.card');

let startX = 0;
let isDragging = false;

/* ===== Active Card ===== */
function updateActive(){
  const center = track.scrollLeft + track.offsetWidth / 2;

  cards.forEach(card=>{
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const distance = Math.abs(center - cardCenter);

    card.classList.toggle('active', distance < card.offsetWidth * 0.45);
  });
}

track.addEventListener('scroll', () => {
  requestAnimationFrame(updateActive);
});

window.addEventListener('load', updateActive);

/* ===== Touch detect ===== */
track.addEventListener('touchstart', e=>{
  startX = e.touches[0].clientX;
  isDragging = false;
},{passive:true});

track.addEventListener('touchend', e=>{
  if(Math.abs(e.changedTouches[0].clientX - startX) > 15){
    isDragging = true;
  }
});

/* ===== Click → Expand ===== */
cards.forEach(card=>{
  card.addEventListener('click', ()=>{
    if(isDragging) return;

    const link = card.dataset.link;
    if(!link) return;

    card.classList.add('expanding');

    setTimeout(()=>{
      window.location.href = link;
    }, 420);
  });
});
