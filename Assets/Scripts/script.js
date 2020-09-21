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


$(document).ready(function(){
  var price = $(".price").text().trim();
  var quantity = $("#quantity").val();
  console.log(quantity);
  //add listener to plus button
  $("#plus").click(function(e){
    e.preventDefault();
    quantity++;
    $("#quantity").val(quantity);
    $(".price").text(quantity*price);
  });
  $("#minus").click(function(e){
    e.preventDefault();
    if(quantity>1){
      quantity--;
      $("#quantity").val(quantity);
      $(".price").text(quantity*price);
    }
  });
  //set total price
  
});


/*$('.slider').each(function() {
    var $this = $(this);
    var $group = $this.find('.slide_group');
    var $slides = $this.find('.slide');
    var bulletArray = [];
    var currentIndex = 0;
    var timeout;
    
    function move(newIndex) {
      var animateLeft, slideLeft;
      
      advance();
      
      if ($group.is(':animated') || currentIndex === newIndex) {
        return;
      }
      
      bulletArray[currentIndex].removeClass('active');
      bulletArray[newIndex].addClass('active');
      
      if (newIndex > currentIndex) {
        slideLeft = '100%';
        animateLeft = '-100%';
      } else {
        slideLeft = '-100%';
        animateLeft = '100%';
      }
      
      $slides.eq(newIndex).css({
        display: 'block',
        left: slideLeft
      });
      $group.animate({
        left: animateLeft
      }, function() {
        $slides.eq(currentIndex).css({
          display: 'none'
        });
        $slides.eq(newIndex).css({
          left: 0
        });
        $group.css({
          left: 0
        });
        currentIndex = newIndex;
      });
    }
    
    function advance() {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        if (currentIndex < ($slides.length - 1)) {
          move(currentIndex + 1);
        } else {
          move(0);
        }
      }, 4000);
    }
    
    $('.next_btn').on('click', function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    });
    
    $('.previous_btn').on('click', function() {
      if (currentIndex !== 0) {
        move(currentIndex - 1);
      } else {
        move(3);
      }
    });
    
    $.each($slides, function(index) {
      var $button = $('<a class="slide_btn">&bull;</a>');
      
      if (index === currentIndex) {
        $button.addClass('active');
      }
      $button.on('click', function() {
        move(index);
      }).appendTo('.slide_buttons');
      bulletArray.push($button);
    });
    
    advance();
  });*/