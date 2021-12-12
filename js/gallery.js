import gallery from "./array-gallery.js";
import refs from "./refs.js";
import createListItem from "./gallery-items.js";
import createSliderItem from "./slider-items.js";

let currentIndex = 0;

// Создание и рендер разметки Списка по массиву данных и предоставленному шаблону.
const listItems = createListItem(gallery);
refs.listContainer.insertAdjacentHTML("beforeend", listItems);

//Создаем елемент слайдера:
const sliderItems = createSliderItem(gallery);

//Выводим всегда 1й слайдер при загрузке страницы
refs.sliderContainer.innerHTML = sliderItems[0];

// Загрузка Слайдера по клику на элементе галереи.
refs.listContainer.addEventListener("click", onSliderOpen);

const arreylistItems = document.querySelectorAll(".gallery-item");
console.log(arreylistItems);

// Краснaя заливка по клику на элементе галереи.
function isActiveItem() {
  refs.listContainer.childNodes.forEach((element, indx) => {
    console.log(element);

    if (element.nodeName === "LI" && indx !== currentIndex) {
      refs.listContainer.firstElementChild.classList.remove("is-active");
      element.classList.remove("is-active");
    }
  });
  arreylistItems[currentIndex].classList.add("is-active");
}

function onSliderOpen(event) {
  console.log(currentIndex);
  const isGalleryItems = event.target.classList.contains("gallery-item");
  if (!isGalleryItems) {
    return;
  }
  currentIndex = +event.target.id;
  refs.sliderContainer.innerHTML = sliderItems[currentIndex];

  isActiveItem();

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
  isActiveItem();
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
  isActiveItem();
}
