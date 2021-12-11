export default // Создание и рендер разметки по массиву данных и предоставленному шаблону.

//console.log(createSliderItem(gallery));

function createSliderItem(gallery) {
  return gallery.map(({ picture, logo, description }) => {
    return `
     <div class="slider-content">
        <div class="img-container">
          <img class="slider-image"
            src="${picture}"
            alt="${description}" />
        </div>    
        <div class="info-container">
            <span class="logo">${logo}</span>
            <p class="description">${description}</p>
        </div>
     </div>`;
  });
}
