import App from './components/App.js';
import data from './data/data.js';

const rootElement = document.querySelector('#root');
console.log(App(data));
rootElement.appendChild(App(data)); // Pasa la data importada como argumento a App


