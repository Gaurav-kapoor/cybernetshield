const header = document.querySelector('header');

let scrollpos = window.scrollY

const add_class = () => header.classList.add("color")
  const remove_class = () => header.classList.remove("color")

  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    if (scrollpos >= 5) { add_class() } 
    else { remove_class() }
  })

let innernavhead = $('header .header-wrapper .menu ul li.dropdown-menu .inner-dropdown-menu .inner-menu-heading .inner-menu');

  
  $(innernavhead).hover(function(){
    let ind = $(this).index();
    $(this).addClass('show').siblings().removeClass('show');
    $('header .header-wrapper .menu ul li.dropdown-menu .inner-dropdown-menu .inner-menu-subheading ul').eq(ind).addClass('show').siblings().removeClass('show');
  })

  $('header .header-wrapper .menu-mobile ul li.mob-dropdown').on('click', function(){
    $(this).find('ul').slideToggle();
  })
  
  $('header .header-wrapper .menu-mobile .hamburger').on('click', function(){
    $(this).parent().find('.mob-menu').slideToggle();
  })

if($('#success-story').length > 0) {
let a = 0;
$(window).scroll(function() {

  let oTop = $('#success-story').offset().top - window.innerHeight;
  
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('#success-story .counter').each(function() {
        let $this = $(this);
        jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 8000,
            easing: 'swing',
            step: function () {
                $this.text(Math.ceil(this.Counter));
            }
        });
    });
    a = 1;
  }
});
}



