const track = document.querySelector('.track');
const cards = document.querySelectorAll('.card');

/* focus */
function setActive(){
  const center = track.scrollLeft + track.offsetWidth/2;
  cards.forEach(card=>{
    const cardCenter = card.offsetLeft + card.offsetWidth/2;
    card.classList.toggle(
      'active',
      Math.abs(center-cardCenter) < card.offsetWidth/2
    );
  });
}
track.addEventListener('scroll', ()=>requestAnimationFrame(setActive));

/* 🖱️ mouse wheel = horizontal scroll */
track.addEventListener('wheel',(e)=>{
  e.preventDefault();
  track.scrollLeft += e.deltaY;
},{passive:false});

setActive();
