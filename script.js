<script>
const track = document.getElementById('track');
const cards = document.querySelectorAll('.card');

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
</script>
