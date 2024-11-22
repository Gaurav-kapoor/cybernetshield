$('#mdr-cards-slider .cards-wrapper').slick({
    dots: false,
    arrows:true,
    infinite: true,
    autoplay:true,
    speed: 3000,
    slidesToShow: 3,
    slideToScroll:1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots:true
        }
      }
    ]
  });