export const App = (data) => {
  const container = document.createElement('div'); // Contenedor principal
  container.classList.add('container');

  if (data && Array.isArray(data)) {
    // Duplicar los elementos y luego mezclarlos
    const duplicatedItems = [...data, ...data];
    
    duplicatedItems.forEach(item => {
      const card = document.createElement('div'); // Contenedor de cada tarjeta
      card.classList.add('card');
      card.dataset.id = item.id; // Asignar un ID a cada tarjeta

      const frontDiv = document.createElement('div'); // Parte frontal de la tarjeta
      frontDiv.classList.add('front');

      const backDiv = document.createElement('div'); // Parte trasera de la tarjeta
      backDiv.classList.add('back');
      const imgBack = document.createElement('img');
      imgBack.src = item.image;
      imgBack.alt = item.name;
      backDiv.appendChild(imgBack);

      card.appendChild(frontDiv);
      card.appendChild(backDiv);

      container.appendChild(card);
    });
  }

  return container;
};

export default App;
