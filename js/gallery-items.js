export default // Создание и рендер разметки по массиву данных и предоставленному шаблону.

function createListItem(gallery) {
  return gallery
    .map((el, index) => {
      return `
    <li id=${index} class="gallery-item">${el.name}</li>`;
    })
    .join("");
}
