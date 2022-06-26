var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight() + 10;

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 400);
  
  return false;
});
