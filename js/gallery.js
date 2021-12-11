import gallery from "./array-gallery.js";
import refs from "./refs.js";
import createListItem from "./gallery-items.js";
// import createSliderItem from "./slider-items.js";

const picturesArray = gallery.map((el) => el.picture);
const logoArray = gallery.map((el) => el.logo);
const descriptionsArray = gallery.map((el) => el.description);

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
const listItems = createListItem(gallery);
refs.listContainer.insertAdjacentHTML("beforeend", listItems);

// Открытие модального окна по клику на элементе галереи.
refs.listContainer.addEventListener("click", onSliderlOpen);

function onSliderlOpen(event) {
  event.preventDefault();
  const isGalleryItems = event.target.classList.contains("gallery-item");
  if (!isGalleryItems) {
    return;
  }
  {
    // refs.lightboxRef.classList.add("is-open");
    refs.sliderImageEl.src = event.target.dataset.source;
    refs.sliderLogoEl = event.target.logo;
    refs.sliderDescriptionEl = event.target.description;
  }
}

// const sliderItems = createSliderItem(gallery);
// refs.sliderContainer.insertAdjacentHTML("beforeend", sliderItems);

// refs.listItem.addEventListener("click", onIsActive);
// function onIsActive(event) {
//   event.preventDefault();
//   refs.listItem.classList.add("is-open");
// }
