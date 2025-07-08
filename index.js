const sliderEl = document.getElementById("slider");
const slides = sliderEl.querySelectorAll(".slider__item");
const buttonsEl = document.querySelector(".mywork__buttons");

let position = 2;

function renderSlides() {
  slides.forEach(function (slideEl, i) {
    slideEl.style.left = `calc((100% + 3.2rem) * ${i - position})`;
  });
}

(function () {
  buttonsEl.addEventListener("click", function (ev) {
    if (ev.target.closest(".btn-left")) {
      position = position === 0 ? slides.length - 1 : position - 1;
      renderSlides();
    } else if (ev.target.closest(".btn-right")) {
      position = position === slides.length - 1 ? 0 : position + 1;
      renderSlides();
    }
  });

  renderSlides();
})();
