const track = document.querySelector('.track');
const cards = document.querySelectorAll('.card');

/* Active focus */
function setActiveCard(){
  const center = track.scrollLeft + track.offsetWidth/2;
  cards.forEach(card => {
    const cardCenter = card.offsetLeft + card.offsetWidth/2;
    card.classList.toggle(
      'active',
      Math.abs(center - cardCenter) < card.offsetWidth/2
    );
  });
}
track.addEventListener('scroll', () => {
  requestAnimationFrame(setActiveCard);
});

/* Support mouse wheel scrolling */
track.addEventListener('wheel', (e) => {
  e.preventDefault();
  track.scrollLeft += e.deltaY;
}, {passive:false});

/* Support drag with mouse/pointer */
let isDown=false, startX, startScroll;
track.addEventListener('pointerdown',(e)=>{
  isDown=true;
  startX=e.clientX;
  startScroll=track.scrollLeft;
  track.classList.add('dragging');
  track.setPointerCapture(e.pointerId);
});
track.addEventListener('pointermove',(e)=>{
  if(!isDown) return;
  track.scrollLeft = startScroll - (e.clientX - startX);
});
track.addEventListener('pointerup',()=>{ isDown=false; track.classList.remove('dragging'); });
track.addEventListener('pointerleave',()=>{ isDown=false; track.classList.remove('dragging'); });

/* Click to center */
cards.forEach(card=>{
  card.addEventListener('click',()=>{
    track.scrollTo({
      left:card.offsetLeft - track.offsetWidth/2 + card.offsetWidth/2,
      behavior:'smooth'
    });
  });
});

/* init */
setActiveCard();
