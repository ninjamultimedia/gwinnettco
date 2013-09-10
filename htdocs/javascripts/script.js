$(window).ready( function() {
  /** windows phone 7 detection **/
  //'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0) Asus;Galaxy6' || 'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0) Asus;Galaxy6'

  var uAgent = navigator.userAgent;
  if ( uAgent.indexOf('IEMobile') > 0 )
  $('html').addClass('iemobile');

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
    auto: 3000,
    callback: indexChanged
  });

  /** for the near me results dropdown toggling **/
  if ( $('.nearme-results').length > 0 ) {
    $results = $('.nearme-results');
    $results.find('li.parent > a').on( 'click', function(e) {
      e.preventDefault();
      $this = $(this);
      isActive = $this.closest('.parent').hasClass('expanded');
      if ( isActive ) return false;
      console.log( $results.find('.main ul li.parent').children('ul') );
      $results.find('.main ul li.parent').children('ul').slideUp();
      $results.find('.main ul li.parent').removeClass('expanded');
      $this.closest('li.parent').children('ul').slideDown();
      $this.closest('li.parent').addClass('expanded');
    });
  }

});