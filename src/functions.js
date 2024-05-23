//funciones 
// console.lpog o alert a cada card ,luego otra cara ,funcionalidad con estilo
export function shuffle(data) {

  let shuffledData = data.items.sort(() => (Math.random() > .8) ? 1 : -1);
  return shuffledData;
}

export function FlippHandler() {
  let clickCount = 0;
  let firstCard = null;
  let secondCard = null;
  let score = 0;

  return function (card) {

    if (!card.classList.contains('flipped')) {
      card.classList.add('flipped');
      clickCount++;

      if (clickCount === 1) {
        firstCard = card;
        console.log(clickCount, "1ero saved >> ", firstCard);
      } else if (clickCount === 2) {
        secondCard = card;
        console.log(clickCount, "2cond saved >> ", secondCard.getAttribute('data-id'));
        console.log(firstCard.getAttribute('data-id'), " << comparando >> ", secondCard.getAttribute('data-id'));
        // Verificar si los ids son iguales
        
        if (firstCard.getAttribute('data-id') === secondCard.getAttribute('data-id')) {
          console.log('Las tarjetas son iguales.');

          score++;
          document.getElementById('score').textContent = 'Puntaje: ' + score;


          // Verificar si se ha alcanzado el puntaje de 9 
          setTimeout(() => {
            if (score === 9) {
              alert('Completaste el juego memory match');
            }
          }, 100);


        } else {
          console.log('Las tarjetas son diferentes.');
          // Desgirar las tarjetas después de un breve retraso
          setTimeout(function (firstCard, secondCard) {
            console.log(firstCard, secondCard)
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
          }, 400, firstCard, secondCard);
        }

        // Reiniciar el contador de clics y las tarjetas seleccionadas
        clickCount = 0;
        firstCard = null;
        secondCard = null;
      }
    }

  };
}

















