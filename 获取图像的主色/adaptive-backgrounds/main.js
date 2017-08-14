;(function(window, document, $){
  $(document).ready(function(){
    var $window       = $(window);
    var $imgWrapper   = $('.image-wrapper');
    var $imgs         = $imgWrapper.find("img");
    var $logoBoxes    = $('.logo .box');
    var $title        = $('h1');
    $imgs.on('ab-color-found', function(e, data){
      $(this).parents('.image-wrapper')
             .attr('data-color', data.color);
      $(this).css({
        border: "1px solid " + data.palette[0].replace(')', ",0.25)").replace('rgb', "rgba")
      });
      $(this).parents('.image-wrapper')
             .find('.swatch')
             .css({ background: data.color })
             .after(data.color)
      if ( $(this).attr('data-description') == 'grandpa' ){
        $(this).parents('.image-wrapper')
               .css({ background: data.color })
      }
    });
    $.adaptiveBackground.run({ parent: '1' });
    $imgWrapper.waypoint(function(direction) {
      if ( $(this).attr('data-colored') )
        return;
      $(this).css({ background: $(this).attr('data-color') })
             .attr('data-colored', 1);
    }, {
      offset: '65%'
    })
  })
})(window, document, jQuery)