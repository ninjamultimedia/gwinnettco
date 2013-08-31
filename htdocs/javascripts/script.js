$(window).ready( function() {
  if ( $('#slider') ) {
    /**
    * Creates the indicator blocks;
    * todo: make jQuery plugin?
    */

    var slides = $('#slider').find('.slide').toArray();
    var indicator_wrapper_class = 'slider-index-indicator';
    var wrapper_open_HTML = '<ul class="'+indicator_wrapper_class+'">';
    var wrapper_close_HTML = '</ul>';
    var listItems = '';
    var listItem = '<li><a href="#"></a></li>';
    //create the li
    for(var i=0;i<slides.length;i++){
      listItems += listItem;
    }
    //append the ul with the li
    $('#slider').append(wrapper_open_HTML+listItems+wrapper_close_HTML);
    var indicators = $('#slider').find('.'+indicator_wrapper_class).children('li').toArray();
    $(indicators).each(function(i) {
      var fitWidth = 98/slides.length;
      $(this).css({'width':fitWidth+'%','visibility':'visible'});
      $(this).on('click',function(e){
        e.preventDefault();
        slider.slide(i);
      })
    });
    //create a callback handler
    function indexChanged(index,elem) {
      for(var i=0;i<indicators.length;i++){
        $(indicators[i]).removeClass('active');
      }
      $(indicators[index]).addClass('active');
    }
    $(indicators[0]).addClass('active');
  }

  window.slider = new Swipe(document.getElementById('slider'), {
    auto: 1200,
    callback: indexChanged
  });

});