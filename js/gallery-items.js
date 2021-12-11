export default // Создание и рендер разметки по массиву данных и предоставленному шаблону.

//console.log(createListIItem(gallery));

function createListItem(gallery) {
  return gallery
    .map(({ name }) => {
      return `
    <li class="gallery-item">${name}</li>`;
    })
    .join("");
}
