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

    if(distance < card.offsetWidth * 0.45){
      card.classList.add('active');
    }else{
      card.classList.remove('active');
    }
  });
}

track.addEventListener('scroll', ()=>{
  requestAnimationFrame(updateActiveCard);
});
window.addEventListener('load', updateActiveCard);

/* ===== Touch detect ===== */
track.addEventListener('touchstart', e=>{
  startX = e.touches[0].clientX;
  isDragging = false;
},{passive:true});

track.addEventListener('touchend', e=>{
  const endX = e.changedTouches[0].clientX;
  if(Math.abs(endX - startX) > 15){
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
    }, 420); // ตรงกับ transition
  });
});
