//funciones 
// console.lpog o alert a cada card ,luego otra cara ,funcionalidad con estilo
export function shuffle(data) {
  let shuffledData = data.items.sort(() =>{
    return Math.random() * 0.5 ? 1 : -1;
  } );
  return shuffledData;
}

export function FlippHandler() {
  let clickCount = 0;
  let firstCard = null;
  let secondCard = null;

  return function (card) {
    
    if (!card.classList.contains('flipped')) {
      card.classList.add('flipped');
      clickCount++;
      
      if (clickCount === 1) {
        firstCard = card;
        console.log(clickCount, "1ero saved >> ",firstCard);
      } else if (clickCount === 2) {
        secondCard = card;
        console.log(clickCount, "2cond saved >> ",secondCard.getAttribute('data-id'));
        console.log(firstCard.getAttribute('data-id'), " << comparando >> ",secondCard.getAttribute('data-id'));
        // Verificar si los ids son iguales
        if (firstCard.getAttribute('data-id') === secondCard.getAttribute('data-id')) {
          console.log('Las tarjetas son iguales.');
        } else {
          console.log('Las tarjetas son diferentes.');
          // Desgirar las tarjetas después de un breve retraso
          setTimeout(function(firstCard, secondCard) {
            console.log(firstCard, secondCard)
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
          }, 1500,firstCard ,secondCard );
        }
        // Reiniciar el contador de clics y las tarjetas seleccionadas
        clickCount = 0;
        firstCard = null;
        secondCard = null;
      }
    }
    
  };
}






/*export function checkMatch(firstCard, secondCard, resetGuesses, delay) {
  const isMatch = firstCard.dataset.name === secondCard.dataset.name;
  if (isMatch) {
    setTimeout(() => {
      firstCard.classList.add('matched');
      secondCard.classList.add('matched');
      resetGuesses();
    }, delay);
  } else {
    setTimeout(() => {
      firstCard.classList.remove('is-flipped');
      secondCard.classList.remove('is-flipped');
      resetGuesses();
    }, delay);
  }
}

//card.addEventListener('click', () => {
/*export function flipp() {
let clickCount = 0;
 
return function(card) {
  if (clickCount < 2) {
    card.classList.toggle('flipped');
    //console.log(item.id); // Asumiendo que `card.dataset.id` contiene el ID de la tarjeta
    clickCount++;
  }
  if (clickCount === 2) {
    console.log('2 clicks');
    clickCount = 0;
  }
};
}*/









