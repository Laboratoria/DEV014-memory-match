import App from './components/App.js';
import data from './data/data.js';
import { shuffle } from './functions.js';
import { FlippHandler } from './functions.js';


const rootElement = document.querySelector('#root');
let dataShuffle = shuffle(data);
console.log("----", dataShuffle);
rootElement.appendChild(App(dataShuffle)); // Pasa la data importada como argumento a App


// Crear el manejador de clics para girar las tarjetas
const flippHandler = FlippHandler();


// Obtener todas las tarjetas después de que hayan sido añadidas al DOM
const cards = document.querySelectorAll('.card');


// Añadir el evento de clic a cada tarjeta
cards.forEach(card => {
  card.addEventListener('click', () => flippHandler(card));
});



