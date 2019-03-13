$(document).ready(function () {
  // Slick slider
  var slickSlider = $(".js-slider");
  if (slickSlider.length > 0) {
    slickSlider.slick({
      dots: false,
      infinite: true,
      slidesToShow: 1,
      prevArrow: '<i class="fas fa-angle-left"></i>',
      nextArrow: '<i class="fas fa-angle-right"></i>'
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