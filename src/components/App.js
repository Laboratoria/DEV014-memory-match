export const App = (data) => {
  const container = document.createElement('div'); // Contenedor principal
  container.classList.add('container');

  if (data && Array.isArray(data)) {
    const duplicatedItems = [...data, ...data];
    
    console.log("...", duplicatedItems);

    // generar random duplicated items 
    
    duplicatedItems.forEach(() => {
      const card = document.createElement('div'); // Contenedor de cada tarjeta
      card.classList.add('card');
     
      const frontDiv = document.createElement('div'); // Parte frontal de la tarjeta
      frontDiv.classList.add('front');

      const backDiv = document.createElement('div'); // Parte trasera de la tarjeta
      backDiv.classList.add('back');
      const imgBack = document.createElement('img');
      // Asigno una imagen aleatoria para la parte trasera de la tarjeta
      const randomItem = duplicatedItems[Math.floor(Math.random() * duplicatedItems.length)];

      card.dataset.id = randomItem.id; // Asignar un ID a cada tarjeta
      imgBack.src = randomItem.image;
      imgBack.alt = randomItem.name;
      backDiv.appendChild(imgBack);

      card.appendChild(frontDiv);
      card.appendChild(backDiv);

      container.appendChild(card);
    });
 

  return container;
}
};
export default App;

