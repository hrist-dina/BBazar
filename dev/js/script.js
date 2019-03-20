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

var slickSlider = $(".js-slider-brand");
slickSlider.slick({
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  prevArrow:
    '<div class="slider-brand__arrow-left"><i class="fas fa-angle-left"></i></div>',
  nextArrow:
    '<div class="slider-brand__arrow-right"><i class="fas fa-angle-right"></i></div>'
  /*responsive: [
            {
              settings: {
                slidesToShow: 1,
                arrows: false,
              }
            }
        ],*/
});

var slickSlider = $(".js-slider-gallery");
slickSlider.slick({
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  prevArrow:
    '<div class="slider-gallery__arrow-left"><i class="fas fa-angle-left"></i></div>',
  nextArrow:
    '<div class="slider-gallery__arrow-right"><i class="fas fa-angle-right"></i></div>'
  /*responsive: [
            {
              settings: {
                slidesToShow: 1,
                arrows: false,
              }
            }
        ],*/
});
