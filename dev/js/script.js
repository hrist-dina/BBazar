$(document).ready(function() {
  // Slick slider
  var slickSlider = $(".js-slider");
  if (slickSlider.length > 0) {
    slickSlider.slick({
      dots: false,
      infinite: true,
      slidesToShow: 1,
      prevArrow:
        '<div class="slider__arrow-left"><i class="fas fa-angle-left"></i></div>',
      nextArrow:
        '<div class="slider__arrow-right"><i class="fas fa-angle-right"></i></div>'
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
