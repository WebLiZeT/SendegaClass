var mainSlidesIndex = 0;
showMainSlides();

function showMainSlides() {
    var i;
    var mainSlides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < mainSlides.length; i++) {
        mainSlides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
    mainSlidesIndex++;
    if (mainSlidesIndex > mainSlides.length) {mainSlidesIndex = 1} 
    mainSlides[mainSlidesIndex-1].style.display = "block"; 
    dots[mainSlidesIndex-1].className += " active";
    setTimeout(showMainSlides, 4000); // Change image every 4 seconds
};




