var buttonsHide = document.querySelectorAll('.toggle-hide'),
    buttonsArray = [].slice.call(buttonsHide),
    modal = document.getElementById('login'),
    modalBg = document.getElementById('modal-bg');

function toggleModal(){
    modal.classList.toggle('unhide');
    modalBg.classList.toggle('unhide');
}

buttonsArray.forEach(function (el){
    el.addEventListener('click', function(ev){
        ev.preventDefault();
        toggleModal();
    });
});



/*downlaod slideshow*/

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  arrows: false,
  dots: false,
  focusOnSelect: true
});

$('a[data-slide]').click(function(e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.slider-nav').slick('slickGoTo', slideno - 1);
});


/*downlaod slideshow new*/

  $(".item").each(function() {
    var img_url = $(this).find('img').attr('src');
    $(this).css({
      'background-size': 'cover',
      'background-image': 'url(' + img_url + ')',
      'background-position': '50% 50%'
    });
    $(this).find('img').hide();
  });