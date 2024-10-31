const header = document.querySelector('header');

let scrollpos = window.scrollY

const add_class = () => header.classList.add("color")
  const remove_class = () => header.classList.remove("color")

  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    if (scrollpos >= 50) { add_class() }
    else { remove_class() }
  })

let innernavhead = $('header .header-wrapper .menu ul li.dropdown-menu .inner-dropdown-menu .inner-menu-heading .inner-menu');

  
  $(innernavhead).hover(function(){
    let ind = $(this).index();
    $(this).addClass('show').siblings().removeClass('show');
    $('header .header-wrapper .menu ul li.dropdown-menu .inner-dropdown-menu .inner-menu-subheading ul').eq(ind).addClass('show').siblings().removeClass('show');
  })

  var oTop = $('#success-story').offset().top - window.innerHeight;
  var pTop = $('body').scrollTop();
  $(window).scroll(function(){
      if( pTop > oTop ){
        $('#success-story .counter').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: $(this).text()
          }, {
              duration: 4000,
              easing: 'swing',
              step: function (now) {
                  $(this).text(Math.ceil(now));
              }
          });
        });
      }
  });



