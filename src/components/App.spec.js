import App from './App.js';
import data from './../data/data.js'
import { FlippHandler } from '../functions.js';

describe('App', () => {
  it('should render without crashing', () => {
    const items = data.items;
    const el = App(items);
    expect(el instanceof HTMLElement).toBe(true);
  });
});


//flipp

describe('FlippHandler function', () => {
  // Inicializar variables necesarias para la prueba
  let flippHandler;
  let mockCard1;
  let mockCard2;
  let mockCard3;

  // Antes de cada prueba, configurar el entorno
  beforeEach(() => {
    // Crear una instancia de FlippHandler
    flippHandler = FlippHandler();

    // Crear cartas de prueba simuladas
    mockCard1 = document.createElement('div');
    mockCard1.classList.add('card');
    mockCard1.setAttribute('data-id', '1');

    mockCard2 = document.createElement('div');
    mockCard2.classList.add('card');
    mockCard2.setAttribute('data-id', '2');

    mockCard3 = document.createElement('div');
    mockCard3.classList.add('card');
    mockCard3.classList.add('flipped'); // Simular una carta ya volteada
    mockCard3.setAttribute('data-id', '3');
  });

  // Prueba para verificar el comportamiento al voltear una carta
  test('la card debe girar al hacer click', () => {
    // Ejecutar la función FlippHandler pasando la primera carta
    flippHandler(mockCard1);

    // Verificar que la carta ahora tiene la clase 'flipped'
    expect(mockCard1.classList.contains('flipped')).toBe(true);
  });

  // Prueba para verificar que la función no volteé una carta ya volteada
  test('should not flip a card that is already flipped', () => {
    // Ejecutar la función FlippHandler pasando la tercera carta
    flippHandler(mockCard3);

    // Verificar que la carta no cambió su estado
    expect(mockCard3.classList.contains('flipped')).toBe(true);
  });

  // Prueba para verificar que se manejan correctamente dos cartas volteadas
  test('should handle two flipped cards', () => {
    // Ejecutar la función FlippHandler pasando la primera y segunda carta
    flippHandler(mockCard1);
    flippHandler(mockCard2);

    // Verificar que ambas cartas están volteadas
    expect(mockCard1.classList.contains('flipped')).toBe(true);
    expect(mockCard2.classList.contains('flipped')).toBe(true);
  });
});

