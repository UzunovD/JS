'use strict';

let slider = document.querySelector('.slider');

let loadIcon = document.createElement("i");
loadIcon.classList.add("fas", "fa-spinner", "fa-spin");
slider.insertAdjacentElement('afterbegin', loadIcon);

let leftArrow = document.createElement("i");
leftArrow.classList.add("fas", "fa-chevron-circle-left", "slider-leftArrow");
slider.insertAdjacentElement('beforeend', leftArrow);

let rightArrow = document.createElement("i");
rightArrow.classList.add("fas", "fa-chevron-circle-right", "slider-rightArrow");
slider.insertAdjacentElement('beforeend', rightArrow);

window.addEventListener("load", function () {
  loadIcon.style.display = "none";
  imeges.init();

  leftArrow.addEventListener('click', function () {
    imeges.setNextLeftImage();
  })
  rightArrow.addEventListener('click', function () {
    imeges.setNextRightImage();
  })
});

let imeges = {
  /* Номер текущего изображаниея */
  currentIdx: 0,
  /* {HTMLDivElement[]} slides элементы слайдов */
  slides: [],

  /** Получаем все слайды и показываем первый слайд. */
  init() {
    this.slides = document.querySelectorAll('.slider-item');
    this.toggleShowHideImageWithCurrentIdx();
  },

  /** Берем слайд с текущим индексом и переключаем у него класс 
   * hidden-slide */
  toggleShowHideImageWithCurrentIdx() {
    this.slides[this.currentIdx].classList.toggle('hidden-slide');
  },

  /** Переключиться на предыдущее изображение */
  setNextLeftImage() {
    const prevSlide = this.slides[this.currentIdx];
    if (this.currentIdx == 0) {
      this.currentIdx = this.slides.length - 1;
    } else {
      this.currentIdx--;
    }
    const currentSlide = this.slides[this.currentIdx];
    this.toggleShowHideImageWithCurrentIdx();
    currentSlide.classList.add('slider-leftToRightAnimation');
    setTimeout(() => {
      currentSlide.classList.remove('slider-leftToRightAnimation');
      prevSlide.classList.add('hidden-slide');
    }, 500);
  },

  /** Переключиться на следующее изображение */
  setNextRightImage() {
    const prevSlide = this.slides[this.currentIdx];
    if (this.currentIdx == this.slides.length - 1) {
      this.currentIdx = 0;
    } else {
      this.currentIdx++;
    }
    const currentSlide = this.slides[this.currentIdx];
    this.toggleShowHideImageWithCurrentIdx();
    currentSlide.classList.add('slider-rightToLeftAnimation');
    setTimeout(() => {
      currentSlide.classList.remove('slider-rightToLeftAnimation');
      prevSlide.classList.add('hidden-slide');
    }, 500);
  },

  /**
   * метод берет у элемента слайдера его data-атрибуты размеров,
   * и если они определены, то самому слайдеру меняет размеры.
   * @param {HTMLDivElement} slider
   */
  setSizes(slider) {
    let width = slider.getAttribute('data-width');
    let height = slider.getAttribute('data-height');
    if (width !== null && width !== '') {
      slider.style.width = width;
    }
    if (height !== null && height !== '') {
      slider.style.height = height;
    }
  }
};
imeges.setSizes(slider);