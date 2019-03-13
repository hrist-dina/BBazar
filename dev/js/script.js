$(document).ready(function() {
  // Slick slider
  var slickSlider = $(".js-slider-header");
  if (slickSlider.length > 0) {
    slickSlider.slick({
      dots: false,
      infinite: true,
      slidesToShow: 1,
      prevArrow: '<img class="arrow-back" src="img/arrow-back.svg">',
      nextArrow: '<img class="arrow-next" src="img/arrow-next.svg">'
      /*responsive: [
             {
             settings: {
                 slidesToShow: 1,
                 arrows: false,
             }
             }
         ],*/
    });
  }
});


<i class="fas fa-angle-left"></i>

<i class="fas fa-angle-right"></i>