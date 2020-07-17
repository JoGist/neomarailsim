(function($){

$(document).ready(function(){

  $(document).on('click','.js-filter-item > a', function(e){
    e.preventDefault();

    var category = $(this).data('category');
    var $continut = $('.continut-filtre');

    $.ajax({
      url: wpAjax.ajaxUrl,
      data: { action: 'filter', category: category },
      type: 'post',
      success: function(result){
        $el = $(this);
        var value = $el.attr("href");
        $('.continut-filtre').hide().html(result).fadeIn(500);

      },
      error: function(result) {
        console.warn(result);
      }
    });

  });
});

})(jQuery);
