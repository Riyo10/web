(function () {
  var sliderImages = document.querySelectorAll(".slider img");
  var prevButton = document.querySelector(".slider-btn.prev");
  var nextButton = document.querySelector(".slider-btn.next");
  var currentImage = 0;

  function reset() {
    for (var i = 0; i < sliderImages.length; i++) {
      sliderImages[i].style.display = "none";
    }
  }

  function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
  }

  function slide() {
    reset();
    sliderImages[currentImage].style.display = "block";
  }

  function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
    slideInterval = setInterval(nextSlide, 3000); // Change interval duration here (in milliseconds)
  }
  
  function prevSlide() {
    currentImage--;
    if (currentImage < 0) {
      currentImage = sliderImages.length - 1;
    }
    slide();
  }

  function nextSlide() {
    currentImage++;
    if (currentImage >= sliderImages.length) {
      currentImage = 0;
    }
    slide();
  }

  startSlide();
  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);
})();