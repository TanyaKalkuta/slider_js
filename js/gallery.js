import gallery from "./array-gallery.js";
import refs from "./refs.js";
import createListItem from "./gallery-items.js";
import createSliderItem from "./slider-items.js";

// const picturesArray = gallery.map((el) => el.picture);
// const logoArray = gallery.map((el) => el.logo);
// const descriptionsArray = gallery.map((el) => el.description);

let currentIndex = 0;

// Создание и рендер разметки Списка по массиву данных и предоставленному шаблону.
const listItems = createListItem(gallery);
refs.listContainer.insertAdjacentHTML("beforeend", listItems);

const sliderItems = createSliderItem(gallery);
console.log(sliderItems);
refs.sliderContainer.innerHTML = sliderItems[0];

// Загрузка Слайдера по клику на элементе галереи.
refs.listContainer.addEventListener("click", onSliderOpen);

function onSliderOpen(event) {
  console.log(event.target.id);

  const isGalleryItems = event.target.classList.contains("gallery-item");
  if (!isGalleryItems) {
    return;
  }
  currentIndex = +event.target.id;
  refs.sliderContainer.innerHTML = sliderItems[currentIndex];
  // currentIndex = event.target.id;

  if (currentIndex - 1 < 0) {
    refs.btnTop.disabled = true;
    return;
  } else {
    refs.btnDown.disabled = false;
  }

  if (currentIndex + 1 > gallery.length - 1) {
    refs.btnDown.disabled = true;
  } else {
    refs.btnTop.disabled = false;
  }
  console.log(currentIndex - 1);
  console.log(gallery.length);
}
// refs.listContainer.addEventListener("click", onIsActive);

// function onIsActive(event) {
//   // if (event.currentTarget === event.target) {
//   event.target.classList.add("is-active");
//   // }
// }

refs.btnTop.addEventListener("click", onTopKeyPress);

function onTopKeyPress() {
  if (currentIndex - 1 < 0) {
    refs.btnTop.disabled = true;
    return;
  } else {
    refs.btnDown.disabled = false;
  }
  currentIndex -= 1;
  refs.sliderContainer.innerHTML = sliderItems[currentIndex];
}

refs.btnDown.addEventListener("click", onDownKeyPress);

function onDownKeyPress(event) {
  console.log(event.target.id);
  console.log(currentIndex);
  if (currentIndex + 1 > gallery.length - 1) {
    refs.btnDown.disabled = true;
    return;
  } else {
    refs.btnTop.disabled = false;
  }
  currentIndex = +currentIndex + 1;
  console.log(currentIndex);
  refs.sliderContainer.innerHTML = sliderItems[currentIndex];
}
