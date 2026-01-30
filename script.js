const track = document.getElementById('track');
const cards = document.querySelectorAll('.card');

function updateActive(){
  const center = track.scrollLeft + track.offsetWidth / 2;

  cards.forEach(card=>{
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const distance = Math.abs(center - cardCenter);

    card.classList.toggle(
      'active',
      distance < card.offsetWidth * 0.45
    );
  });
}

track.addEventListener('scroll', () => {
  requestAnimationFrame(updateActive);
});

window.addEventListener('load', updateActive);

cards.forEach(card=>{
  card.addEventListener('click', ()=>{
    const link = card.dataset.link;
    if(link){
      window.location.href = link;
    }
  });
});
