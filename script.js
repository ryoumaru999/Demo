const track = document.querySelector('.track');
const cards = document.querySelectorAll('.card');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

/* โฟกัสการ์ดกลาง */
function setActive(){
  const center = track.scrollLeft + track.offsetWidth / 2;
  cards.forEach(card=>{
    const c = card.offsetLeft + card.offsetWidth / 2;
    card.classList.toggle(
      'active',
      Math.abs(center - c) < card.offsetWidth / 2
    );
  });
}

track.addEventListener('scroll',()=>requestAnimationFrame(setActive));

/* ปุ่มเลื่อน */
function slide(dir){
  const cardWidth = cards[0].offsetWidth + 24;
  track.scrollBy({
    left: dir * cardWidth,
    behavior:'smooth'
  });
}

prev.onclick = ()=>slide(-1);
next.onclick = ()=>slide(1);

setActive();
