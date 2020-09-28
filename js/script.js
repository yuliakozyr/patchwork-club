$(document).ready(function () {
   $('.burger').click(function (event) {
      $('.burger, .header__rightnav,.header__leftnav').toggleClass('active');
      $('body').toggleClass('lock');
   })
});

//For smooth scroll after clicking on the menu item
$(document).ready(function () {
   $('a[href^="#_"]').click(function () {
      let target = $(this).attr('href');
      $('html, body').animate({
         scrollTop: $(target).offset().top - 80
      }, 1000);
   })
});

//For "Techniques" section. Making the first tab block open by default
$(document).ready(function () {
   $('.techniques__tabblock:first-of-type').addClass('activetab');
   $('.techniques__tabname').click(function (event) {
      $('.techniques__tabblock:first-of-type').removeClass('activetab');
   })
});