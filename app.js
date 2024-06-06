// document.addEventListener("DOMContentLoaded", function () {
//   const slider = document.querySelector(".slider"); // container
//   const slides = document.querySelectorAll(".slide");
//   const prev = document.querySelector(".prev");
//   const next = document.querySelector(".next");

//   let currentIndex = 0;

//   function updateSliderPosition() {
//     const offset = -currentIndex * 100;
//     slider.style.transform = `translateX(${offset}%)`;
//   }

//   prev.addEventListener("click", function () {
//     if (currentIndex > 0) {
//       currentIndex--;
//     } else {
//       currentIndex = slides.length - 1;
//     }
//     updateSliderPosition();
//   });

//   next.addEventListener("click", function () {
//     if (currentIndex < slides.length - 1) {
//       currentIndex++;
//     } else {
//       currentIndex = 0;
//     }
//     updateSliderPosition();
//   });

//   updateSliderPosition();
// });

// slider.js

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.control.prev');
    const nextButton = document.querySelector('.control.next');

    let currentIndex = 0;

    const updateSliderPosition = () => {
        const offset = -currentIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;
    };

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateSliderPosition();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateSliderPosition();
    });

    updateSliderPosition();
});
