"use strict";
let slides = document.querySelectorAll("#slides>img");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");

// console.log(slides);
let current = 0;

showSlides(current);

prev.addEventListener("click", () => {
  console.log("hello");
  if (current > 0) {
    current--;
  } else {
    current = slides.length - 1;
  }
  showSlides(current);
});
next.addEventListener("click", () => {
  if (current < slides.length - 1) current++;
  else current = 0;

  showSlides(current);
});

function showSlides(n) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}
