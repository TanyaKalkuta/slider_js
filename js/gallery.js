import gallery from "./array-gallery.js";
import refs from "./refs.js";
import createListItem from "./gallery-items.js";
import createSliderItem from "./slider-items.js";

let currentIndex = 0;

// Создание и рендер разметки Списка по массиву данных и предоставленному шаблону.
const listItems = createListItem(gallery);
refs.listContainer.insertAdjacentHTML("beforeend", listItems);
// console.dir(refs.listContainer);
// refs.listContainer.children[0].classList.add("is-active");

//Создаем елемент слайдера:
const sliderItems = createSliderItem(gallery);
// console.log(sliderItems);

//Выводим всегда 1й слайдер при загрузке страницы
refs.sliderContainer.innerHTML = sliderItems[0];

// Загрузка Слайдера по клику на элементе галереи.
refs.listContainer.addEventListener("click", onSliderOpen);

// Краснaя заливка по клику на элементе галереи.

function onSliderOpen(event) {
  // console.log(event.target);
  // console.log(event.target.id);
  console.log(currentIndex);
  const isGalleryItems = event.target.classList.contains("gallery-item");
  if (!isGalleryItems) {
    return;
  }
  currentIndex = +event.target.id;
  refs.sliderContainer.innerHTML = sliderItems[currentIndex];
  // console.log(refs.sliderContainer);
  // console.log(refs.sliderItem);
  // currentIndex = event.target.id;

  // Класс Краснaя заливка по клику на элементе галереи.

  // console.log(refs.listContainer);

  refs.listContainer.childNodes.forEach((element, indx) => {
    // console.log(element);

    if (element.nodeName === "LI" && indx !== currentIndex) {
      element.classList.remove("is-active");
    }
  });
  event.target.classList.add("is-active");

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
  // console.log(currentIndex - 1);
  // console.log(gallery.length);
  console.log(currentIndex);
}

//Кнопки перемещения по слайдам:

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
